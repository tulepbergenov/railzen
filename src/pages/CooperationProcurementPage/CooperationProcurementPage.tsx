import {
  CooperationNavigation,
  DownloadDocumentItem,
  KTZEMarquee,
} from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { Heading } from "@/shared/ui-kit";

export const CooperationProcurementPage = () => {
  useAppTitle("Закупки");

  return (
    <>
      <section className="relative overflow-clip">
        <div className="absolute -left-[440px] top-[0px] h-[595px] w-[595px] rotate-45">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
          <div className="absolute right-[115px] top-[115px] h-full w-full bg-[linear-gradient(225deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
        </div>
        <div className="container">
          <div className="pb-[70px] pt-[120px]">
            <div className="flex justify-center">
              <CooperationNavigation isBlue />
            </div>
            <div className="mt-[50px] grid grid-cols-3 items-start gap-[20px]">
              <Heading className="sticky top-0 col-span-1 pt-[10px]">
                Закупки
              </Heading>
              <div className="col-span-2 flex flex-col gap-y-[100px]">
                <div className="flex gap-x-[30px]">
                  <p className="text-[200px] font-extralight leading-none text-[#AB9475]">
                    01
                  </p>
                  <div>
                    <p className="text-[20px] font-bold uppercase">
                      Объявление
                    </p>
                    <div className="mt-[20px] flex flex-col gap-y-[20px]">
                      <p>
                        «АО «KTZ Express» (010000, г.Астана, ул.Кунаева 10, 24
                        этаж) объявляет о проведении «Услуги по обучению
                        персонала/сотрудников».Данные об объемах, месте и сроках
                        оказания услуг и технической спецификацией можно
                        ознакомиться в прикрепленных файлах.
                      </p>
                      <p>
                        Ценовые предложения необходимо направить на электронный
                        адрес: a.sadvakassov@ktze.kz
                      </p>
                      <p>
                        Окончательный срок представления ценовых предложений -
                        до 18:00 часов 22 ноября 2023 года.
                      </p>
                      <p>
                        Дополнительную информацию и справку можно получить по
                        телефонам:
                      </p>
                      <p>
                        8(701)888 12 52по вопросам характеристики закупаемых
                        услуг и вопросам процедуры закупок.
                      </p>
                      <div className="mt-[20px] flex flex-col gap-y-[20px]">
                        <DownloadDocumentItem to={"/mock-doc.pdf"}>
                          Финансовая отчетность (2016 год)
                        </DownloadDocumentItem>
                        <DownloadDocumentItem to={"/mock-doc.pdf"}>
                          Финансовая отчетность (2016 год)
                        </DownloadDocumentItem>
                        <DownloadDocumentItem to={"/mock-doc.pdf"}>
                          Финансовая отчетность (2016 год)
                        </DownloadDocumentItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-[30px]">
                  <p className="text-[200px] font-extralight leading-none text-[#AB9475]">
                    02
                  </p>
                  <div>
                    <p className="text-[20px] font-bold uppercase">
                      Объявление о проведении процедуры выбора аудиторской
                      организации
                    </p>
                    <div className="mt-[20px] flex flex-col gap-y-[20px]">
                      <p>
                        ТОО «KTZ Express Shipping» объявляет о проведении
                        процедуры выбора аудиторской организации для оказания
                        аудиторских услуг за 2022-2024 годы.
                      </p>
                      <p>
                        Подробную информацию на участие в процедуре выбора
                        аудиторской организации можно получить по адресу:
                      </p>
                      <p>
                        г. Астана, ул. Д. Кунаева, 10, в рабочие дни с 9-00 до
                        18-30 часов, этаж 25, кабинет 2504,
                      </p>
                      <p>телефоны для справок 610-415, 87014663777.</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-[30px]">
                  <p className="text-[200px] font-extralight leading-none text-[#AB9475]">
                    03
                  </p>
                  <div>
                    <p className="text-[20px] font-bold uppercase">
                      Объявление о проведении закупа
                    </p>
                    <div className="mt-[20px] flex flex-col gap-y-[20px]">
                      <p>
                        Департамента по организации закупок и административно -
                        хозяйственному управлению АО «KTZ Express» (010000,
                        г.Астана, ул.Кунаева 10, 24 этаж, канцелярия) объявляет
                        о проведении «Услуги агента по организации ремонта
                        грузовых вагонов вагоноремонтными предприятиями» Данные
                        об объемах, месте и сроках оказания услуг и технической
                        спецификацией можно ознакомиться в прикрепленных файлах.
                      </p>
                      <p>
                        Коммерческие предложения необходимо направить на
                        электронный адрес: s.shagirov@ktze.kz
                      </p>
                      <p>
                        Окончательный срок представления коммерческих
                        предложений - до 18:30 часов 26 декабря 2022 года.
                      </p>
                      <p>
                        Дополнительную информацию и справку можно получить по
                        телефонам:
                      </p>
                      <p>
                        8 (702) 455 99 09 по вопросам характеристики закупаемых
                        услуг и вопросам процедуры закупок.
                      </p>
                      <div className="flex flex-col gap-y-[20px]">
                        <DownloadDocumentItem to={"/mock-doc.pdf"}>
                          Закупочная документация{" "}
                        </DownloadDocumentItem>

                        <DownloadDocumentItem to={"/mock-doc.pdf"}>
                          Перечень обязательных документов при предоставлении
                          коммерческих предложении{" "}
                        </DownloadDocumentItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-[30px]">
                  <p className="text-[200px] font-extralight leading-none text-[#AB9475]">
                    04
                  </p>
                  <div className="w-full">
                    <p className="text-[20px] font-bold uppercase">
                      Протокол итогов{" "}
                    </p>
                    <DownloadDocumentItem
                      className="mt-[20px]"
                      to={"/mock-doc.pdf"}
                    >
                      Протокол об итогах закупок
                    </DownloadDocumentItem>
                  </div>
                </div>
                <div className="flex gap-x-[30px]">
                  <p className="text-[200px] font-extralight leading-none text-[#AB9475]">
                    05
                  </p>
                  <div className="w-full">
                    <p className="text-[20px] font-bold uppercase">
                      Извещение о торгах
                    </p>
                    <DownloadDocumentItem
                      className="mt-[20px]"
                      to={"/mock-doc.pdf"}
                    >
                      Извещение о торгах на повышение цены{" "}
                    </DownloadDocumentItem>
                    <DownloadDocumentItem
                      className="mt-[20px]"
                      to={"/mock-doc.pdf"}
                    >
                      Извещение о торгах на понижение цены{" "}
                    </DownloadDocumentItem>
                    <DownloadDocumentItem
                      className="mt-[20px]"
                      to={"/mock-doc.pdf"}
                    >
                      Извещение о торгах на понижение цены{" "}
                    </DownloadDocumentItem>
                  </div>
                </div>
                <div className="flex gap-x-[30px]">
                  <p className="text-[200px] font-extralight leading-none text-[#AB9475]">
                    06
                  </p>
                  <div className="w-full">
                    <p className="text-[20px] font-bold uppercase">
                      Объявление
                    </p>
                    <div className="mt-[20px] flex flex-col gap-y-[20px]">
                      <p>
                        Департамента обеспечения «АО «KTZ Express» (010000,
                        г.Астана, ул. Кунаева 10, 24 этаж, канцелярия) объявляет
                        о проведении «Услуги по организации и проведению
                        выставки» Данные об объемах, месте и сроках оказания
                        услуг и технической спецификацией можно ознакомиться в
                        прикрепленных файлах.
                      </p>
                      <p>
                        Коммерческие предложения необходимо направить на
                        электронный адрес: s.shagirov@ktze.kz
                      </p>
                      <p>
                        Окончательный срок представления коммерческих
                        предложений - до 18:30 часов 13 сентября 2023 года.
                      </p>
                      <p>
                        Дополнительную информацию и справку можно получить по
                        телефонам: 8 (702) 455 99 09 по вопросам характеристики
                        закупаемых услуг и вопросам процедуры закупок.
                      </p>
                      <div className="mt-[20px] flex flex-col">
                        <DownloadDocumentItem
                          className="mt-[20px]"
                          to={"/mock-doc.pdf"}
                        >
                          Перечень обязательных документов при предоставлении
                          коммерческих предложении{" "}
                        </DownloadDocumentItem>
                        <DownloadDocumentItem
                          className="mt-[20px]"
                          to={"/mock-doc.pdf"}
                        >
                          Техническая спецификация по Шеньжэнь
                        </DownloadDocumentItem>
                        <DownloadDocumentItem
                          className="mt-[20px]"
                          to={"/mock-doc.pdf"}
                        >
                          Выписка ПЗ 375 У{" "}
                        </DownloadDocumentItem>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <KTZEMarquee className="mb-[50px]" />
    </>
  );
};
