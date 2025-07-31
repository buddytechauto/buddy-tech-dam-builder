import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationDelay?: number;
}

const ScrollAnimatedSection = ({ 
  children, 
  className,
  animationDelay = 0 
}: ScrollAnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        transitionDelay: isVisible ? `${animationDelay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;