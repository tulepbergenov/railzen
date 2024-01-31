import classNames from "classnames";
import { MobileMenu } from "..";
import { DesktopMenu } from "../DesktopMenu";
import { IHeader } from "./Header.type";

export const Header = ({ className, ...props }: IHeader) => {
  return (
    <header
      className={classNames(
        "absolute left-0 top-0 z-20 w-full lg:absolute",
        className,
      )}
      {...props}
    >
      <div className="container">
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
};
