import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Company Overview */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About CyberGuard</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Leading the way in cybersecurity solutions with expertise, innovation, and dedication to protecting our clients' digital assets.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide cutting-edge cybersecurity solutions that protect organizations from evolving digital threats while enabling their growth and innovation in the digital world.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the most trusted partner in cybersecurity, setting the standard for excellence in digital protection and security innovation.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-6">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-muted-foreground">We maintain the highest standards of honesty and ethical conduct.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-muted-foreground">We strive for excellence in everything we do.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-muted-foreground">We work together to achieve the best results for our clients.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Lightbulb className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">We continuously evolve to stay ahead of emerging threats.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "John Smith",
              role: "Chief Executive Officer",
              bio: "20+ years of experience in cybersecurity and technology leadership."
            },
            {
              name: "Sarah Johnson",
              role: "Chief Technical Officer",
              bio: "Expert in advanced threat detection and security architecture."
            },
            {
              name: "Michael Chen",
              role: "Head of Security Operations",
              bio: "Specialist in incident response and security operations."
            }
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Our Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "ISO 27001 Certified",
            "CISSP Certified Professionals",
            "PCI DSS Compliant",
            "SOC 2 Type II Certified"
          ].map((cert, index) => (
            <div key={index} className="p-4 border rounded-lg bg-background/50">
              <p className="font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
