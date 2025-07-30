import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import buddyAfter from "@/assets/buddy-after-automation.png";

const BeforeAfterSlider = () => {
  const [sliderValue, setSliderValue] = useState([1]);
  const percentage = sliderValue[0];


  return (
    <div className="relative w-full h-[500px] bg-background rounded-xl overflow-hidden shadow-2xl">
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/97fb18e5-df1d-45ac-8252-6dbb30cca52d.png" 
          alt="Buddy before automation - overwhelmed with manual tasks"
          className="w-full h-full object-cover"
        />
      </div>

      {/* After Image (Revealed by slider) */}
      <div 
        className="absolute inset-0 overflow-hidden transition-all duration-300 ease-out"
        style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)` }}
      >
        <img 
          src="/lovable-uploads/8607ff93-614a-459a-b758-00f9e85d9d57.png" 
          alt="Buddy after automation - relaxed and efficient"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Overlays - Centered at top */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-auto">
        {/* Before Text */}
        <div 
          className="transition-opacity duration-300 bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border/20 text-center"
          style={{ opacity: percentage < 50 ? 1 : 0 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-destructive mb-2">
            Inbox Avalanche. Sound familiar?
          </h3>
          <p className="text-sm text-foreground max-w-xs">
            Still manually sifting through endless emails, feeling completely buried. We've all been there.
          </p>
        </div>

        {/* After Text */}
        <div 
          className="transition-opacity duration-300 bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border/20 text-center absolute top-0 left-0"
          style={{ opacity: percentage >= 50 ? 1 : 0 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
            Caught in the Email Storm?
          </h3>
          <p className="text-sm text-foreground max-w-xs">
            Reclaim your day with intelligent automation
          </p>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-primary/80 shadow-lg transition-all duration-300 z-10"
        style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-lg flex items-center justify-center animate-pulse">
          <div className="w-1 h-4 bg-primary-foreground rounded-full animate-[wiggle_3s_ease-in-out_infinite]"></div>
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
        </div>
      </div>


      {/* Before/After Labels */}
      {percentage < 50 && (
        <div className="absolute top-4 left-4">
          <span className="bg-destructive/90 text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
            Before
          </span>
        </div>
      )}
      {percentage >= 50 && (
        <div className="absolute top-4 right-4">
          <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            After
          </span>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;