import Layout from "@/components/Layout";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Database, Server, Shield, Cloud, Monitor } from "lucide-react";

const NerdyGnawledge = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollAnimatedSection>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Nerdy Gnawledge
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              For the curious builders who want to look under the waterline.
            </p>
            
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-lg leading-relaxed mb-8">
                Welcome, fellow architect. You've found the blueprint room. This is where we show you the engineering, the materials, and the sheer force of will that goes into building every automated system. We believe in transparency and robust design, because a dam is only as strong as its core.
              </p>
              <p className="text-lg leading-relaxed">
                So, grab a coffee (or whatever you drink when you're geeking out), and let's see how we build.
              </p>
            </div>
            </ScrollAnimatedSection>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Guiding Philosophy: The Master Blueprint</h2>
              <p className="text-lg text-muted-foreground">
                We don't just stack technologies; we architect ecosystems. Our approach is built on three unbreakable pillars:
              </p>
            </ScrollAnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimatedSection animationDelay={200}>
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>No two rivers are the same. We use a hybrid, tool-agnostic approach to build the right solution, not just the easy one.</p>
                </CardContent>
                </Card>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection animationDelay={400}>
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We build dams that can become lakes. Our systems are designed from day one to handle growth, ensuring the processes we build today will support you tomorrow.</p>
                </CardContent>
                </Card>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection animationDelay={600}>
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A dam's most important job is to be impenetrable. Security isn't an afterthought; it's woven into the very foundation of everything we create.</p>
                </CardContent>
                </Card>
              </ScrollAnimatedSection>
            </div>
          </div>
        </section>

        {/* The Log Stack Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <ScrollAnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Log Stack: Core Components & Materials</h2>
              <p className="text-lg text-muted-foreground">
                Here's a look at the trusted tools and technologies we use to construct our automated workflows.
              </p>
            </ScrollAnimatedSection>

            <div className="space-y-12">
              {/* Intelligence Layer */}
              <ScrollAnimatedSection>
                <div>
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">The Brains (Intelligence Layer)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Cpu className="h-5 w-5" />
                        Artificial Intelligence (AI)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We leverage a suite of AI models for everything from natural language understanding to predictive analytics, allowing our automations to think, reason, and adapt.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Monitor className="h-5 w-5" />
                        Robotic Process Automation (RPA)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We employ a hybrid RPA strategy, combining UI-based automation with deep, API-level integration. This gives us the power to automate literally any process, on any system, legacy or modern.</p>
                    </CardContent>
                  </Card>
                </div>
                </div>
              </ScrollAnimatedSection>

              {/* Integration & Data */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">The Nervous System (Integration & Data)</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>n8n</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>This is the powerful, node-based heart of our workflows. Its flexibility allows us to connect anything to everything, creating intricate, reliable data flows that form the backbone of our automations.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Supabase</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our go-to for a robust backend. It provides a powerful PostgreSQL database, authentication, and auto-generated APIs, giving us a secure and scalable foundation for data management.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Custom APIs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>When an off-the-shelf connection won't do, we build our own. We are fluent in creating and consuming RESTful and GraphQL APIs to ensure seamless communication between all parts of your digital ecosystem.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Infrastructure */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Server className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">The Habitat (Infrastructure & Deployment)</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Docker</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Every process is containerized using Docker. This ensures consistency from our development environment all the way to production, eliminating the "it worked on my machine" problem forever.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Linux Servers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our systems run on the proven stability and security of Linux, providing a rock-solid foundation for all operations.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Virtual Machines & VPS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We utilize virtualized environments to create isolated, secure, and easily replicable systems for both development and client hosting.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Fort Knox Security: Protecting the Dam</h2>
            </div>
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-4">
                  Security is not a feature; it's our state of being. We operate on a principle of layered defense, ensuring your data and processes are protected from every angle.
                </p>
                <p className="text-lg leading-relaxed">
                  We employ end-to-end encryption, Principle of Least Privilege, regular third-party penetration testing, and compliance with standards like SOC 2 and ISO 27001. Every piece of data is treated as critical, with access controls, intrusion detection, and comprehensive logging to ensure a verifiable and secure audit trail.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Deployment Models */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cloud className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Your Habitat or Ours? Unmatched Flexibility</h2>
            </div>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Your automation infrastructure should live where it serves you best. We offer two primary deployment models:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Hosted by Us: The Turnkey Pond</CardTitle>
                  <Badge variant="secondary">Fully Managed</Badge>
                </CardHeader>
                <CardContent>
                  <p>Let us manage the infrastructure so you can focus on your business. We host your automated systems in our secure, high-performance environment, running on our own VPS or on the world's most trusted cloud platforms, including Google Cloud, Amazon Web Services (AWS), or Microsoft Azure. It's fully managed, monitored, and maintained by our expert beavers.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">On-Premise: Your Private River</CardTitle>
                  <Badge variant="secondary">Full Control</Badge>
                </CardHeader>
                <CardContent>
                  <p>For businesses with specific data sovereignty, compliance, or security requirements, we can deploy the entire automation system within your own walls. We'll set up and configure a dedicated server system in your company's building or private data center, giving your IT team full physical control over the environment.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Beyond the Build */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Beyond the Build: What Makes an Agency Elite</h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Building the automation is just the start. A truly thriving ecosystem requires more. Here's what else we bring to the table:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Monitor className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">24/7 Monitoring & Observability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">We use tools like Prometheus and Grafana to watch over your systems, catching potential issues before they become problems.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Redundancy & High-Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">We design for resilience with load balancing and redundant systems to ensure near-zero downtime.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Database className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Comprehensive Data Backups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Your data is backed up regularly to secure, geographically separate locations, with point-in-time recovery to protect against any data loss scenario.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Brain className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Crystal-Clear Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">When we hand over the keys, you get a full set of blueprints. We provide detailed documentation so your team understands exactly how everything works and how to manage it.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NerdyGnawledge;