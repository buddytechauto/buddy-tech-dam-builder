import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import buddyBefore from "@/assets/buddy-before-automation.png";
import buddyAfter from "@/assets/buddy-after-automation.png";

const BeforeAfterSlider = () => {
  const [sliderValue, setSliderValue] = useState([50]);
  const percentage = sliderValue[0];

  return (
    <div className="relative w-full h-[500px] bg-background rounded-xl overflow-hidden shadow-2xl">
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <img 
          src={buddyBefore} 
          alt="Buddy before automation - overwhelmed with manual tasks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-background/5"></div>
      </div>

      {/* After Image (Revealed by slider) */}
      <div 
        className="absolute inset-0 overflow-hidden transition-all duration-300 ease-out"
        style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}
      >
        <img 
          src={buddyAfter} 
          alt="Buddy after automation - relaxed and efficient"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/20 to-background/5"></div>
      </div>

      {/* Text Overlays */}
      <div className="absolute inset-0 flex">
        {/* Before Text (Left Side) */}
        <div className="w-1/2 flex flex-col justify-center items-start p-8 text-left">
          <div 
            className="transition-opacity duration-300"
            style={{ opacity: percentage < 60 ? 1 : 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-destructive mb-3">
              The Manual Grind
            </h3>
            <p className="text-lg text-muted-foreground">
              How many hours are lost to tasks that could be running on their own? Your talent is wasted on copy & paste
            </p>
          </div>
        </div>

        {/* After Text (Right Side) */}
        <div className="w-1/2 flex flex-col justify-center items-end p-8 text-right">
          <div 
            className="transition-opacity duration-300"
            style={{ opacity: percentage > 40 ? 1 : 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Work Less. Do More.
            </h3>
            <p className="text-lg text-muted-foreground">
              Reclaim your day. Let automation handle the predictable, so you can solve the exceptional.
            </p>
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-primary/80 shadow-lg transition-all duration-300 z-10"
        style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-lg flex items-center justify-center">
          <div className="w-1 h-4 bg-primary-foreground rounded-full"></div>
        </div>
      </div>

      {/* Interactive Slider */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-md mx-auto">
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Before</span>
            <span>After</span>
          </div>
        </div>
      </div>

      {/* Before/After Labels */}
      <div className="absolute top-4 left-4">
        <span className="bg-destructive/90 text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4">
        <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          After
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;