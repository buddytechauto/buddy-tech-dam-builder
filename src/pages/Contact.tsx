import Layout from "@/components/Layout";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
const Contact = () => {
  return <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <ScrollAnimatedSection className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Ready to Build Your Masterpiece?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every great dam starts with a conversation. Let's chat about your business, 
            explore your challenges, and design the perfect automation solution. 
            Our consultation is free, friendly, and completely jargon-free.
          </p>
        </ScrollAnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollAnimatedSection>
              <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tell Us About Your Business</CardTitle>
                <CardDescription>
                  The more we know about your current processes, the better we can help you build something amazing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your business name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input id="industry" placeholder="e.g., Restaurant, Real Estate, Marketing" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenges">What's Your Biggest Time-Waster?</Label>
                  <Textarea id="challenges" placeholder="Tell us about the repetitive tasks that eat up your time. The more specific, the better! For example: 'I spend 3 hours every Monday creating weekly reports' or 'Customer follow-ups are falling through the cracks.'" rows={4} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">What Would Success Look Like?</Label>
                  <Textarea id="goals" placeholder="If we could wave a magic wand and automate your biggest headaches, what would that free you up to do? How would it change your day-to-day?" rows={3} />
                </div>

                <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Send My Message
                </Button>
              </CardContent>
              </Card>
            </ScrollAnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Consultation Info */}
            <ScrollAnimatedSection animationDelay={200}>
              <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span>Free 30-Minute Consultation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">No sales pitch, just helpful advice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Identify your biggest automation opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Get a custom roadmap for your business</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">Learn exactly what's possible (and what's not)</span>
                </div>
                
                <div className="pt-4 border-t">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Your Free Call
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Usually available within 24 hours
                  </p>
                </div>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>

            {/* Contact Info */}
            <ScrollAnimatedSection animationDelay={400}>
              <Card>
              <CardHeader>
                <CardTitle>More Ways to Chat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">tyson@buddytech.ca</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">(647) 385-6175</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 4 hours during business days</p>
                  </div>
                </div>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>

            {/* Process Timeline */}
            <ScrollAnimatedSection animationDelay={600}>
              <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-3">
                  <Badge className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-accent">1</Badge>
                  <div>
                    <p className="font-medium text-sm">We Review Your Info</p>
                    <p className="text-xs text-muted-foreground">Usually within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Badge className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-accent">2</Badge>
                  <div>
                    <p className="font-medium text-sm">Schedule Your Call</p>
                    <p className="text-xs text-muted-foreground">Pick a time that works for you</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Badge className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-accent">3</Badge>
                  <div>
                    <p className="font-medium text-sm">Get Your Blueprint</p>
                    <p className="text-xs text-muted-foreground">Custom automation plan for your business</p>
                  </div>
                </div>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Contact;