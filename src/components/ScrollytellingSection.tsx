import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ScrollytellingSection = () => {
  const [activeScene, setActiveScene] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scenes = [
    {
      id: 1,
      title: "The Busy Beaver's Dilemma",
      content: "Feeling like a busy beaver? Gnawing away at the same tasks, day after day?",
      visual: "🦫📋"
    },
    {
      id: 2,
      title: "The Never-Ending Stream",
      content: "The logs just keep floating in. It feels like you can barely keep your head above water. Dam, that's a lot of work.",
      visual: "🪵🌊"
    },
    {
      id: 3,
      title: "A Smarter Approach",
      content: "But woodn't it be nice if there was a smarter way to build? A blueprint for success?",
      visual: "📐✨"
    },
    {
      id: 4,
      title: "Enter Automation",
      content: "This is automation. It's your digital blueprint, telling every part of your business exactly where to go, automatically. No more guesswork.",
      visual: "🤖⚙️"
    },
    {
      id: 5,
      title: "The Trigger",
      content: "It all starts with a trigger. When a new log (a customer inquiry, a sale, a new file) enters the stream...",
      visual: "⚡🎯"
    },
    {
      id: 6,
      title: "The Action",
      content: "...your blueprint gets to work. It directs every piece of the puzzle, instantly. Creating folders, sending emails, updating lists—it all just flows.",
      visual: "🔄💫"
    },
    {
      id: 7,
      title: "The Result",
      content: "The result? A dam good structure, built in record time. And something you never thought you'd have again: free time.",
      visual: "🏗️🎉"
    },
    {
      id: 8,
      title: "Your Business Blueprint",
      content: "Your business is your dam. Stop logging tasks by hand and let automation streamline your workflow.",
      visual: "📈🚀"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which scene should be active based on scroll position
      const scrollProgress = (scrollY - sectionTop + windowHeight / 2) / sectionHeight;
      const sceneIndex = Math.floor(scrollProgress * scenes.length);
      const clampedIndex = Math.max(0, Math.min(scenes.length - 1, sceneIndex));

      setActiveScene(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scenes.length]);

  return (
    <section ref={sectionRef} className="relative min-h-[400vh] bg-gradient-to-b from-background to-muted/30">
      {/* Sticky Visual Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-6">
          {/* Visual Indicator */}
          <div className="text-8xl md:text-9xl animate-pulse">
            {scenes[activeScene]?.visual}
          </div>
          
          {/* Scene Counter */}
          <div className="flex justify-center space-x-2">
            {scenes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeScene ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Text Content */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            ref={(el) => (textRefs.current[index] = el)}
            className="h-screen flex items-center justify-start pl-8 md:pl-16"
            style={{ top: `${(index / scenes.length) * 100}%` }}
          >
            <div
              className={`max-w-md space-y-4 transition-all duration-500 pointer-events-auto ${
                index === activeScene
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-30 translate-x-4'
              }`}
            >
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {scene.title}
                </h3>
                <p className="text-xl leading-relaxed text-foreground">
                  {scene.content}
                </p>
                
                {/* CTA for final scene */}
                {index === scenes.length - 1 && (
                  <div className="mt-8 space-y-4">
                    <p className="text-lg font-semibold text-primary">
                      Ready to build better?
                    </p>
                    <Button asChild size="lg" className="w-full">
                      <Link to="/contact">
                        Get Your Blueprint
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollytellingSection;