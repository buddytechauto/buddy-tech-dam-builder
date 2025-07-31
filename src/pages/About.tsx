import Layout from "@/components/Layout";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimatedSection className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Meet the Head Beaver</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Every great dam starts with a vision. Here's the story behind Buddy Tech.
            </p>
          </ScrollAnimatedSection>
          
          <div className="prose prose-lg mx-auto">
            
            <ScrollAnimatedSection className="bg-card rounded-lg p-8 border">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4">
                Like many business owners, I used to spend countless hours on repetitive tasks. 
                Email follow-ups, data entry, report generation – you know the drill. I was 
                gathering sticks one by one, building my business dam the hard way.
              </p>
              
              <p className="mb-4">
                Then I discovered the power of automation. Not the scary, complicated kind 
                that requires a computer science degree, but simple, elegant solutions that 
                just work. It was like having a team of helpful beavers working around the 
                clock to keep my business flowing smoothly.
              </p>
              
              <p className="mb-4">
                That's when Buddy Tech was born. We believe every business deserves to work 
                smarter, not harder. Our mission is simple: help you build a rock-solid 
                business dam using modern automation tools, without the technical headaches.
              </p>
            </ScrollAnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <ScrollAnimatedSection animationDelay={200}>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Simplicity:</strong> No jargon, just clear solutions</li>
                    <li>• <strong>Reliability:</strong> Your dam should work 24/7</li>
                    <li>• <strong>Partnership:</strong> We're your automation buddies</li>
                    <li>• <strong>Growth:</strong> Build for today, scale for tomorrow</li>
                  </ul>
                </div>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection animationDelay={400}>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Why "Buddy Tech"?</h3>
                  <p>
                    Technology should feel friendly, not intimidating. We're not just 
                    your service provider – we're your trusted buddy in the journey 
                    toward business automation. Every project starts with understanding 
                    your unique challenges and building solutions that actually work 
                    for your business.
                  </p>
                </div>
              </ScrollAnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;