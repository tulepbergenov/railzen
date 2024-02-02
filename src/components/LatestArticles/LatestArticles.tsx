import classNames from "classnames";
import { useEffect, useState } from "react";
import { ArticleItem } from "../ArticleItem";
import { ILatestArticles } from "./LatestArticles.type";

export const LatestArticles = ({ className, ...props }: ILatestArticles) => {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 2500);
  }, []);

  return (
    <aside
      className={classNames("flex flex-col gap-y-[20px]", className)}
      {...props}
    >
      <h2 className="text-[20px] font-bold uppercase leading-[23px]">
        Другие новости:
      </h2>
      <div className="grid grid-cols-2 gap-x-[16px] gap-y-[20px] sm:gap-x-[20px] lg:flex lg:flex-col lg:gap-y-[30px]">
        <ArticleItem data={mock} isLoading={isLoad} isPreview />
        <ArticleItem data={mock2} isLoading={isLoad} isPreview />
        <ArticleItem data={mock3} isLoading={isLoad} isPreview />
      </div>
    </aside>
  );
};

const mock = {
  title: "Lorem ipsum dolor sit amet.",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, maiores corrupti! Tempora vero rerum repellat? Suscipit vitae nisi voluptate. Illo eos minima quae libero debitis repellat a rem blanditiis aspernatur!",
  cover: "/imgs/article-cover.jpg",
  alias: "article-1",
  time: "2024-02-01T14:24:30.48492+06:00",
};

const mock2 = {
  title: "Lorem ipsum dolor sit amet.",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, maiores corrupti! Tempora vero rerum repellat? Suscipit vitae nisi voluptate. Illo eos minima quae libero debitis repellat a rem blanditiis aspernatur!",
  cover: "/imgs/article-cover.jpg",
  alias: "article-2",
  time: "2024-02-01T14:24:30.48492+06:00",
};

const mock3 = {
  title: "Lorem ipsum dolor sit amet.",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, maiores corrupti! Tempora vero rerum repellat? Suscipit vitae nisi voluptate. Illo eos minima quae libero debitis repellat a rem blanditiis aspernatur!",
  cover: "/imgs/article-cover.jpg",
  alias: "article-3",
  time: "2024-02-01T14:24:30.48492+06:00",
};
