import { LangPicker } from "@/components";
import { ArrowSolidRightIcon, UserIcon } from "@/shared/icons";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { HEADER_NAV_ITEMS, HEADER_NAV_OTHER_ITEMS } from "../../constants";
import { useDesktopMenu } from "./DesktopMenu.hook";
import { IDesktopMenu } from "./DesktopMenu.type";

export const DesktopMenu = ({ className, ...props }: IDesktopMenu) => {
  const { isWhite, onOpen } = useDesktopMenu();

  return (
    <div
      className={classNames(
        "hidden flex-col gap-y-[15px] py-[20px] text-[14px] font-medium uppercase leading-[140%] text-[var(--header-clr-text)] transition-colors duration-300 ease-in-out [--header-clr-text:#244563] lg:flex",
        {
          ["[--header-clr-text:#ffffff]"]: isWhite,
        },
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-x-[24px]">
          {HEADER_NAV_OTHER_ITEMS.map((item) => {
            if (item.isBlank) {
              return (
                <li className="flex" key={item.href}>
                  <Link
                    className="relative inline-block before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[var(--header-clr-text)] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:before:w-full md:hover:before:w-full"
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
                  className="relative inline-block before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[var(--header-clr-text)] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:before:w-full md:hover:before:w-full"
                  to={item.href}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center gap-x-[24px]">
          <li className="flex">
            <Link
              className="relative grid grid-cols-[1fr_24px] items-center gap-x-[10px] before:absolute before:-bottom-[4px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[var(--header-clr-text)] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:before:w-full md:hover:before:w-full"
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
              onClick={onOpen}
            >
              <span>Подать заявку</span>
              <ArrowSolidRightIcon className="h-auto w-full" />
            </button>
          </li>
        </ul>
      </div>
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
        <nav className="flex items-center gap-x-[24px]">
          <ul className="flex items-center gap-x-[24px]">
            {HEADER_NAV_ITEMS.map((item) => (
              <li className="flex" key={item.href}>
                <NavLink
                  className={({ isActive }) =>
                    classNames(
                      "relative inline-block transition-opacity duration-300 ease-in-out before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[var(--header-clr-text)] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:opacity-100 active:before:w-full md:hover:opacity-100 md:hover:before:w-full",
                      {
                        ["opacity-50"]: !isActive,
                      },
                    )
                  }
                  to={item.href}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <LangPicker />
        </nav>
      </div>
    </div>
  );
};
