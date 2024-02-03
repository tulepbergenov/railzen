import { DownloadIcon } from "@/shared/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { IDownloadDocumentItem } from "./DownloadDocumentItem.type";

export const DownloadDocumentItem = ({
  children,
  className,
  ...props
}: IDownloadDocumentItem) => {
  return (
    <Link
      className={classNames(
        "grid min-h-[60px] w-full grid-cols-[1fr_24px] items-center gap-x-[16px] rounded-[8px] border border-[#244563] px-[16px] py-[18px] text-[16px] font-normal leading-[21px] text-[#244563] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
        className,
      )}
      download
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      <span>{children}</span>
      <DownloadIcon className="h-auto w-full" />
    </Link>
  );
};
