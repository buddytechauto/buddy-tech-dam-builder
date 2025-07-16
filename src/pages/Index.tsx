import Layout from "@/components/Layout";
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
  const benefits = [
    {
      icon: Clock,
      title: "Save Hours Every Week",
      description: "Reclaim 10-30 hours monthly by automating your most time-consuming tasks."
    },
    {
      icon: DollarSign,
      title: "Reduce Operating Costs",
      description: "Cut manual labor costs while eliminating costly human errors."
    },
    {
      icon: TrendingUp,
      title: "Scale Without Stress",
      description: "Handle 10x more work without hiring 10x more people."
    },
    {
      icon: Users,
      title: "Keep Your Personal Touch",
      description: "Automation handles the repetitive stuff so you can focus on relationships."
    }
  ];

  const testimonials = [
    {
      quote: "Buddy Tech saved us 20 hours a week on invoicing. I actually have time to focus on growing the business now!",
      author: "Sarah M.",
      company: "The Marina Co."
    },
    {
      quote: "Our follow-up rate went from 30% to 95%. Customers love how responsive we've become.",
      author: "Mike D.",
      company: "GreenThumb Landscaping"
    },
    {
      quote: "The automated reports look so professional. Our clients think we've hired a whole new team!",
      author: "Jennifer S.",
      company: "Premier Real Estate"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-20"
        style={{
          backgroundImage: `url(${riverBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            {/* Main Headlines */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                Your Buddy in IT Automation
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                See the difference automation makes with Buddy Tech
              </p>
            </div>

            {/* Before/After Slider */}
            <div className="max-w-5xl mx-auto">
              <BeforeAfterSlider />
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link to="/contact">
                  → Let's Build Your Automation
                </Link>
              </Button>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Free 30-min consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>No technical knowledge required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>See results in 30 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrollytelling Section */}
      <ScrollytellingSection />

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Build Your Business Dam?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Just like a well-built dam creates a steady, powerful flow of water, business automation 
              creates a steady, powerful flow of productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <TimeCalculator />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Other Business Owners Are Saying</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it – hear from businesses that have built their automation dams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">★</span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Ready to Build Your Masterpiece?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's chat about your business. Our 30-minute consultation is free, friendly, and jargon-free. 
              You'll walk away with a clear understanding of what's possible and a roadmap to get there.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                <Link to="/contact">
                  Book Your Free Call <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Badge variant="outline" className="bg-background/50">
                ✓ No commitment required
              </Badge>
              <Badge variant="outline" className="bg-background/50">
                ✓ Usually available within 24 hours
              </Badge>
              <Badge variant="outline" className="bg-background/50">
                ✓ Get actionable advice immediately
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
