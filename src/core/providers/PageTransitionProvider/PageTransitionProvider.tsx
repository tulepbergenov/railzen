import { ILayout } from "@/shared/types";
import { motion } from "framer-motion";

export const PageTransitionProvider = ({ children }: ILayout) => {
  return (
    <motion.main
      animate={{
        opacity: 1,
      }}
      className="flex-auto"
      exit={{
        opacity: 0,
      }}
      id="main"
      initial={{
        opacity: 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: "0.3",
        delay: 0,
      }}
    >
      {children}
    </motion.main>
  );
};
