import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import ScrollAnimatedSection from "./ScrollAnimatedSection";

// Import scene images
import scene1 from "@/assets/scene-1-chaotic-river.png";
import scene2 from "@/assets/scene-2-blueprint.png";
import scene3 from "@/assets/scene-3-finding-problems.png";
import scene4 from "@/assets/scene-4-automation-ready.png";
import scene5 from "@/assets/scene-5-perfect-building.png";
import scene6 from "@/assets/scene-6-completed-dam.png";
import scene7 from "@/assets/scene-7-relaxing-beaver.png";
import scene8 from "@/assets/scene-8-business-transformation.png";

const ScrollytellingSection = () => {
  const steps = [
    {
      headline: "It Starts With a Plan",
      body: "Your business is powerful, but chaos can jam up the flow. We believe every great business needs a great blueprint.",
      image: scene1,
      stepNumber: null
    },
    {
      headline: "First, We Map the River",
      body: "We start by diving deep into your workflow to understand exactly how your business flows.",
      image: scene2,
      stepNumber: "Step 1"
    },
    {
      headline: "Finding the Logjams",
      body: "This lets us pinpoint the bottlenecks—the repetitive tasks and manual work that are slowing you down.",
      image: scene3,
      stepNumber: null
    },
    {
      headline: "The Blueprint Gets to Work",
      body: "Once we have the plan, our automated systems are ready to start building.",
      image: scene4,
      stepNumber: "Step 2"
    },
    {
      headline: "Perfect, Every Single Time",
      body: "Tasks are done instantly and without error, turning chaos into a perfectly structured workflow.",
      image: scene5,
      stepNumber: null
    },
    {
      headline: "Enjoy the Steady Flow",
      body: "With your automated dam complete, productivity flows effortlessly through your business.",
      image: scene6,
      stepNumber: "Step 3"
    },
    {
      headline: "A Dam Good Feeling",
      body: "You get to focus on the big picture, knowing the busywork is handled. Now that's a reason to relax.",
      image: scene7,
      stepNumber: null
    },
    {
      headline: "Let's Build Yours.",
      body: "",
      image: scene8,
      stepNumber: null,
      cta: true
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container py-24">
        <div className="space-y-32">
          {steps.map((step, index) => (
            <ScrollAnimatedSection 
              key={index} 
              animationDelay={index * 100}
              className="min-h-screen flex items-center"
            >
              <div className={cn(
                "grid lg:grid-cols-2 gap-16 items-center w-full",
                index % 2 === 1 ? "lg:grid-cols-2" : "lg:grid-cols-2"
              )}>
                {/* Image Section */}
                <div className={cn(
                  "relative",
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                )}>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={step.image} 
                      alt={step.headline}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Step Number Badge */}
                    {step.stepNumber && (
                      <div className="absolute top-6 left-6">
                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                          {step.stepNumber}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Text Section */}
                <div className={cn(
                  "space-y-6",
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                )}>
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                      {step.headline}
                    </h2>
                    {step.body && (
                      <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        {step.body}
                      </p>
                    )}
                  </div>

                  {step.cta && (
                    <div className="pt-8">
                      <Button size="lg" className="text-lg px-8 py-6">
                        Start My Blueprint
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ScrollytellingSection;