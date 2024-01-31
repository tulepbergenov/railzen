import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { LANG_ITEMS } from "./LangPicker.constant";
import { ILangPicker } from "./LangPicker.type";

export const LangPicker = ({
  isMobile = false,
  className,
  ...props
}: ILangPicker) => {
  const { i18n } = useTranslation();

  const onSelectLang = (lang: string) => {
    i18n.changeLanguage(lang);

    localStorage.setItem("APP_LANG", lang);
  };

  const currentLang = useMemo(() => {
    const findLang = LANG_ITEMS.find(
      (lang) => lang.locale === i18n.language.toLowerCase(),
    );

    return findLang ? findLang.name : null;
  }, [i18n.language]);

  if (isMobile) {
    return null;
  }

  return (
    <Menu as="div" className={classNames("relative", className)} {...props}>
      {({ open }) => (
        <>
          <Menu.Button
            className="inline-block text-[14px] font-medium uppercase leading-[140%]"
            type="button"
          >
            {currentLang}
          </Menu.Button>
          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                className="absolute z-[5] mt-[10px]"
                exit={{
                  opacity: 0,
                  x: 10,
                }}
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0,
                }}
              >
                <Menu.Items
                  as="div"
                  className="flex flex-col gap-y-[5px] focus:outline-none"
                  static
                >
                  {LANG_ITEMS.map((item) => (
                    <Menu.Item as={Fragment} key={item.locale}>
                      {({ active }) => (
                        <button
                          className={classNames(
                            "relative inline-block text-[14px] font-medium uppercase leading-[140%] transition-opacity duration-300 ease-in-out before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[var(--header-clr-text)] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:before:w-full md:hover:before:w-full",
                            {
                              ["before:w-full"]: active,
                              ["opacity-50"]: !active,
                              ["opacity-100"]: item.name === currentLang,
                            },
                          )}
                          type="button"
                          onClick={() => onSelectLang(item.locale)}
                        >
                          {item.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
};
