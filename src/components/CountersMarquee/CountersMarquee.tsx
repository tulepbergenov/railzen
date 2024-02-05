import classNames from "classnames";
import styles from "./CountersMarquee.module.scss";
import { ICountersMarquee } from "./CountersMarquee.type";

export const CountersMarquee = ({ className, ...props }: ICountersMarquee) => {
  return (
    <ul className={classNames(styles.counters, className)} {...props}>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">100</p>
        <p className="max-w-[270px]">маршрутов контейнерных поездов</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-nowrap text-[128px] uppercase leading-none">+7 k</p>
        <p className="max-w-[270px]">фитинговых платформ в оперировании</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">4600</p>
        <p className="max-w-[270px]">контейнеров в оперировании</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">430</p>
        <p className="max-w-[270px]">единиц рефрижераторных контейнеров</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">+569</p>
        <p className="max-w-[270px]">человек квалифицированных работников</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-nowrap text-[128px] leading-none">+308 К</p>
        <p className="max-w-[270px]">ДФЭ за 2020 год по всем направлениям</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">100</p>
        <p className="max-w-[270px]">маршрутов контейнерных поездов</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-nowrap text-[128px] uppercase leading-none">+7 k</p>
        <p className="max-w-[270px]">фитинговых платформ в оперировании</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">4600</p>
        <p className="max-w-[270px]">контейнеров в оперировании</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">430</p>
        <p className="max-w-[270px]">единиц рефрижераторных контейнеров</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">+569</p>
        <p className="max-w-[270px]">человек квалифицированных работников</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">+308 К</p>
        <p className="max-w-[270px]">ДФЭ за 2020 год по всем направлениям</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">100</p>
        <p className="max-w-[270px]">маршрутов контейнерных поездов</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-nowrap text-[128px] uppercase leading-none">+7 k</p>
        <p className="max-w-[270px]">фитинговых платформ в оперировании</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">4600</p>
        <p className="max-w-[270px]">контейнеров в оперировании</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">430</p>
        <p className="max-w-[270px]">единиц рефрижераторных контейнеров</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">+569</p>
        <p className="max-w-[270px]">человек квалифицированных работников</p>
      </li>
      <li className="flex flex-col items-center gap-y-[12px] text-center">
        <p className="text-[128px] leading-none">+308 К</p>
        <p className="max-w-[270px]">ДФЭ за 2020 год по всем направлениям</p>
      </li>
    </ul>
  );
};
