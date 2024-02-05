import { MotionValue, useScroll, useSpring, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const useSlideUp = (ref: any) => {
  const { scrollYProgress: sy } = useScroll({ target: ref });

  const yp = useParallax(sy, -300);

  const y = useSpring(yp, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { sy, y };
};
