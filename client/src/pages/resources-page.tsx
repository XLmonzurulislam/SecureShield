import { useQuery } from "@tanstack/react-query";
import { Resource } from "@shared/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FileDown, FileText } from "lucide-react";
import { formatDistance } from "date-fns";

function ResourceSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-16" />
        <Skeleton className="h-10 w-32 mt-4" />
      </CardContent>
    </Card>
  );
}

export default function ResourcesPage() {
  const { data: resources, isLoading, error } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-destructive">Failed to load resources: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Security Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Download our cybersecurity guides, whitepapers, and case studies to enhance your security knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          Array(6).fill(0).map((_, i) => <ResourceSkeleton key={i} />)
        ) : resources?.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                {resource.title}
              </CardTitle>
              <CardDescription>
                Added {formatDistance(new Date(resource.createdAt), new Date(), { addSuffix: true })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {resource.description}
              </p>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                asChild
              >
                <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer">
                  <FileDown className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
