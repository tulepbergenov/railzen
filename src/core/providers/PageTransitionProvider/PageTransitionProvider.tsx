import { ILayout } from "@/shared/types";
import { motion } from "framer-motion";

export const PageTransitionProvider = ({ children }: ILayout) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
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
    </motion.div>
  );
};
