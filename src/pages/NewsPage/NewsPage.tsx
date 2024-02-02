import { ArticleItem } from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { ArrowLeftIcon } from "@/shared/icons";

export const NewsPage = () => {
  useAppTitle("Новости");

  return (
    <>
      <section className="overflow-hidden">
        <div className="container">
          <div className="pb-[60px] pt-[120px] lg:pb-[85px] lg:pt-[170px]">
            <header className="sr-only">
              <h1>Новости</h1>
            </header>
            <div className="relative flex flex-col gap-y-[40px]">
              <ArticleItem data={mock} />
              <ArticleItem data={mock} />
              <ArticleItem data={mock} />
              <ArticleItem data={mock} />
              <ArticleItem data={mock} />
            </div>
            <div className="mt-[30px] flex justify-center md:justify-end lg:mt-[50px]">
              <div className="flex flex-wrap items-center gap-[20px]">
                <button
                  aria-label="Предыдущая страница"
                  className="flex h-[24px] w-[24px] items-center justify-center transition-opacity duration-300 ease-in-out active:opacity-50 disabled:opacity-50 md:hover:opacity-50"
                  disabled
                  title="Предыдущая страница"
                  type="button"
                >
                  <ArrowLeftIcon className="h-auto w-[10px]" />
                </button>
                <ul className="flex flex-wrap items-center gap-[20px] text-[#244563]/50">
                  <li className="flex">
                    <button
                      className="relative inline-block h-[24px] min-w-[24px] text-[#244563] transition-colors duration-300 ease-in-out before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[#244563] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:text-[#244563] active:before:w-full md:hover:text-[#244563] md:hover:before:w-full"
                      type="button"
                    >
                      1
                    </button>
                  </li>
                  <li className="flex">
                    <button
                      className="relative inline-block h-[24px] min-w-[24px] transition-colors duration-300 ease-in-out before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[#244563] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:text-[#244563] active:before:w-full md:hover:text-[#244563] md:hover:before:w-full"
                      type="button"
                    >
                      2
                    </button>
                  </li>
                  <li className="flex">
                    <button
                      className="relative inline-block h-[24px] min-w-[24px] transition-colors duration-300 ease-in-out before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[#244563] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:text-[#244563] active:before:w-full md:hover:text-[#244563] md:hover:before:w-full"
                      type="button"
                    >
                      3
                    </button>
                  </li>
                  <li className="flex">
                    <button
                      className="relative inline-block h-[24px] min-w-[24px] transition-colors duration-300 ease-in-out before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[#244563] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:text-[#244563] active:before:w-full md:hover:text-[#244563] md:hover:before:w-full"
                      type="button"
                    >
                      ...
                    </button>
                  </li>
                  <li className="flex">
                    <button
                      className="relative inline-block h-[24px] min-w-[24px] transition-colors duration-300 ease-in-out before:absolute before:-bottom-[3px] before:left-0 before:h-px before:w-0 before:bg-gradient-to-r before:from-transparent before:to-[#244563] before:transition-[width] before:duration-300 before:ease-in-out before:content-[''] active:text-[#244563] active:before:w-full md:hover:text-[#244563] md:hover:before:w-full"
                      type="button"
                    >
                      100
                    </button>
                  </li>
                </ul>
                <button
                  aria-label="Следующая страница"
                  className="flex h-[24px] w-[24px] items-center justify-center transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                  title="Следующая страница"
                  type="button"
                >
                  <ArrowLeftIcon className="h-auto w-[10px] rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mock = {
  title: "Lorem ipsum dolor sit amet.",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, maiores corrupti! Tempora vero rerum repellat? Suscipit vitae nisi voluptate. Illo eos minima quae libero debitis repellat a rem blanditiis aspernatur!",
  cover: "/imgs/article-cover.jpg",
  alias: "article",
  time: "2024-02-01T14:24:30.48492+06:00",
};
