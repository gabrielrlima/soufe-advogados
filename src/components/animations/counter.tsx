"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Counter({ value, suffix = "", className = "", style }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { 
    duration: 2000,
    bounce: 0
  });
  
  const display = useTransform(spring, (current) => {
    if (suffix === "k") {
      return Math.floor(current / 1000) + suffix;
    }
    return Math.floor(current).toString();
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.p ref={ref} className={className} style={style}>
      {display}
    </motion.p>
  );
}
