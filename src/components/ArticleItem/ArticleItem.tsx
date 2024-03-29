import { formatDate } from "@/shared/lib";
import { Heading } from "@/shared/ui-kit";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { IArticleItem } from "./ArticleItem.type";

export const ArticleItem = ({
  isPreview = false,
  isLoading = false,
  data,
  className,
  ...props
}: IArticleItem) => {
  if (isPreview) {
    return (
      <article className="group relative flex flex-col gap-y-[20px] border-y border-y-[#AB9475] py-[20px]">
        <p className="text-[14px] font-medium leading-[170%] text-[#AB9475]">
          <time>
            {isLoading ? <Skeleton width={74} /> : formatDate(data.time)}
          </time>
        </p>
        <div className="h-[100px] overflow-hidden sm:h-[170px] 2xl:h-[230px]">
          {isLoading ? (
            <Skeleton className="h-[100px] sm:h-[170px] 2xl:text-[230px]" />
          ) : (
            <img
              alt={data.title}
              className="h-full w-full bg-[#244563] object-cover transition-transform duration-300 ease-in-out active:scale-110 md:group-hover:scale-110"
              height={260}
              src={data.cover}
              width={436}
            />
          )}
        </div>
        <h2 className="line-clamp-3 text-[14px] font-bold uppercase leading-[19px] sm:line-clamp-1 sm:text-[20px] sm:leading-[23px]">
          {isLoading ? <Skeleton /> : data.title}
        </h2>
        <p className="line-clamp-5 text-[14px] leading-[19px] sm:text-[16px] sm:leading-[140$px]">
          {isLoading ? <Skeleton count={5} /> : data.description}
        </p>
        <Link
          className="absolute inset-0 h-full w-full text-[0] leading-[0]"
          to={`/news/${data.alias}`}
        >
          {data.title}
        </Link>
      </article>
    );
  }

  return (
    <article
      className={classNames(
        "group relative grid items-start gap-[20px] gap-y-[20px] border-y border-y-[#AB9475] py-[20px] lg:grid-cols-12 lg:grid-rows-[258px]",
        className,
      )}
      {...props}
    >
      <p className="text-[14px] font-medium leading-[170%] text-[#AB9475] lg:col-span-2">
        <time>{formatDate(data.time)}</time>
      </p>
      <div className="h-[250px] overflow-hidden sm:h-[400px] lg:col-span-4 lg:h-full 2xl:col-span-3">
        <img
          alt={data.title}
          className="h-full w-full bg-[#244563] object-cover transition-transform duration-300 ease-in-out active:scale-110 md:group-hover:scale-110"
          height={260}
          src={data.cover}
          width={436}
        />
      </div>
      <div className="flex h-full flex-col justify-between gap-y-[20px] lg:col-span-6 2xl:col-span-7">
        <Heading
          as="h2"
          className="line-clamp-1 hidden sm:inline-block lg:line-clamp-2"
        >
          {data.title}
        </Heading>
        <p className="line-clamp-2 font-semibold uppercase sm:hidden">
          {data.title}
        </p>
        <p className="line-clamp-3 lg:line-clamp-2">{data.description}</p>
      </div>
      <Link
        className="absolute inset-0 inline-block h-full w-full text-[0] leading-[0]"
        to={`/news/${data.alias}`}
      >
        {data.title}
      </Link>
      <div className="absolute right-[65px] top-2/4 -z-[1] hidden h-[300px] w-[300px] -translate-x-[165px] -translate-y-2/4 rotate-45 opacity-0 transition-[transform,opacity] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 lg:block">
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
        <div className="absolute -left-[50px] top-[50px] h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
      </div>
    </article>
  );
};
