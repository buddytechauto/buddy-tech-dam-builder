import Layout from "@/components/Layout";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import TimeCalculator from "@/components/TimeCalculator";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, DollarSign, TrendingUp, Users } from "lucide-react";
import riverBackground from "@/assets/river-background.jpg";
const Index = () => {
  const benefits = [{
    icon: Clock,
    title: "Save Hours Every Week",
    description: "Reclaim 10-30 hours monthly by automating your most time-consuming tasks."
  }, {
    icon: DollarSign,
    title: "Reduce Operating Costs",
    description: "Cut manual labor costs while eliminating costly human errors."
  }, {
    icon: TrendingUp,
    title: "Scale Without Stress",
    description: "Handle 10x more work without hiring 10x more people."
  }, {
    icon: Users,
    title: "Keep Your Personal Touch",
    description: "Automation handles the repetitive stuff so you can focus on relationships."
  }];
  const testimonials = [{
    quote: "Buddy Tech saved us 20 hours a week on invoicing. I actually have time to focus on growing the business now!",
    author: "Sarah M.",
    company: "The Marina Co."
  }, {
    quote: "Our follow-up rate went from 30% to 95%. Customers love how responsive we've become.",
    author: "Mike D.",
    company: "GreenThumb Landscaping"
  }, {
    quote: "The automated reports look so professional. Our clients think we've hired a whole new team!",
    author: "Jennifer S.",
    company: "Premier Real Estate"
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-center bg-no-repeat bg-cover" style={{
      backgroundImage: `url('/lovable-uploads/9fce0edc-3bbd-4b5e-a49d-b6f31188e7f1.png')`
    }}>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <ScrollAnimatedSection className="space-y-8 bg-black/50 p-8 rounded-lg backdrop-blur-sm">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">Automate your Dam business!</h1>
                <p className="text-lg text-secondary leading-relaxed max-w-2xl my-[13px] py-0 md:text-xl mx-px px-[2px] text-left">Drowning in manual tasks and costly errors? Our automations act as the floodgates to efficiency, holding back the chaos and releasing a steady stream of productivity.</p>
              </div>

              {/* Call to Action */}
              <div className="space-y-6">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Link to="/contact">Reclaim My Time</Link>
                </Button>
                
                <div className="flex flex-col gap-4 text-sm text-secondary">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Free 30-min consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Custom-built for your unique process</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Save time, reduce cost, and focus on growth </span>
                  </div>
                  
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* Right Image */}
            <ScrollAnimatedSection animationDelay={200} className="flex justify-center lg:justify-end">
              <div className="relative">
                
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Scrollytelling Section */}
      <ScrollAnimatedSection>
        <ScrollytellingSection />
      </ScrollAnimatedSection>

      {/* Tame Your To-Do List Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">From Logjam to Perfect Flow</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">Is your workflow a messy stream? 
Our expert beavers use a 4-step blueprint to build you a dam good automated system.</p>
          </ScrollAnimatedSection>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-primary/30 via-primary to-primary/30 h-full z-0"></div>

            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left Side - Content */}
              <ScrollAnimatedSection className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold border-4 border-background shadow-lg">
                      1
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Let's Map Your River</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">In a friendly 30-minute chat, we'll explore your unique flow, listen to your goals, and pinpoint the exact 'logjams' causing you headaches.</p>
                </div>
                
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/contact">
                    Start My Blueprint <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </ScrollAnimatedSection>

              {/* Right Side - Image */}
              <ScrollAnimatedSection animationDelay={200} className="flex justify-center">
                <div className="relative">
                  <img src="/lovable-uploads/51a5084a-9a85-4d35-bcdf-2b0a19e4d3e9.png" alt="Beaver automation blueprint visualization" className="w-full max-w-md rounded-2xl shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
                </div>
              </ScrollAnimatedSection>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20 relative z-10">
              {/* Left Side - Image */}
              <ScrollAnimatedSection animationDelay={200} className="flex justify-center">
                <div className="relative">
                  <img src="/src/assets/beavers-building-robots.png" alt="Team of beavers building robots which are building the dam" className="w-full max-w-md rounded-2xl shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
                </div>
              </ScrollAnimatedSection>

              {/* Right Side - Content */}
              <ScrollAnimatedSection className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold border-4 border-background shadow-lg">
                      2
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Engineering the Flow</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">Using data from your 'river survey,' our master builders engineer the schematics for your automated dam. We then specify the right 'bots' and design the core structure to handle your unique current.</p>
                </div>
                
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  
                </Button>
              </ScrollAnimatedSection>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20 relative z-10">
              {/* Left Side - Content */}
              <ScrollAnimatedSection className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold border-4 border-background shadow-lg">
                      3
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Taming the Chaotic Current</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">With the plan set, the implementation phase begins. We build the automated structures that tame the chaotic currents of manual work, ensuring your data flows exactly where it needs to go.</p>
                </div>
                
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/contact">
                    Start My Blueprint <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </ScrollAnimatedSection>

              {/* Right Side - Image */}
              <ScrollAnimatedSection animationDelay={200} className="flex justify-center">
                <div className="relative">
                  <img src="/src/assets/robotic-arms-building-dam.png" alt="Robotic arms and drones building the dam with precision automation" className="w-full max-w-md rounded-2xl shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
                </div>
              </ScrollAnimatedSection>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20 relative z-10">
              {/* Left Side - Image */}
              <ScrollAnimatedSection animationDelay={200} className="flex justify-center">
                <div className="relative">
                  <img src="/src/assets/completed-dam-operational.png" alt="Impressive completed dam working perfectly with controlled water flow" className="w-full max-w-md rounded-2xl shadow-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
                </div>
              </ScrollAnimatedSection>

              {/* Right Side - Content */}
              <ScrollAnimatedSection className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold border-4 border-background shadow-lg">
                      4
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">The Dam is Declared Operational!</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">We launch your new system, and as your productivity soars, we remain on hand to monitor, analyze, and optimize its performance for powerful, long-term results.</p>
                </div>
              </ScrollAnimatedSection>
            </div>

            {/* Full-width CTA Button */}
            <ScrollAnimatedSection className="mt-20">
              <div className="text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-24 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-md">
                  <Link to="/contact">Build my Automation</Link>
                </Button>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Block - White Background */}
      <section className="py-20 bg-card">
        <div className="container">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Why Choose Business Process Automation?</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Transform your business operations with custom automation solutions that eliminate manual work, 
              reduce errors, and create consistent, scalable processes.
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => <ScrollAnimatedSection key={index} animationDelay={index * 100}>
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-tertiary" />
                  </div>
                  <CardTitle className="text-xl text-secondary">{benefit.title}</CardTitle>
                </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <ScrollAnimatedSection>
            <TimeCalculator />
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions about automation? We've got answers.
            </p>
          </ScrollAnimatedSection>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimatedSection>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    What exactly is an automation, anyway?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    Think of an automation as your own personal beaver crew working behind the scenes, 24/7. It's a smart system we build that connects the apps you already use (like your email, accounting software, and CRM). When a new "log"—like a new sale or a filled-out contact form—enters the stream, your automation crew instantly directs it where it needs to go, all without you lifting a finger.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    My business has a very specific process. Can you really build something custom for me?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    Absolutely. In fact, custom is the only way we work. Every river has a unique flow, so every dam we build is designed from a custom blueprint. During our initial "Map Your River" call, we learn all about your specific challenges, goals, and the tools you use. We build solutions that fit your business like a glove, not the other way around.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    This sounds complicated and expensive. Is it?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    It's not complicated for you—that's why we're your buddies! We handle all the technical "engineering" and heavy lifting. Our goal is to make the process feel simple and exciting for you.
                    <br /><br />
                    As for cost, think of it as an investment in getting your time back. We design solutions to fit different budgets, and our focus is always on building a 'dam' that saves you far more in time and money than it costs. We're very transparent about pricing after our initial chat.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    How long does it take to build our 'dam'?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    The timeline depends on the complexity of the workflow we're building. A simple 'dam' to automate a single, clear task can be up and running very quickly. A more complex system connecting many apps will naturally take a bit longer to engineer perfectly. After our initial "Map Your River" call, we'll have a clear picture of the scope and will give you a detailed project timeline in our proposal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    What happens after the automation is built? Are we on our own?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    Never! We don't just build the dam and walk away. Our most popular service is our ongoing support, what we call our "Beaver Buddy on Watch" program. We stick around to monitor performance, make optimizations, and ensure your automated workflows continue to run smoothly and adapt as your business grows. We're your long-term partners in efficiency.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    Is my business big enough (or 'techy' enough) for automation?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    That's a question we hear all the time, and the answer is almost always yes. It's a common myth that automation is only for huge, tech-savvy corporations.
                    <br /><br />
                    The real question isn't about the size of your company; it's about the size of your 'logjams.' Do you have tasks you do over and over again? That's your opportunity. We've built simple, powerful 'dams' for one-person businesses and complex systems for large teams. The goal is always the same: to save you time and headaches.
                    <br /><br />
                    And you absolutely don't need to be 'techy'—that's our job! We're your automation buddies. You explain the problem to us in plain English, and we handle all the technical building behind the scenes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    How secure is my data with your automations?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    Your data's security is our top priority. Think of it this way: we build the 'dam' on your property, using your tools. The automation runs on secure servers that you control, and the data never leaves the trusted apps you already use (like Google Suite, QuickBooks, etc.). Your information flows through private, encrypted channels that we build, but it is never stored by us. You own the dam, you own the river, and you own the data—always.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Proof - White Background */}
      <section className="py-20 bg-card">
        <div className="container">
          <ScrollAnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary">Business Automation Success Stories</h2>
            <p className="text-xl text-foreground">
              See how our automation services have transformed these businesses and saved them countless hours
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <ScrollAnimatedSection key={index} animationDelay={index * 150}>
                <Card className="border-none shadow-lg bg-card">
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-primary text-lg">★</span>)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="text-lg italic text-foreground">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-semibold text-secondary">{testimonial.author}</p>
                      <p className="text-sm text-tertiary">{testimonial.company}</p>
                    </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Maple Leafs Blue Background */}
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <ScrollAnimatedSection className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-card">
              Ready to Build Your Masterpiece?
            </h2>
            <p className="text-xl text-card leading-relaxed">
              Let's chat about your business. Our 30-minute consultation is free, friendly, and jargon-free. 
              You'll walk away with a clear understanding of what's possible and a roadmap to get there.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <Link to="/contact">
                  Book Your Free Call <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-card text-card hover:bg-card hover:text-secondary">
                <Link to="/services">View Automation Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-card">
              <Badge variant="outline" className="bg-card/10 border-card text-card">
                ✓ No commitment required
              </Badge>
              <Badge variant="outline" className="bg-card/10 border-card text-card">
                ✓ Usually available within 24 hours
              </Badge>
              <Badge variant="outline" className="bg-card/10 border-card text-card">
                ✓ Get actionable advice immediately
              </Badge>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </Layout>;
};
export default Index;