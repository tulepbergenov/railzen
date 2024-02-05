import {
  CooperationNavigation,
  DownloadDocumentItem,
  KTZEMarquee,
} from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { Heading } from "@/shared/ui-kit";

export const CooperationInvestorsPage = () => {
  useAppTitle("Инвесторам");

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
              <Heading className="sticky top-0 pt-[10px]">Инвесторам</Heading>
              <div className="flex flex-col gap-y-[20px]">
                <DownloadDocumentItem to={"/mock-doc.pdf"}>
                  Финансовая отчетность (2022 год)
                </DownloadDocumentItem>
                <DownloadDocumentItem to={"/mock-doc.pdf"}>
                  Финансовая отчетность (2021 год)
                </DownloadDocumentItem>
                <DownloadDocumentItem to={"/mock-doc.pdf"}>
                  Финансовая отчетность (2020 год)
                </DownloadDocumentItem>
                <DownloadDocumentItem to={"/mock-doc.pdf"}>
                  Финансовая отчетность (2019 год)
                </DownloadDocumentItem>
                <DownloadDocumentItem to={"/mock-doc.pdf"}>
                  Финансовая отчетность (2018 год)
                </DownloadDocumentItem>
                <DownloadDocumentItem to={"/mock-doc.pdf"}>
                  Финансовая отчетность (2017 год)
                </DownloadDocumentItem>
                <DownloadDocumentItem to={"/mock-doc.pdf"}>
                  Финансовая отчетность (2016 год)
                </DownloadDocumentItem>
              </div>
            </div>
          </div>
        </div>
      </section>
      <KTZEMarquee className="mb-[50px]" />
    </>
  );
};
