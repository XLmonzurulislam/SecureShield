import { Link } from "wouter";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">CyberGuard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Protecting your digital assets with cutting-edge cybersecurity solutions.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-sm text-muted-foreground hover:text-primary">Services</Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/blog" className="block text-sm text-muted-foreground hover:text-primary">Blog</Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <div className="space-y-2">
              <Link href="/services#pentesting" className="block text-sm text-muted-foreground hover:text-primary">Penetration Testing</Link>
              <Link href="/services#vulnerability" className="block text-sm text-muted-foreground hover:text-primary">Vulnerability Assessment</Link>
              <Link href="/services#compliance" className="block text-sm text-muted-foreground hover:text-primary">Compliance Audits</Link>
              <Link href="/services#managed" className="block text-sm text-muted-foreground hover:text-primary">Managed Security</Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Security Street</p>
              <p>Cyber City, CC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: contact@cyberguard.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CyberGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
