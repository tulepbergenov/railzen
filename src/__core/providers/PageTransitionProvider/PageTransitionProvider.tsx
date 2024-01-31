import { ILayout } from "@/shared/types";
import { motion } from "framer-motion";

export const PageTransitionProvider = ({ children }: ILayout) => {
  return (
    <>
      <motion.div
        animate={{
          opacity: 0,
          pointerEvents: "none",
        }}
        className="fixed inset-0 z-[100] flex h-full w-full items-center justify-center bg-white"
        exit={{
          opacity: 1,
          pointerEvents: "auto",
        }}
        initial={{
          opacity: 1,
          pointerEvents: "auto",
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0,
        }}
      ></motion.div>
      {children}
    </>
  );
};
