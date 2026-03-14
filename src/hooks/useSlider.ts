import { useState, useCallback, useEffect } from "react";

interface UseSliderProps {
  totalSlides: number;
  initialIndex?: number;
  autoPlayInterval?: number | null;
  animationDuration?: number;
}

interface UseSliderReturn {
  activeIndex: number;
  isAnimating: boolean;
  goTo: (index: number) => void;
  goPrev: () => void;
  goNext: () => void;
}

export const useSlider = ({
  totalSlides,
  initialIndex = 0,
  autoPlayInterval = null,
  animationDuration = 600,
}: UseSliderProps): UseSliderReturn => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      const normalizedIndex =
        ((index % totalSlides) + totalSlides) % totalSlides;

      if (normalizedIndex === activeIndex) return;
      setIsAnimating(true);
      setActiveIndex(normalizedIndex);
      setTimeout(() => setIsAnimating(false), animationDuration);
    },
    [isAnimating, activeIndex, totalSlides, animationDuration],
  );

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [goTo, activeIndex]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [goTo, activeIndex]);

  useEffect(() => {
    if (autoPlayInterval === null) return;
    const timer = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [goNext, autoPlayInterval]);

  return { activeIndex, isAnimating, goTo, goPrev, goNext };
};
