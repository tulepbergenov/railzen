import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";
import { IModal } from "./Modal.type";

export const Modal = ({
  isOpen = false,
  onClose = () => {},
  children,
}: IModal) => {
  const id = useId();

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={"div"}
          className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
          open={isOpen}
          onClose={onClose}
        >
          <motion.div
            animate={{
              opacity: 1,
            }}
            className="flex min-h-full w-full items-center justify-center bg-black/30 px-[16px] backdrop-blur-[2px]"
            exit={{
              opacity: 0,
            }}
            initial={{
              opacity: 0,
            }}
            key={`${id}-headless-ui-modal-bg`}
            transition={{
              delay: 0,
              ease: "easeInOut",
              duration: 0.2,
            }}
            onClick={onClose}
          >
            <motion.div
              animate={{
                y: 0,
              }}
              className="relative z-10 w-full max-w-[894px] overflow-hidden rounded-[8px] bg-white shadow-md"
              exit={{
                y: 20,
              }}
              initial={{
                y: 20,
              }}
              key={`${id}-headless-ui-modal-content`}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0,
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
