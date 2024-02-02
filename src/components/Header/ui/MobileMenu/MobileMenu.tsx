import { LangPicker } from "@/components";
import {
  ArrowSolidRightIcon,
  BurgerCloseIcon,
  BurgerOpenIcon,
  TriangleIcon,
  UserIcon,
} from "@/shared/icons";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { HEADER_NAV_ITEMS, HEADER_NAV_OTHER_ITEMS } from "../../constants";
import { useMobileMenu } from "./MobileMenu.hook";
import styles from "./MobileMenu.module.scss";
import { IMobileMenu } from "./MobileMenu.type";

export const MobileMenu = ({ className, ...props }: IMobileMenu) => {
  const { isWhite, isSticky, onOpen, isOpen, onClose, onApplyModalOpen } =
    useMobileMenu();

  return (
    <div
      className={classNames(
        "lg:hidden",
        {
          ["[--header-clr-text:#ffffff]"]: isWhite,
        },
        className,
      )}
      {...props}
    >
      <div
        className={classNames(
          "fixed left-0 top-0 w-full py-[18px] text-[14px] font-medium uppercase leading-[140%] transition-[background,box-shadow] duration-300 ease-in-out",
          {
            ["bg-white shadow-md"]: isSticky,
          },
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <Link
              aria-label="Главная"
              className="inline-block w-[68px]"
              title="Главная"
              to={"/"}
            >
              <img
                alt="Логотип"
                className="h-auto w-full"
                height={37}
                src="/logo.svg"
                width={68}
              />
            </Link>
            <button
              aria-controls="menu"
              aria-label="Открыть меню"
              className="inline-block text-[var(--header-clr-text)] transition-[opacity,color] duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
              title="Открыть меню"
              type="button"
              onClick={onOpen}
            >
              <BurgerOpenIcon
                className={classNames("h-auto w-[32px]", {
                  ["text-[#244563]"]: isSticky,
                })}
              />
            </button>
          </div>
        </div>
        <div
          className={classNames(
            "fixed left-0 top-0 h-svh w-screen overflow-y-auto overflow-x-hidden bg-[#DFE7F5] transition-[transform,opacity,visibility,pointer-events]",

            {
              ["pointer-events-none invisible -translate-x-full opacity-0"]:
                !isOpen,
            },
          )}
        >
          <div className="absolute -left-[500px] top-[150px] h-[700px] w-[700px] rotate-45">
            <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
            <div className="absolute right-[170px] top-[170px] h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
          </div>
          <div className="container relative z-[2] h-full">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between py-[18px]">
                <Link
                  aria-label="Главная"
                  className="inline-block w-[68px]"
                  title="Главная"
                  to={"/"}
                >
                  <img
                    alt="Логотип"
                    className="h-auto w-full"
                    height={37}
                    src="/logo.svg"
                    width={68}
                  />
                </Link>
                <button
                  aria-controls="menu"
                  aria-label="Открыть меню"
                  className="inline-block text-[#244563] transition-[opacity,color] duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                  title="Открыть меню"
                  type="button"
                  onClick={onClose}
                >
                  <BurgerCloseIcon className="h-auto w-[32px]" />
                </button>
              </div>
              <ul className="mt-[40px] flex flex-wrap items-center gap-x-[24px] gap-y-[15px]">
                <li className="flex">
                  <Link
                    className="relative grid grid-cols-[1fr_24px] items-center gap-x-[10px] text-[14px] font-medium uppercase leading-[140%] before:absolute before:-bottom-[4px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[var(--header-clr-text)] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:before:w-full md:hover:before:w-full"
                    target="_blank"
                    to={"https://my.ktze.kz/"}
                  >
                    <span>Личный кабинет</span>
                    <UserIcon className="h-auto w-full" />
                  </Link>
                </li>
                <li className="flex">
                  <button
                    className="relative grid grid-cols-[1fr_24px] items-center gap-x-[10px] text-[14px] font-medium uppercase leading-[140%] before:absolute before:-bottom-[4px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[var(--header-clr-text)] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:before:w-full md:hover:before:w-full"
                    type="button"
                    onClick={onApplyModalOpen}
                  >
                    <span>Подать заявку</span>
                    <ArrowSolidRightIcon className="h-auto w-full" />
                  </button>
                </li>
              </ul>
              <ul className="mt-[42px] flex flex-col gap-y-[5px]">
                {HEADER_NAV_ITEMS.map((item) => (
                  <li className="flex" key={item.href}>
                    <NavLink
                      className={({ isActive }) =>
                        classNames(
                          "group inline-block w-full border-b border-b-[#244563] p-[8px] transition-opacity duration-300 ease-in-out",
                          {
                            ["opacity-50"]: !isActive,
                          },
                        )
                      }
                      to={item.href}
                    >
                      <span className="grid grid-cols-[8px_1fr] items-center gap-x-[16px] transition-transform duration-300 ease-in-out group-active:translate-x-[15px]">
                        <TriangleIcon className="h-auto w-full text-[#AB9475]" />
                        <span>{item.name}</span>
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className="mt-[42px] flex flex-col gap-y-[5px]">
                {HEADER_NAV_OTHER_ITEMS.map((item) => {
                  if (item.isBlank) {
                    return (
                      <li className="flex" key={item.href}>
                        <Link
                          className="inline-block w-full border-b border-[#244563] p-[8px] duration-300 ease-in-out active:opacity-50"
                          target="_blank"
                          to={item.href}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li className="flex" key={item.href}>
                      <Link
                        className="inline-block w-full border-b border-[#244563] p-[8px] duration-300 ease-in-out active:opacity-50"
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-[37px] flex justify-end">
                <LangPicker isMobile />
              </div>
              <p
                className={classNames(
                  "mt-auto flex flex-col pb-[16px] pt-[40px] font-extralight",
                  styles.copyright,
                )}
              >
                <span>KTZ</span>
                <span>EXPRESS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
