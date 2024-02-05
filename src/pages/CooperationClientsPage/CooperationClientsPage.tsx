import {
  CooperationNavigation,
  DownloadDocumentItem,
  KTZEMarquee,
} from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { Heading } from "@/shared/ui-kit";

export const CooperationClientsPage = () => {
  useAppTitle("Клиентам");

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
            <div className="mt-[50px] grid grid-cols-2 items-start gap-[20px]">
              <Heading className="sticky top-0 pt-[10px]">Клиентам</Heading>
              <div className="pt-[10px]">
                <div className="flex flex-col gap-y-[20px]">
                  <p>
                    <b>Правила:</b>
                  </p>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Правила взаимодействия в рамках Договора транспортной
                    экспедиции
                  </DownloadDocumentItem>
                </div>
                <div className="mt-[30px] flex flex-col gap-y-[20px]">
                  <p>
                    <b>Типовые договоры:</b>
                  </p>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Типовой договор на оперирование
                  </DownloadDocumentItem>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Типовой договор оказания услуг оператора вагонов при
                    перегрузе контейнеров через ОПП Достык, Алтынколь
                  </DownloadDocumentItem>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Типовой договор на оказание услуг транспортной экспедиции
                    (ДЖД)
                  </DownloadDocumentItem>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Типовой договор на транспортно-экспедиторское обслуживание
                    железнодорожным транспортом
                  </DownloadDocumentItem>
                </div>
                <div className="mt-[30px] flex flex-col gap-y-[20px]">
                  <p>
                    <b>
                      Информация по отцепленным транзитным контейнерам на
                      территории РК:
                    </b>
                  </p>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Справочная информация по отцепленным транзитным контейнерам
                    на территории Республики Казахстан по таможенному досмотру
                    (за 2019г.)
                  </DownloadDocumentItem>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Справочная информация по отцепленным транзитным контейнерам
                    на территории Республики Казахстан по таможенному досмотру
                    (за 2020г.)
                  </DownloadDocumentItem>
                </div>
                <div className="mt-[30px] flex flex-col gap-y-[20px]">
                  <p>
                    <b>Клиентам:</b>
                  </p>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Сумма таможенного сбора за таможенное декларирование в 2024
                    году
                  </DownloadDocumentItem>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Заявка на предоставление контейнеров в аренду
                  </DownloadDocumentItem>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Раздел аренда контейнеров
                  </DownloadDocumentItem>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Мы рады сообщить нашим клиентам о запуске нового сервиса по
                    аренде контейнеров
                  </DownloadDocumentItem>
                  <DownloadDocumentItem to={"/mock-doc.pdf"}>
                    Предложение об услугах по направлению из Китая в страны
                    Центральной Азии.
                  </DownloadDocumentItem>
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
