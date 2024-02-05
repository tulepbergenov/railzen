import classNames from "classnames";
import styles from "./PartnersMarquee.module.scss";
import { IPartnersMarquee } from "./PartnersMarquee.type";

export const PartnersMarquee = ({ className, ...props }: IPartnersMarquee) => {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.partners, className)} {...props}>
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={97}
          src={"/imgs/home/partners/1.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={31}
          src={"/imgs/home/partners/2.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={52}
          src={"/imgs/home/partners/3.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={36}
          src={"/imgs/home/partners/4.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={29}
          src={"/imgs/home/partners/5.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={48}
          src={"/imgs/home/partners/6.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={59}
          src={"/imgs/home/partners/7.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={87}
          src={"/imgs/home/partners/8.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={41}
          src={"/imgs/home/partners/9.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={97}
          src={"/imgs/home/partners/1.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={31}
          src={"/imgs/home/partners/2.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={52}
          src={"/imgs/home/partners/3.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={36}
          src={"/imgs/home/partners/4.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={29}
          src={"/imgs/home/partners/5.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={48}
          src={"/imgs/home/partners/6.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={59}
          src={"/imgs/home/partners/7.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={87}
          src={"/imgs/home/partners/8.svg"}
          width={150}
        />
        <img
          alt="Partner"
          className="h-auto w-[150px]"
          height={41}
          src={"/imgs/home/partners/9.svg"}
          width={150}
        />
      </div>
    </div>
  );
};
