import classNames from "classnames";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ICooperationNavigation } from "./CooperationNavigation.type";

export const CooperationNavigation = ({
  isBlue = false,
  className,
  ...props
}: ICooperationNavigation) => {
  const { pathname } = useLocation();

  if (isBlue) {
    return (
      <ul
        className={classNames(
          "flex flex-wrap items-center gap-x-[16px] uppercase",
          className,
        )}
        {...props}
      >
        <li className="flex">
          <Link
            className={classNames(
              "inline-block rounded-[57.6px] border border-[#244563] px-[10px] py-[2px] text-[14px] font-medium leading-[140%] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
              {
                ["bg-[#244563] text-white"]: pathname === "/cooperation",
                ["bg-transparent text-[#244563]"]: pathname !== "/cooperation",
              },
            )}
            to={"/cooperation"}
          >
            Трансформация
          </Link>
        </li>
        <li className="flex">
          <Link
            className={classNames(
              "inline-block rounded-[57.6px] border border-[#244563] px-[10px] py-[2px] text-[14px] font-medium leading-[140%] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
              {
                ["bg-[#244563] text-white"]:
                  pathname === "/cooperation/clients",
                ["bg-transparent text-[#244563]"]:
                  pathname !== "/cooperation/clients",
              },
            )}
            to={"/cooperation/clients"}
          >
            Клиентам
          </Link>
        </li>
        <li className="flex">
          <Link
            className={classNames(
              "inline-block rounded-[57.6px] border border-[#244563] px-[10px] py-[2px] text-[14px] font-medium leading-[140%] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
              {
                ["bg-[#244563] text-white"]:
                  pathname === "/cooperation/investors",
                ["bg-transparent text-[#244563]"]:
                  pathname !== "/cooperation/investors",
              },
            )}
            to={"/cooperation/investors"}
          >
            Инвесторам
          </Link>
        </li>
        <li className="flex">
          <Link
            className={classNames(
              "inline-block rounded-[57.6px] border border-[#244563] px-[10px] py-[2px] text-[14px] font-medium leading-[140%] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
              {
                ["bg-[#244563] text-white"]:
                  pathname === "/cooperation/procurement",
                ["bg-transparent text-[#244563]"]:
                  pathname !== "/cooperation/procurement",
              },
            )}
            to={"/cooperation/procurement"}
          >
            Закупки
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul
      className={classNames(
        "flex flex-wrap items-center gap-x-[16px] uppercase",
        className,
      )}
      {...props}
    >
      <li className="flex">
        <NavLink
          className={({ isActive }) =>
            classNames(
              "inline-block rounded-[57.6px] border border-white px-[10px] py-[2px] text-[14px] font-medium leading-[140%] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
              {
                ["bg-white text-[#244563]"]: isActive,
                ["bg-transparent text-white"]: !isActive,
              },
            )
          }
          to={"/cooperation"}
        >
          Трансформация
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          className={({ isActive }) =>
            classNames(
              "inline-block rounded-[57.6px] border border-white px-[10px] py-[2px] text-[14px] font-medium leading-[140%] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
              {
                ["bg-white text-[#244563]"]: isActive,
                ["bg-transparent text-white"]: !isActive,
              },
            )
          }
          to={"/cooperation/clients"}
        >
          Клиентам
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          className={({ isActive }) =>
            classNames(
              "inline-block rounded-[57.6px] border border-white px-[10px] py-[2px] text-[14px] font-medium leading-[140%] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
              {
                ["bg-white text-[#244563]"]: isActive,
                ["bg-transparent text-white"]: !isActive,
              },
            )
          }
          to={"/cooperation/investors"}
        >
          Инвесторам
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          className={({ isActive }) =>
            classNames(
              "inline-block rounded-[57.6px] border border-white px-[10px] py-[2px] text-[14px] font-medium leading-[140%] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
              {
                ["bg-white text-[#244563]"]: isActive,
                ["bg-transparent text-white"]: !isActive,
              },
            )
          }
          to={"/cooperation/procurement"}
        >
          Закупки
        </NavLink>
      </li>
    </ul>
  );
};
