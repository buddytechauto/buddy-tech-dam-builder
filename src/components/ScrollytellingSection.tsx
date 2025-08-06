import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const ScrollytellingSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      headline: "It Starts With a Plan",
      body: "Your business is powerful, but chaos can jam up the flow. We believe every great business needs a great blueprint."
    },
    {
      headline: "First, We Map the River",
      body: "We start by diving deep into your workflow to understand exactly how your business flows."
    },
    {
      headline: "Finding the Logjams",
      body: "This lets us pinpoint the bottlenecks—the repetitive tasks and manual work that are slowing you down."
    },
    {
      headline: "The Blueprint Gets to Work",
      body: "Once we have the plan, our automated systems are ready to start building."
    },
    {
      headline: "Perfect, Every Single Time",
      body: "Tasks are done instantly and without error, turning chaos into a perfectly structured workflow."
    },
    {
      headline: "Enjoy the Steady Flow",
      body: "With your automated dam complete, productivity flows effortlessly through your business."
    },
    {
      headline: "A Dam Good Feeling",
      body: "You get to focus on the big picture, knowing the busywork is handled. Now that's a reason to relax."
    },
    {
      headline: "Let's Build Yours.",
      body: "",
      cta: true
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate progress through the section
      const startTrigger = sectionTop - windowHeight / 2;
      const endTrigger = sectionTop + sectionHeight - windowHeight / 2;
      
      if (scrollY >= startTrigger && scrollY <= endTrigger) {
        const progress = (scrollY - startTrigger) / (endTrigger - startTrigger);
        const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[400vh] bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pinned Graphic */}
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden">
                {/* Dam Visual - Changes based on activeStep */}
                <div className="relative w-full h-full bg-gradient-to-b from-sky-200 to-sky-400 dark:from-sky-800 dark:to-sky-900">
                  {/* River Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-300/30 to-blue-500/50 dark:via-blue-700/30 dark:to-blue-800/50" />
                  
                  {/* Dam Structure - Progressive Build */}
                  <div className={cn(
                    "absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000",
                    activeStep >= 0 ? "opacity-30" : "opacity-0"
                  )}>
                    <div className="w-48 h-24 bg-gradient-to-t from-amber-800 to-amber-600 dark:from-amber-900 dark:to-amber-700 rounded-t-lg relative">
                      {/* Dam logs get added progressively */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-amber-700 to-amber-500 dark:from-amber-800 dark:to-amber-600 rounded-t-lg transition-all duration-1000",
                        activeStep >= 4 ? "opacity-100 scale-100" : "opacity-50 scale-95"
                      )} />
                    </div>
                  </div>

                  {/* Robotic Arms - Appear in step 4 */}
                  <div className={cn(
                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700",
                    activeStep >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  )}>
                    <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
                    <div className="w-12 h-2 bg-primary/80 rounded-full mt-2" />
                  </div>

                  {/* Relaxing Beaver - Appears in final steps */}
                  <div className={cn(
                    "absolute top-1/4 right-1/4 transition-all duration-700",
                    activeStep >= 6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    <div className="w-12 h-12 bg-amber-600 dark:bg-amber-700 rounded-full" />
                  </div>

                  {/* Blueprint Grid - Visible early */}
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    activeStep >= 0 && activeStep <= 2 ? "opacity-30" : "opacity-0"
                  )}>
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-1 p-4">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-primary/20 rounded-sm" />
                      ))}
                    </div>
                  </div>

                  {/* Step Indicators */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={cn(
                          "w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-500",
                          (step === 1 && activeStep >= 1) || 
                          (step === 2 && activeStep >= 3) || 
                          (step === 3 && activeStep >= 5)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-muted-foreground/30 text-muted-foreground"
                        )}
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scrolling Text */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className={cn(
                    "transition-all duration-700 ease-out",
                    activeStep === index
                      ? "opacity-100 translate-x-0"
                      : activeStep > index
                      ? "opacity-40 -translate-x-4"
                      : "opacity-20 translate-x-4"
                  )}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {step.headline}
                  </h2>
                  {step.body && (
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {step.body}
                    </p>
                  )}
                  {step.cta && (
                    <Button size="lg" className="text-lg px-8">
                      Start My Blueprint
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollytellingSection;