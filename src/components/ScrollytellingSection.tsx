import { useEffect, useState } from "react";
import damProgression from "@/assets/dam-progression.png";

const ScrollytellingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "We identify the repetitive tasks that slow you down",
      description: "Just like a beaver surveys the stream, we start by understanding your business flow. We'll map out every process that's eating up your time and energy.",
      stage: "foundation"
    },
    {
      title: "We design and build robust automations that work for you 24/7", 
      description: "With a clear blueprint in hand, we construct your automation systems piece by piece. Each tool is carefully chosen and integrated to work seamlessly with your existing workflow.",
      stage: "building"
    },
    {
      title: "Enjoy the peace of mind that comes with a streamlined, error-free workflow",
      description: "Your business now runs like a well-engineered dam – smooth, reliable, and requiring minimal maintenance. You're free to focus on what really matters: growing your business.",
      stage: "complete"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionStart = document.getElementById('scrollytelling')?.offsetTop || 0;
      const sectionHeight = document.getElementById('scrollytelling')?.offsetHeight || 0;
      
      const progress = Math.max(0, Math.min(1, (scrollY - sectionStart + windowHeight / 2) / sectionHeight));
      const stepIndex = Math.floor(progress * steps.length);
      
      setActiveStep(Math.min(stepIndex, steps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="scrollytelling" className="relative min-h-[200vh] bg-gradient-to-b from-background to-muted/30">
      {/* Sticky visualization */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-4xl mx-auto px-6">
          {/* Dam progression image */}
          <div className="relative w-full h-64 mb-8">
            <img 
              src={damProgression} 
              alt="Dam building progression" 
              className="w-full h-full object-contain transition-all duration-1000 ease-out"
              style={{
                filter: `sepia(${activeStep * 0.2}) hue-rotate(${activeStep * 15}deg)`,
                transform: `scale(${1 + activeStep * 0.1})`,
              }}
            />
            
            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-500 ease-out"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  {activeStep + 1}
                </div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  Step {activeStep + 1} of {steps.length}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                {steps[activeStep].title}
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {steps[activeStep].description}
              </p>
            </div>

            {/* Stage indicator */}
            <div className="flex justify-center space-x-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= activeStep 
                      ? 'bg-accent scale-110' 
                      : 'bg-muted border-2 border-accent/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll trigger areas */}
      <div className="absolute inset-0 pointer-events-none">
        {steps.map((_, index) => (
          <div 
            key={index}
            className="h-[66.66vh]"
            style={{ top: `${index * 33.33}%` }}
          />
        ))}
      </div>
    </section>
  );
};

export default ScrollytellingSection;