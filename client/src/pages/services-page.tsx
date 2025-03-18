import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Server, FileCheck, Bell, Users } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities in your systems, networks, and applications.",
    features: [
      "Web Application Testing",
      "Network Infrastructure Testing",
      "Mobile App Security Testing",
      "Social Engineering Assessments"
    ]
  },
  {
    icon: Lock,
    title: "Vulnerability Assessment",
    description: "Regular scans and assessments to detect and address security weaknesses before they can be exploited.",
    features: [
      "Automated Vulnerability Scanning",
      "Manual Security Testing",
      "Risk Assessment",
      "Remediation Guidance"
    ]
  },
  {
    icon: Bell,
    title: "Threat Detection & Response",
    description: "24/7 monitoring and rapid response to security incidents to minimize potential damage.",
    features: [
      "Real-time Monitoring",
      "Incident Response",
      "Threat Hunting",
      "Security Analytics"
    ]
  },
  {
    icon: FileCheck,
    title: "Compliance Audits",
    description: "Expert guidance to help you achieve and maintain compliance with industry security standards.",
    features: [
      "ISO 27001 Compliance",
      "GDPR Compliance",
      "PCI DSS Compliance",
      "HIPAA Compliance"
    ]
  },
  {
    icon: Server,
    title: "Managed Security Services",
    description: "Comprehensive security management to protect your digital assets around the clock.",
    features: [
      "Firewall Management",
      "Email Security",
      "Endpoint Protection",
      "Access Management"
    ]
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Employee security awareness training to create a strong security culture in your organization.",
    features: [
      "Security Awareness Programs",
      "Phishing Simulations",
      "Compliance Training",
      "Best Practices Workshops"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive cybersecurity solutions tailored to protect your business
          from evolving digital threats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <service.icon className="h-8 w-8 text-primary mb-4" />
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
