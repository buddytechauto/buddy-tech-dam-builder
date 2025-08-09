import Layout from "@/components/Layout";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, DollarSign, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "A Global Leader in Building Materials",
      industry: "Construction",
      challenge: "Every day, a constant stream of termination requests required a full day of manual searching across all applications, a process that was slow and prone to error.",
      solution: "Our automated 'gatekeeper' reads HR reports and searches all apps, delivering a flawless, highly accurate report with screenshots for a perfect, compliant audit trail.",
      results: {
        timeSaved: "37 hours/week",
        costSavings: "$5,500/month",
        efficiency: "95% increase in data accuracy"
      },
      quote: "The ROI on this automation was immediate. We've reclaimed hundreds of hours of skilled work per month, and the process is not only faster but significantly more accurate. It's a clear win for our department's budget and productivity.",
      author: "Chris P.  |  IT Manager"
    },
    {
      title: "A Global Leader in Construction",
      industry: "Construction",
      challenge: "Onboarding during large acquisitions was a massive bottleneck. The IT team faced weeks of tedious, error-prone manual account creation, which put all other critical projects on hold.",
      solution: "We built an automation that handles onboarding from start to finish. It processes tickets, creates accounts with correct security roles, and emails personalized login info directly to new users, requiring zero human intervention.",
      results: {
        timeSaved: "1-2/weeks",
        costSavings: "$7,400/month", 
        efficiency: "99% reduction in manual errors"
      },
      quote: "Acquisitions used to mean weeks of tedious work that killed morale. Now, the process is automated, my team stays focused on high-value projects, and we absorb new companies without missing a beat.",
      author: "Dustin B.  |  IT Manager"
    },
    {
      title: "CraftBrew Distribution",
      industry: "Food & Beverage",
      challenge: "Complex inventory tracking and order processing across multiple channels was causing errors and delays",
      solution: "Integrated inventory management system connecting all sales channels with real-time updates",
      results: {
        timeSaved: "25 hours/week",
        costSavings: "$3,200/month",
        efficiency: "90% reduction in inventory errors"
      },
      quote: "We used to have inventory discrepancies every week. Now our numbers are always accurate, and we can actually see what's selling in real-time across all our channels.",
      author: "Tom R., Distribution Manager"
    },
    {
      title: "Premier Real Estate Group",
      industry: "Real Estate",
      challenge: "Manual creation of market reports and client communications was time-intensive and inconsistent",
      solution: "Automated reporting system with personalized client communications and market analysis",
      results: {
        timeSaved: "18 hours/week",
        costSavings: "$2,200/month",
        efficiency: "3x more frequent client updates"
      },
      quote: "Our clients are amazed at how informed we keep them. The automated reports look professional and arrive like clockwork. It's made us look like the experts we are.",
      author: "Jennifer S., Team Lead"
    },
    {
      title: "TechFix Solutions",
      industry: "IT Services",
      challenge: "Ticket tracking and customer communication was fragmented across multiple tools",
      solution: "Unified customer service automation connecting all communication channels",
      results: {
        timeSaved: "22 hours/week",
        costSavings: "$2,800/month",
        efficiency: "50% faster resolution times"
      },
      quote: "We finally have one place where everything happens. Customers get updates automatically, and we can see the full picture of every support case instantly.",
      author: "David L., Support Manager"
    }
  ];

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <ScrollAnimatedSection className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Dams in Action</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses like yours build better processes, save time, 
            and focus on what really matters. These aren't just case studies – they're 
            success stories from real business owners who decided to stop gathering sticks 
            one at a time.
          </p>
        </ScrollAnimatedSection>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <ScrollAnimatedSection key={index} animationDelay={index * 200}>
              <Card className="overflow-hidden">
              <CardHeader className="bg-muted/30">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{study.title}</CardTitle>
                    <CardDescription className="text-lg mt-1">
                      <Badge variant="outline">{study.industry}</Badge>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">The Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">Our Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div className="bg-accent/5 p-6 rounded-lg border">
                      <blockquote className="text-lg italic mb-3">"{study.quote}"</blockquote>
                      <cite className="text-sm font-medium">— {study.author}</cite>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-primary">Results</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                        <Clock className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-semibold">{study.results.timeSaved}</p>
                          <p className="text-sm text-muted-foreground">Time Saved</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                        <DollarSign className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-semibold">{study.results.costSavings}</p>
                          <p className="text-sm text-muted-foreground">Cost Savings</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-semibold">{study.results.efficiency}</p>
                          <p className="text-sm text-muted-foreground">Efficiency Gain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimatedSection className="text-center mt-16 bg-accent/5 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every great dam starts with understanding the landscape. Let's explore how 
            automation can transform your business processes.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Start Your Free Consultation</Link>
          </Button>
        </ScrollAnimatedSection>
      </div>
    </Layout>
  );
};

export default CaseStudies;