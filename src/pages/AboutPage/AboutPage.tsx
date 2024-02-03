import {
  DownloadDocumentItem,
  EmployeesSlider,
  KTZEMarquee,
} from "@/components";
import { useAppTitle } from "@/shared/hooks";
import {
  ABOUT_DOC_ITEMS,
  BOARD_OF_DIRECTORS,
  MANAGEMENT_ITEMS,
} from "@/shared/mocks";
import { Heading } from "@/shared/ui-kit";

export const AboutPage = () => {
  useAppTitle("О нас");

  return (
    <>
      <section className="relative text-white before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:bg-[linear-gradient(0deg,rgba(0,0,0,0.50)_0%,rgba(0,0,0,0.50)_100%)] before:content-['']">
        <img
          alt="О нас"
          className="absolute inset-0 h-full w-full bg-black object-cover"
          height={1080}
          src="/imgs/about.jpg"
          width={1920}
        />
        <div className="container relative z-[5]">
          <div className="flex flex-col justify-end pt-[200px] sm:pt-[170px] md:min-h-svh md:pb-0 md:pt-0">
            <header>
              <Heading>О нас</Heading>
              <hr className="my-[20px] border-white" />
              <ul className="mb-[50px] grid gap-[20px] md:grid-cols-2 lg:grid-cols-4">
                <li>
                  <p className="text-[18px] font-bold uppercase leading-[23px] sm:text-[20px]">
                    Миссия компании
                  </p>
                  <p className="mt-[16px]">
                    Качественное и надёжное предоставление полного спектра
                    транспортно- логистических услуг во всех видах сообщений, с
                    совершенствованием бизнес-процессов, основываясь на
                    применении новейших технологий.
                  </p>
                </li>
                <li className="col-span-full md:hidden">
                  <hr className="border-white" />
                </li>
                <li>
                  <p className="text-[18px] font-bold uppercase leading-[23px] sm:text-[20px]">
                    Видение
                  </p>
                  <p className="mt-[16px]">
                    Лидерство на рынке международных грузовых мультимодальных
                    грузоперевозок. Оказание услуг высокого качества по
                    оптимальным ценам.
                  </p>
                </li>
                <li className="col-span-full lg:hidden">
                  <hr className="border-white" />
                </li>
                <li>
                  <p className="text-[18px] font-bold uppercase leading-[23px] sm:text-[20px]">
                    Цели компании
                  </p>
                  <ul className="mt-[16px]">
                    <li>- Улучшение качества сервиса</li>
                    <li>- Автоматизация бизнес- процессов</li>
                    <li>- Привлечение транзитных грузопотоков</li>
                    <li>- Выполнение бюджетных показателей</li>
                    <li>- Развитие региональной сетиv</li>
                  </ul>
                </li>
                <li className="col-span-full md:hidden">
                  <hr className="border-white" />
                </li>
                <li>
                  <p className="text-[18px] font-bold uppercase leading-[23px] sm:text-[20px]">
                    Репутация
                  </p>
                  <ul className="mt-[16px]">
                    <li>- Доверие и удовлетворённость клиента</li>
                    <li>- Лояльность сотрудников</li>
                  </ul>
                </li>
              </ul>
            </header>
          </div>
        </div>
      </section>
      <EmployeesSlider
        className="mt-[60px] sm:mt-[100px]"
        employees={MANAGEMENT_ITEMS}
        heading="Руководство"
      />
      <EmployeesSlider
        className="mt-[60px] sm:mt-[100px]"
        employees={BOARD_OF_DIRECTORS}
        heading="Совет директоров"
      />
      <section className="mt-[60px] md:mt-[190px]">
        <div className="container">
          <div className="grid items-start gap-[20px] lg:grid-cols-2">
            <div className="pt-[10px] lg:sticky lg:top-0">
              <p className="text-[14px] font-bold uppercase leading-[140%] text-[#AB9475]">
                Доверие
              </p>
              <Heading as="h2">Корпоративные документы</Heading>
            </div>
            <div className="flex flex-col gap-y-[16px] pt-[10px]">
              {ABOUT_DOC_ITEMS.map((item, i) => (
                <DownloadDocumentItem key={i} to={"/mock-doc.pdf"}>
                  {item}
                </DownloadDocumentItem>
              ))}
            </div>
          </div>
        </div>
      </section>
      <KTZEMarquee className="mb-[50px] mt-[60px] md:mt-[190px]" />
    </>
  );
};
