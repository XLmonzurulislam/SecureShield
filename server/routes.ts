import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { insertBlogPostSchema, insertResourceSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  setupAuth(app);

  // Blog routes
  app.get("/api/blog", async (_req, res) => {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  });

  app.get("/api/blog/:id", async (req, res) => {
    const post = await storage.getBlogPost(Number(req.params.id));
    if (!post) return res.status(404).send("Post not found");
    res.json(post);
  });

  app.post("/api/blog", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.status(403).send("Unauthorized");
    }
    
    const parsed = insertBlogPostSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    
    const post = await storage.createBlogPost({
      ...parsed.data,
      authorId: req.user.id,
    });
    res.status(201).json(post);
  });

  // Resource routes
  app.get("/api/resources", async (_req, res) => {
    const resources = await storage.getResources();
    res.json(resources);
  });

  app.get("/api/resources/:id", async (req, res) => {
    const resource = await storage.getResource(Number(req.params.id));
    if (!resource) return res.status(404).send("Resource not found");
    res.json(resource);
  });

  app.post("/api/resources", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.status(403).send("Unauthorized");
    }
    
    const parsed = insertResourceSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    
    const resource = await storage.createResource(parsed.data);
    res.status(201).json(resource);
  });

  const httpServer = createServer(app);
  return httpServer;
}
