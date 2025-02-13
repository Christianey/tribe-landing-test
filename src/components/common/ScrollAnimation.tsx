import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

const variants = {
  slideUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
  },
  slideLeft: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
  },
  slideRight: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
  },
  scaleUp: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  scaleDown: {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
  delay1: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.35, delay: 0.3 },
  },
  delay2: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.35, delay: 0.35 },
  },
  delay3: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.35, delay: 0.9 },
  },
  delay4: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.35, delay: 1.2 },
  },
};

// const variants = {
//   slideUp: {
//     initial: { y: 100, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     transition: { duration: 0.35 },
//   },
//   slideLeft: {
//     initial: { x: 100, opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     transition: { duration: 0.35 },
//   },
//   slideRight: {
//     initial: { x: -100, opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     transition: { duration: 0.35 },
//   },
//   scaleUp: {
//     initial: { scale: 0.5, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     transition: { duration: 0.35 },
//   },
//   scaleDown: {
//     initial: { scale: 1.5, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     transition: { duration: 0.35 },
//   },
//   delay1: {
//     initial: { scale: 0.5, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     transition: { duration: 0.35, delay: 0.3 },
//   },
//   delay2: {
//     initial: { scale: 0.5, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     transition: { duration: 0.35, delay: 0.35 },
//   },
//   delay3: {
//     initial: { scale: 0.5, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     transition: { duration: 0.35, delay: 0.9 },
//   },
//   delay4: {
//     initial: { scale: 0.5, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     transition: { duration: 0.35, delay: 1.2 },
//   },
// };

type VariantKey = keyof typeof variants;

interface ScrollAnimationProps {
  children: ReactNode;
  initial?: Variants;
  animate?: Variants;
  transition?: any;
  variant?: VariantKey;
  className?: string;
}

interface Variants {
  scale?: number;
  x?: number;
  y?: number;
  opacity?: number;
}

function ScrollAnimation({
  children,
  className,
  variant = "slideUp",
}: ScrollAnimationProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const prefersReducedMotion = useReducedMotion();


  const { initial, animate, transition } = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? {} : initial}
      // initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
