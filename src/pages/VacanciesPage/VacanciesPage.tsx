import { KTZEMarquee } from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { TriangleIcon } from "@/shared/icons";
import { Heading } from "@/shared/ui-kit";
import { Link } from "react-router-dom";

export const VacanciesPage = () => {
  useAppTitle("Вакансии");

  return (
    <>
      <section>
        <div className="container">
          <div className="pb-[60px] pt-[100px] lg:pb-[100px] lg:pt-[170px]">
            <Heading>Вакансии</Heading>
            <ul className="mt-[20px] flex flex-col gap-y-[20px]">
              <li className="flex">
                <article className="group relative grid w-full grid-cols-2 gap-x-[20px] gap-y-[10px] border-y border-y-[#AB9475] py-[20px] lg:auto-rows-[165px] lg:grid-cols-12">
                  <p className="col-span-full text-[14px] font-medium uppercase leading-[140%] text-[#AB9475] lg:col-span-2">
                    Вакансии в лучших компаниях страны
                  </p>
                  <div className="col-span-full h-[130px] overflow-hidden rounded-[8px]  border border-[#B3B3B3] sm:h-[180px] md:col-span-1 md:h-[130px] lg:col-span-5 lg:h-full xl:col-span-4 3xl:col-span-3">
                    <img
                      alt="Единая онлайн платформа рекрутинга"
                      className="h-full w-full bg-[#244563] object-cover"
                      height={145}
                      src="/imgs/vac1.jpg"
                      width={434}
                    />
                  </div>
                  <div className="col-span-full flex items-end gap-x-[20px] gap-y-[20px] md:col-span-1 md:flex-col md:items-start lg:col-span-5 xl:col-span-6 3xl:col-span-7">
                    <h2 className="text-[20px] font-bold uppercase leading-[23px]">
                      Единая онлайн платформа рекрутинга
                    </h2>
                    <Link
                      className="grid grid-cols-[8px_1fr] items-center gap-x-[5px] rounded-[57.6px] border border-[#244563] px-[10px] py-[2px] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                      to={"https://hh.ru/"}
                    >
                      <TriangleIcon className="h-auto w-full text-[#AB9475]" />
                      <span className="text-[14px] font-medium uppercase leading-[140%]">
                        Перейти
                      </span>
                    </Link>
                  </div>
                  <div className="absolute right-[65px] top-2/4 -z-[1] hidden h-[216px] w-[216px] -translate-x-[165px] -translate-y-2/4 rotate-45 opacity-0 transition-[transform,opacity] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 lg:block">
                    <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
                    <div className="absolute -left-[60px] top-[60px] h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
                  </div>
                </article>
              </li>
              <li className="flex">
                <article className="group relative grid w-full grid-cols-2 gap-x-[20px] gap-y-[10px] border-y border-y-[#AB9475] py-[20px] lg:auto-rows-[165px] lg:grid-cols-12">
                  <p className="col-span-full text-[14px] font-medium uppercase leading-[140%] text-[#AB9475] lg:col-span-2">
                    Вакансии в лучших компаниях страны
                  </p>
                  <div className="col-span-full h-[130px] overflow-hidden rounded-[8px]  border border-[#B3B3B3] sm:h-[180px] md:col-span-1 md:h-[130px] lg:col-span-5 lg:h-full xl:col-span-4 3xl:col-span-3">
                    <img
                      alt="Единая онлайн платформа рекрутинга"
                      className="h-full w-full bg-[#244563] object-cover"
                      height={145}
                      src="/imgs/vac2.jpg"
                      width={434}
                    />
                  </div>
                  <div className="col-span-full flex items-end gap-x-[20px] gap-y-[20px] md:col-span-1 md:flex-col md:items-start lg:col-span-5 xl:col-span-6 3xl:col-span-7">
                    <h2 className="text-[20px] font-bold uppercase leading-[23px]">
                      Единая онлайн платформа рекрутинга
                    </h2>
                    <Link
                      className="grid grid-cols-[8px_1fr] items-center gap-x-[5px] rounded-[57.6px] border border-[#244563] px-[10px] py-[2px] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                      to={"https://hh.ru/"}
                    >
                      <TriangleIcon className="h-auto w-full text-[#AB9475]" />
                      <span className="text-[14px] font-medium uppercase leading-[140%]">
                        Перейти
                      </span>
                    </Link>
                  </div>
                  <div className="absolute right-[65px] top-2/4 -z-[1] hidden h-[216px] w-[216px] -translate-x-[165px] -translate-y-2/4 rotate-45 opacity-0 transition-[transform,opacity] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 lg:block">
                    <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
                    <div className="absolute -left-[60px] top-[60px] h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <KTZEMarquee className="pb-[60px]" />
    </>
  );
};
