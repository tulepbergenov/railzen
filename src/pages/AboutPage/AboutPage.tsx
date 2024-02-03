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
          <div className="flex min-h-svh flex-col justify-end">
            <header>
              <Heading>О нас</Heading>
              <hr className="my-[20px] border-white" />
              <ul className="mb-[50px] grid grid-cols-4 gap-[20px]">
                <li>
                  <p className="text-[20px] font-bold uppercase leading-[23px]">
                    Миссия компании
                  </p>
                  <p className="mt-[16px]">
                    Качественное и надёжное предоставление полного спектра
                    транспортно- логистических услуг во всех видах сообщений, с
                    совершенствованием бизнес-процессов, основываясь на
                    применении новейших технологий.
                  </p>
                </li>
                <li>
                  <p className="text-[20px] font-bold uppercase leading-[23px]">
                    Видение
                  </p>
                  <p className="mt-[16px]">
                    Лидерство на рынке международных грузовых мультимодальных
                    грузоперевозок. Оказание услуг высокого качества по
                    оптимальным ценам.
                  </p>
                </li>
                <li>
                  <p className="text-[20px] font-bold uppercase leading-[23px]">
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
                <li>
                  <p className="text-[20px] font-bold uppercase leading-[23px]">
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
        className="mt-[100px]"
        employees={MANAGEMENT_ITEMS}
        heading="Руководство"
      />
      <EmployeesSlider
        className="mt-[100px]"
        employees={BOARD_OF_DIRECTORS}
        heading="Совет директоров"
      />
      <section className="mt-[190px]">
        <div className="container">
          <div className="grid grid-cols-2 items-start gap-[20px]">
            <div className="sticky top-0 pt-[10px]">
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
      <KTZEMarquee className="mb-[50px] mt-[190px]" />
    </>
  );
};
