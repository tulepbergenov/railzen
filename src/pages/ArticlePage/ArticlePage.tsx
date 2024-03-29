import { LatestArticles } from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { formatDate } from "@/shared/lib";
import { Heading } from "@/shared/ui-kit";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export const ArticlePage = () => {
  const [isLoad, setIsLoad] = useState(false);

  useAppTitle(isLoad ? "Заголовок новости" : "Загрузка... ");

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 1500);
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="pb-[250px] pt-[130px] lg:pt-[170px]">
            <ul className="flex flex-wrap items-center gap-y-[10px] text-[14px] font-medium uppercase leading-[140%] text-[#AB9475]">
              <li className="flex after:mx-[10px] after:content-['/']">
                <Link
                  className="inline-block transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                  to={"/news"}
                >
                  Все новости
                </Link>
              </li>
              <li className="flex">
                {isLoad ? (
                  <Link
                    className="inline-block text-[#244563] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                    to={"/news/article"}
                  >
                    Заголовок новости
                  </Link>
                ) : (
                  <Skeleton width={150} />
                )}
              </li>
            </ul>
            <div className="mt-[40px] grid grid-cols-1 gap-[20px] lg:grid-cols-12">
              <div className="lg:col-span-9">
                <Heading>
                  {isLoad ? (
                    "Новостной заголовок в 2 строки"
                  ) : (
                    <>
                      <Skeleton width="100%" />
                      <Skeleton width="30%" />
                    </>
                  )}
                </Heading>
                <p className="mt-[10px] text-[14px] font-medium leading-[140%]">
                  <time>
                    {isLoad ? (
                      formatDate("2024-02-01T14:24:30.48492+06:00")
                    ) : (
                      <Skeleton width={73} />
                    )}
                  </time>
                </p>
                <div className="mt-[20px] h-[200px] w-full text-[200px] sm:text-[500px] md:mt-[40px] lg:h-[500px] 2xl:h-[700px] 2xl:text-[700px]">
                  {isLoad ? (
                    <img
                      alt="Новостной заголовок в 2 строки"
                      className="h-full w-full bg-[#244563] object-cover"
                      height={700}
                      src={"/imgs/article-cover.jpg"}
                      width={1345}
                    />
                  ) : (
                    <Skeleton className="h-full" width="100%" />
                  )}
                </div>
                <div className="mt-[20px] flex flex-col gap-y-[20px] text-[16px] font-normal leading-[140%] lg:mt-[30px]">
                  {isLoad ? (
                    <>
                      <p>
                        Повседневная практика показывает, что консультация с
                        широким активом позволяет оценить значение систем
                        массового участия. Таким образом реализация намеченных
                        плановых заданий в значительной степени обуславливает
                        создание существенных финансовых и административных
                        условий. Таким образом постоянное
                        информационно-пропагандистское обеспечение нашей
                        деятельности представляет собой интересный эксперимент
                        проверки дальнейших направлений развития.
                      </p>
                      <p>
                        Значимость этих проблем настолько очевидна, что
                        укрепление и развитие структуры требуют определения и
                        уточнения направлений прогрессивного развития. Идейные
                        соображения высшего порядка, а также постоянный
                        количественный рост и сфера нашей активности
                        представляет собой интересный эксперимент проверки
                        позиций, занимаемых участниками в отношении поставленных
                        задач. Товарищи! консультация с широким активом
                        представляет собой интересный эксперимент проверки
                        модели развития. Значимость этих проблем настолько
                        очевидна, что реализация намеченных плановых заданий
                        обеспечивает широкому кругу (специалистов) участие в
                        формировании дальнейших направлений развития. Равным
                        образом постоянный количественный рост и сфера нашей
                        активности в значительной степени обуславливает создание
                        новых предложений. Идейные соображения высшего порядка,
                        а также начало повседневной работы по формированию
                        позиции позволяет оценить значение позиций, занимаемых
                        участниками в отношении поставленных задач. Значимость
                        этих проблем настолько очевидна, что укрепление и
                        развитие структуры требуют определения и уточнения
                        направлений прогрессивного развития. Идейные соображения
                        высшего порядка, а также постоянный количественный рост
                        и сфера нашей активности представляет собой интересный
                        эксперимент проверки позиций, занимаемых участниками в
                        отношении поставленных задач. Товарищи! консультация с
                        широким активом представляет собой интересный
                        эксперимент проверки модели развития. Значимость этих
                        проблем настолько очевидна, что реализация намеченных
                        плановых заданий обеспечивает широкому кругу
                        (специалистов) участие в формировании дальнейших
                        направлений развития. Равным образом постоянный
                        количественный рост и сфера нашей активности в
                        значительной степени обуславливает создание новых
                        предложений. Идейные соображения высшего порядка, а
                        также начало повседневной работы по формированию позиции
                        позволяет оценить значение позиций, занимаемых
                        участниками в отношении поставленных задач.
                      </p>
                    </>
                  ) : (
                    <Skeleton count={10} />
                  )}
                </div>
              </div>
              <LatestArticles className="mt-[30px] lg:col-span-3 lg:mt-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
