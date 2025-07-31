import Layout from "@/components/Layout";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, FileText, Database, BarChart3, Cog, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Mail,
      title: "Stream Management",
      subtitle: "Email & Communication Automation",
      description: "Keep your communications flowing smoothly with automated email sequences, follow-ups, and customer engagement workflows.",
      features: ["Email drip campaigns", "Customer onboarding sequences", "Lead nurturing automation", "Response management"],
      hoursSaved: "~15 hours/month"
    },
    {
      icon: FileText,
      title: "Paperwork Patrol",
      subtitle: "Document & Report Automation", 
      description: "Transform hours of manual reporting into minutes of automated intelligence. Your documents, delivered on time, every time.",
      features: ["Automated report generation", "Invoice processing", "Contract management", "Compliance documentation"],
      hoursSaved: "~25 hours/month"
    },
    {
      icon: Database,
      title: "Dam Database",
      subtitle: "Data Management & Integration",
      description: "Connect your scattered data sources into one powerful, organized system that works as hard as you do.",
      features: ["CRM integration", "Data synchronization", "Database optimization", "Custom dashboards"],
      hoursSaved: "~30 hours/month"
    },
    {
      icon: BarChart3,
      title: "Flow Analytics",
      subtitle: "Business Intelligence & Insights",
      description: "See exactly where your business is flowing and where it might be getting stuck. Make decisions with confidence.",
      features: ["Real-time dashboards", "Performance metrics", "Trend analysis", "Predictive insights"],
      hoursSaved: "~20 hours/month"
    },
    {
      icon: Cog,
      title: "Process Engineering",
      subtitle: "Workflow Optimization",
      description: "We'll redesign your business processes from the ground up, eliminating bottlenecks and building efficiency into every step.",
      features: ["Process mapping", "Workflow design", "Efficiency optimization", "Team training"],
      hoursSaved: "~40 hours/month"
    },
    {
      icon: Users,
      title: "Team Coordination",
      subtitle: "Collaboration & Project Management",
      description: "Get your whole team working in harmony with automated project management and seamless collaboration tools.",
      features: ["Project automation", "Team workflows", "Task management", "Communication hubs"],
      hoursSaved: "~18 hours/month"
    }
  ];

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <ScrollAnimatedSection className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Dam-Building Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every great dam is built with purpose. We'll help you choose the right combination 
            of automation tools to create a business that flows smoothly and scales effortlessly.
          </p>
        </ScrollAnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollAnimatedSection key={index} animationDelay={index * 100}>
              <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <Badge variant="secondary">{service.subtitle}</Badge>
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <p className="font-semibold text-primary">{service.hoursSaved}</p>
                </div>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>
          ))}
        </div>

        {/* Process Section */}
        <ScrollAnimatedSection className="bg-muted/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How We Build Your Dam</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-accent">1</span>
              </div>
              <h3 className="font-semibold mb-2">Site Survey</h3>
              <p className="text-sm text-muted-foreground">
                We explore your current processes and identify where automation can make the biggest impact.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-accent">2</span>
              </div>
              <h3 className="font-semibold mb-2">Blueprint Design</h3>
              <p className="text-sm text-muted-foreground">
                We create a custom automation plan that fits your business like a perfectly engineered dam.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-accent">3</span>
              </div>
              <h3 className="font-semibold mb-2">Dam Construction</h3>
              <p className="text-sm text-muted-foreground">
                We build, test, and launch your automation systems, then train your team to maintain them.
              </p>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* CTA Section */}
        <ScrollAnimatedSection className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss which services would work best for your business dam.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </ScrollAnimatedSection>
      </div>
    </Layout>
  );
};

export default Services;