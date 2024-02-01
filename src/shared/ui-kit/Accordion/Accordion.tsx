import { ArrowUpIcon } from "@/shared/icons";
import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { IAccordion } from "./Accordion.type";

export const Accordion = ({
  heading,
  children,
  className,
  ...props
}: IAccordion) => {
  return (
    <Disclosure
      as="div"
      className={classNames(
        "flex flex-col border-b border-b-[#6D6E73]",
        className,
      )}
      {...props}
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            as="button"
            className={classNames(
              "grid min-h-[50px] w-full grid-cols-[1fr_24px] items-center gap-x-[12px] px-[8px] py-[12px] text-start transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
              {
                ["text-[#244563]"]: open,
                ["text-[#6D6E73]"]: !open,
              },
            )}
            type="button"
          >
            <span className="text-[14px] font-semibold leading-[19px] lg:text-[16px] lg:leading-[120%]">
              {heading}
            </span>
            <span className="flex h-[24px] w-full items-center justify-center">
              <ArrowUpIcon
                className={classNames(
                  "h-auto w-[16px] transition-transform duration-200 ease-in-out",
                  {
                    ["-rotate-180"]: open,
                  },
                )}
              />
            </span>
          </Disclosure.Button>
          <AnimatePresence>
            {open && (
              <motion.div
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                className="overflow-hidden text-[#244563]"
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  delay: 0,
                  ease: "easeInOut",
                  duration: 0.2,
                }}
              >
                <Disclosure.Panel
                  as="div"
                  className="px-[8px] py-[16px]"
                  static
                >
                  {children}
                </Disclosure.Panel>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};
