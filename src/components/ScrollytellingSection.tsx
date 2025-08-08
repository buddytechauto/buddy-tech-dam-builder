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
  const steps = [{
    headline: "It Starts With a Plan",
    body: "Your business is powerful, but chaos can jam up the flow. We believe every great business needs a great blueprint.",
    image: scene1,
    stepNumber: null
  }, {
    headline: "First, We Map the River",
    body: "We start by diving deep into your workflow to understand exactly how your business flows.",
    image: scene2,
    stepNumber: "Step 1"
  }, {
    headline: "Finding the Logjams",
    body: "This lets us pinpoint the bottlenecks—the repetitive tasks and manual work that are slowing you down.",
    image: scene3,
    stepNumber: null
  }, {
    headline: "The Blueprint Gets to Work",
    body: "Once we have the plan, our automated systems are ready to start building.",
    image: scene4,
    stepNumber: "Step 2"
  }, {
    headline: "Perfect, Every Single Time",
    body: "Tasks are done instantly and without error, turning chaos into a perfectly structured workflow.",
    image: scene5,
    stepNumber: null
  }, {
    headline: "Enjoy the Steady Flow",
    body: "With your automated dam complete, productivity flows effortlessly through your business.",
    image: scene6,
    stepNumber: "Step 3"
  }, {
    headline: "A Dam Good Feeling",
    body: "You get to focus on the big picture, knowing the busywork is handled. Now that's a reason to relax.",
    image: scene7,
    stepNumber: null
  }, {
    headline: "Let's Build Yours.",
    body: "",
    image: scene8,
    stepNumber: null,
    cta: true
  }];
  return;
};
export default ScrollytellingSection;