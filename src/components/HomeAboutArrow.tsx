import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, 0]);
}

export const HomeAboutArrow = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useParallax(scrollYProgress, 1000);

  return (
    <motion.div
      className="absolute right-0 top-[200px] z-[3] h-[550px] w-[550px] translate-x-[200px] rotate-[225deg] 2xl:h-[670px] 2xl:w-[670px]"
      ref={ref}
      style={{
        right: x,
        opacity: scrollYProgress,
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(-135deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
      <div className="absolute left-0 top-0 h-full w-full -translate-x-[188px] translate-y-[188px] bg-[linear-gradient(-135deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
    </motion.div>
  );
};
