import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export interface IDownloadDocumentItem extends LinkProps {
  children: ReactNode;
  className?: string;
}
