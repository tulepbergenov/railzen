import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const HomeHeroArrow = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: ref,
  });

  return (
    <motion.div
      className="absolute left-0 top-2/4 z-[4] h-[500px] w-[500px] -translate-x-[350px] -translate-y-2/4 rotate-45 2xl:-left-[400px] 2xl:h-[670px] 2xl:w-[670px]"
      ref={ref}
      style={{
        left: scrollY,
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(-135deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
      <div className="absolute left-0 top-0 h-full w-full -translate-x-[130px] translate-y-[130px] bg-[linear-gradient(-135deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)] 2xl:-translate-x-[188px] 2xl:translate-y-[188px]"></div>
    </motion.div>
  );
};
