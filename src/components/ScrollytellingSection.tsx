import { useState, useEffect } from "react";
import scene1 from "@/assets/scene-1-chaotic-river.png";
import scene2 from "@/assets/scene-2-struggling-stick.png";
import scene3 from "@/assets/scene-3-lever-solution.png";
import scene4 from "@/assets/scene-4-robotic-helper.png";
import scene5 from "@/assets/scene-5-completed-dam.png";

const ScrollytellingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "The Challenge",
      description: "Every business owner faces the same overwhelming reality: endless repetitive tasks that steal time from what really matters.",
      image: scene1,
      stage: "Challenge"
    },
    {
      title: "The Struggle",
      description: "Doing everything manually means you're always one step behind, carrying one stick at a time while your competition flows past you.",
      image: scene2,
      stage: "Problem"
    },
    {
      title: "The Smart Approach",
      description: "We identify the repetitive tasks that slow you down and find clever ways to handle multiple processes at once.",
      image: scene3,
      stage: "Solution"
    },
    {
      title: "Technology That Works For You",
      description: "Our automation solutions work alongside you 24/7, handling the tedious stuff with precision while you focus on growing your business.",
      image: scene4,
      stage: "Implementation"
    },
    {
      title: "Your Business, Perfected",
      description: "Enjoy the peace of mind that comes with streamlined, error-free workflows. Your business dam is complete, and the results flow naturally.",
      image: scene5,
      stage: "Success"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = document.getElementById("scrollytelling")?.offsetTop || 0;
      const sectionHeight = document.getElementById("scrollytelling")?.offsetHeight || 1000;
      
      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);
        const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
        setActiveStep(Math.max(0, stepIndex));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section id="scrollytelling" className="relative bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 min-h-[400vh] relative">
          {/* Sticky Visual */}
          <div className="lg:sticky lg:top-20 lg:h-screen flex items-center">
            <div className="w-full relative">
              <div className="relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm p-8 shadow-2xl">
                <img 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title}
                  className="w-full h-auto transition-all duration-700 ease-in-out transform hover:scale-105"
                  style={{
                    filter: `brightness(${0.8 + activeStep * 0.05}) contrast(${1 + activeStep * 0.1})`,
                    transform: `scale(${0.95 + activeStep * 0.01})`
                  }}
                />
                
                {/* Ripple effect for water scenes */}
                {(activeStep === 0 || activeStep === 4) && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary/15 rounded-full animate-ping animation-delay-300"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-16 lg:py-20">
            {steps.map((step, index) => (
              <div key={index} className="min-h-screen flex items-center">
                <div className={`space-y-6 transition-all duration-500 ${
                  activeStep === index 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-50 transform translate-x-4'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-accent scale-125' : 'bg-muted-foreground/30'
                    }`}></div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">
                      {step.stage}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-primary">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="flex space-x-2 pt-4">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i <= activeStep ? 'bg-accent w-8' : 'bg-muted-foreground/20 w-4'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll trigger areas */}
      {steps.map((_, index) => (
        <div 
          key={index}
          className="absolute w-full h-screen pointer-events-none"
          style={{ top: `${index * 100}vh` }}
        ></div>
      ))}
    </section>
  );
};

export default ScrollytellingSection;