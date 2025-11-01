"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const progress = (Date.now() - startTime) / duration;
      if (progress >= 1) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(end * progress));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
