import { IDivElement } from "@/shared/types";

export interface IArticleItem extends IDivElement {
  isPreview?: boolean;
  data: IData;
  isLoading?: boolean;
}

interface IData {
  alias: string;
  time: string;
  cover: string;
  title: string;
  description: string;
}
