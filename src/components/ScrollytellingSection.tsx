import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted/30 py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Proven Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              See How Automation Transforms Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch real business owners share their automation success stories and discover 
              how the right technology can unlock unprecedented growth and efficiency.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative mb-12">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Play className="w-12 h-12 text-primary ml-1" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">From Chaos to Control</h3>
                    <p className="text-muted-foreground">See the transformation in action</p>
                  </div>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-colors">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="text-center space-y-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-primary">Real Results</h4>
                <p className="text-sm text-muted-foreground">Actual case studies from businesses like yours</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-primary">Proven Process</h4>
                <p className="text-sm text-muted-foreground">Step-by-step automation implementation</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-primary">Fast ROI</h4>
                <p className="text-sm text-muted-foreground">See returns within the first month</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Your Free Automation Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Download Success Stories
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Join 500+ businesses already saving 15+ hours per week with automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;