import Layout from "@/components/Layout";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Stop Drowning in Email: 5 Simple Automation Rules That Will Save You Hours",
      excerpt: "Email doesn't have to be overwhelming. Learn the five automation rules that every small business owner should implement to reclaim their inbox and their sanity.",
      category: "Email Management",
      author: "Buddy Tech Team",
      date: "December 15, 2024",
      readTime: "4 min read",
      featured: true
    },
    {
      title: "The Beaver's Guide to Building Your First Business Automation",
      excerpt: "Just like a beaver carefully plans each part of its dam, successful business automation starts with understanding your workflow. Here's where to begin.",
      category: "Getting Started", 
      author: "Buddy Tech Team",
      date: "December 10, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Why Your Business is Like a Leaky Dam (And How to Fix It)",
      excerpt: "Are you losing time, money, and energy through process gaps? Discover the most common business 'leaks' and the simple fixes that can transform your operations.",
      category: "Process Optimization",
      author: "Buddy Tech Team", 
      date: "December 5, 2024",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "The Hidden Cost of Manual Processes: What Small Businesses Don't Realize",
      excerpt: "That 'quick' manual task you do every day? It's probably costing you more than you think. Here's how to calculate the real cost and when automation pays off.",
      category: "Business Strategy",
      author: "Buddy Tech Team",
      date: "November 28, 2024", 
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Customer Follow-ups That Actually Work: Automation Without Losing the Personal Touch",
      excerpt: "Automated doesn't mean robotic. Learn how to set up customer follow-up sequences that feel personal, timely, and actually help your business grow.",
      category: "Customer Relations",
      author: "Buddy Tech Team",
      date: "November 20, 2024",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "From Chaos to Calm: How One Restaurant Owner Automated Their Inventory Management",
      excerpt: "Meet Sarah, who went from spending 8 hours a week on inventory to having it all done automatically. Here's exactly how she did it.",
      category: "Case Study",
      author: "Buddy Tech Team",
      date: "November 15, 2024",
      readTime: "4 min read",
      featured: false
    }
  ];

  const categories = ["All", "Getting Started", "Email Management", "Process Optimization", "Business Strategy", "Customer Relations", "Case Study"];

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <ScrollAnimatedSection className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">The Dam Builder's Journal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical advice, real stories, and simple strategies for navigating 
            today's changing tech currents—all from your friendly automation buddies.
          </p>
        </ScrollAnimatedSection>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <ScrollAnimatedSection key={index}>
            <Card className="mb-12 overflow-hidden border-2 border-accent/20">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-accent/5 p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-accent text-accent-foreground">Featured</Badge>
                <CardTitle className="text-3xl mb-4">{post.title}</CardTitle>
                <CardDescription className="text-lg mb-6">{post.excerpt}</CardDescription>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <Button className="w-fit">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <p className="text-lg font-medium text-primary">Stop Drowning in Email</p>
                </div>
              </div>
            </div>
            </Card>
          </ScrollAnimatedSection>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <ScrollAnimatedSection key={index} animationDelay={index * 100}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>
          ))}
        </div>

        {/* Newsletter CTA */}
        <ScrollAnimatedSection className="mt-16 bg-accent/5 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Dam Good Tip</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get practical automation advice delivered to your inbox every week. 
            No spam, no fluff – just helpful tips to make your business flow better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90">
              Subscribe
            </Button>
          </div>
        </ScrollAnimatedSection>
      </div>
    </Layout>
  );
};

export default Blog;