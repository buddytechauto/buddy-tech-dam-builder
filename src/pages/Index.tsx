import Layout from "@/components/Layout";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import TimeCalculator from "@/components/TimeCalculator";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <section className="relative overflow-hidden py-20">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <ScrollAnimatedSection className="space-y-8">
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
                <img src="/lovable-uploads/d5f19adc-3cfa-4946-9519-c474812dbb01.png" alt="Automation workflow illustration showing dam and water flow control" className="w-full max-w-6xl h-auto object-contain drop-shadow-2xl" />
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Scrollytelling Section */}
      <ScrollAnimatedSection>
        <ScrollytellingSection />
      </ScrollAnimatedSection>

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