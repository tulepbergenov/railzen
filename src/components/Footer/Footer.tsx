import { TriangleIcon } from "@/shared/icons";
import { getCurrentYear } from "@/shared/lib";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  FOOTER_CONTACT_ITEMS,
  FOOTER_NAV_ITEMS,
  FOOTER_OTHER_CONTACT_ITEMS,
  FOOTER_OTHER_NAV_ITEMS,
} from "./Footer.constant";
import { IFooter } from "./Footer.type";

export const Footer = ({ className, ...props }: IFooter) => {
  return (
    <footer
      className={classNames(
        "relative overflow-hidden bg-[#244563] text-[14px] font-medium uppercase leading-[140%] text-white",
        className,
      )}
      {...props}
    >
      <div className="absolute -left-[480px] top-[30px] h-[595px] w-[595px] rotate-45 sm:-left-[350px] sm:top-2/4 sm:h-[670px] sm:w-[670px] sm:-translate-y-2/4">
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(215deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
        <div className="absolute right-[115px] top-[115px] h-full w-full bg-[linear-gradient(215deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)] sm:right-[188px] sm:top-[188px]"></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col gap-x-[24px] gap-y-[50px] pb-[116px] pt-[70px] sm:gap-y-[65px] lg:pb-[65px] lg:pt-[60px]">
          <div className="grid grid-cols-1 gap-y-[48px] sm:grid-cols-2 sm:gap-y-[85px] lg:flex lg:items-start lg:justify-between">
            <ul className="order-2 flex flex-col gap-y-[5px] sm:order-3 sm:gap-y-[20px] lg:order-none">
              {FOOTER_OTHER_NAV_ITEMS.map((item) => {
                if (item.isBlank) {
                  return (
                    <li className="flex" key={item.href}>
                      <Link
                        className="relative inline-block w-full border-b border-b-white p-[8px] transition-opacity duration-300 ease-in-out before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-white before:transition-[width] before:duration-300 before:ease-in-out before:content-none active:opacity-50 active:before:w-full sm:w-auto sm:border-none sm:p-0 sm:before:content-[''] sm:active:opacity-100 md:hover:before:w-full"
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
                      className="relative inline-block w-full border-b border-b-white p-[8px] transition-opacity duration-300 ease-in-out before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-white before:transition-[width] before:duration-300 before:ease-in-out before:content-none active:opacity-50 active:before:w-full sm:w-auto sm:border-none sm:p-0 sm:before:content-[''] sm:active:opacity-100 md:hover:before:w-full"
                      to={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="order-3 flex flex-col gap-y-[20px] normal-case sm:order-4 lg:order-none">
              {FOOTER_OTHER_CONTACT_ITEMS.map((item) => (
                <li className="flex" key={item.href}>
                  <Link
                    className="relative inline-block before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-white before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:before:w-full md:hover:before:w-full"
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <dl className="order-4 flex flex-col gap-y-[20px] normal-case sm:order-2 lg:order-none">
              <dt className="flex">Режим работы контакт-цента</dt>
              <dd className="flex">Пн. – Пт.: с 9:00 до 18:30</dd>
              <dd className="flex">Телефоны контакт-центра: 1462, 611500</dd>
              <dd className="flex">
                <Link
                  className="relative inline-block before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-white before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:before:w-full md:hover:before:w-full"
                  to={"mailto:kense@ktze.kz"}
                >
                  kense@ktze.kz
                </Link>
              </dd>
            </dl>
            <nav className="order-1 sm:-translate-y-[5px] lg:order-none">
              <ul className="flex flex-col gap-y-[5px]">
                {FOOTER_NAV_ITEMS.map((item) => (
                  <li className="flex" key={item.href}>
                    <Link
                      className="group inline-block w-full min-w-[230px] border-b border-b-white p-[8px] sm:w-auto"
                      to={item.href}
                    >
                      <span className="grid grid-cols-[8px_1fr] items-center gap-x-[16px] transition-transform duration-300 ease-in-out group-active:translate-x-[15px] md:group-hover:translate-x-[15px]">
                        <TriangleIcon className="h-auto w-full text-[#AB9475]" />
                        <span>{item.name}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-y-[16px] sm:gap-y-[20px] xl:flex-row xl:items-end xl:justify-between">
            <p className="flex flex-col gap-x-[4px] gap-y-[16px] sm:gap-y-[20px] xl:flex-row xl:items-end">
              <span className="text-[32px] font-light leading-[1.2] sm:text-[56px] sm:leading-none xl:translate-y-[5px] xl:text-[64px]">
                &copy;&nbsp;{getCurrentYear()}&nbsp;KTZ EXPRESS
              </span>
              <span className="text-white/50">Все права защищены</span>
            </p>
            <ul className="flex flex-wrap items-center gap-[16px]">
              {FOOTER_CONTACT_ITEMS.map((item) => {
                if (item.isBlank) {
                  return (
                    <li className="flex" key={item.href}>
                      <Link
                        aria-label={item.name}
                        className="flex h-[32px] w-[32px] items-center justify-center transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50 [&>svg]:h-auto [&>svg]:w-full"
                        target="_blank"
                        title={item.name}
                        to={item.href}
                      >
                        {item.icon}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li className="flex" key={item.href}>
                    <Link
                      aria-label={item.name}
                      className="flex h-[32px] w-[32px] items-center justify-center transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50 [&>svg]:h-auto [&>svg]:w-full"
                      title={item.name}
                      to={item.href}
                    >
                      {item.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
