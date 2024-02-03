import { KTZEIcon } from "@/shared/icons";
import classNames from "classnames";
import Marquee from "react-fast-marquee";
import { IKTZEMarquee } from "./KTZEMarquee.type";

export const KTZEMarquee = ({ className, ...props }: IKTZEMarquee) => {
  return (
    <div className={classNames("overflow-hidden", className)} {...props}>
      <Marquee pauseOnHover speed={100}>
        <KTZEIcon
          className={classNames(
            "mx-[50px] h-[200px] w-auto lg:mx-[150px] lg:h-[422px]",
          )}
        />
      </Marquee>
    </div>
  );
};
