import {
  CountersMarquee,
  HomeAboutArrow,
  HomeHeroArrow,
  KTZEMarquee,
  KZMapAnimation,
  PartnersMarquee,
  StickyContacts,
  ThreeModel,
} from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { TriangleIcon } from "@/shared/icons";
import { getCurrentYear } from "@/shared/lib";
import { Heading } from "@/shared/ui-kit";
import { Link } from "react-router-dom";

export const HomePage = () => {
  useAppTitle();

  return (
    <>
      <section
        className="relative overflow-hidden bg-black/30 uppercase text-white before:absolute before:left-0 before:top-0 before:z-[3] before:h-full before:w-full before:bg-[linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%)] before:content-['']"
        id="home-hero"
      >
        <img
          alt="KTZ Express"
          className="absolute left-0 top-0 h-full w-full object-cover"
          height={1080}
          src={"/imgs/home/hero.jpg"}
          width={1920}
        />
        <HomeHeroArrow />
        <div className="container relative z-[5]">
          <div className="relative flex min-h-svh flex-col items-center justify-center">
            <header>
              <p className="ml-[25px] text-[14px] font-medium leading-[19px]">
                2000-{getCurrentYear()}
              </p>
              <h1 className="flex flex-col text-[200px] font-extralight leading-none">
                <span>Ktz</span>
                <span className="ml-[105px]">Express</span>
              </h1>
              <p className="ml-[127px] max-w-[335px] text-[14px] font-medium leading-[19px]">
                мультимодальные перевозки грузов
              </p>
            </header>
          </div>
        </div>
      </section>
      <StickyContacts />
      <section className="overflow-hidden">
        <div className="container">
          <div className="relative grid grid-cols-12 py-[350px]">
            <div className="col-span-8 flex flex-col gap-[20px] 2xl:col-span-7">
              <Heading as="h2" className="flex flex-col">
                <span>Вас приветствует </span>
                <span>АО «KTZ Express»!</span>
              </Heading>
              <hr className="border-[#AB9475]" />
              <div className="grid grid-cols-7 gap-x-[20px]">
                <p className="col-span-2 font-bold uppercase leading-[115%] text-[#AB9475] 2xl:text-[20px]">
                  Мультимодальные перевозвки грузов
                </p>
                <div className="col-span-5 flex flex-col items-start gap-y-[20px]">
                  <p>
                    {`KTZ Express - мультимодальная транспортно-логистическая
                    компания, дочерняя структура 'Казахстанские железные
                    дороги'. Предоставляет интегрированные услуги по
                    железнодорожной, морской и автомобильной перевозке грузов,
                    включая LCL, челночные поезда и логистический аутсорсинг.`}
                  </p>
                  <Link
                    className="grid grid-cols-[8px_1fr] items-center gap-x-[5px] rounded-[57.6px] border border-[#AB9475] px-[10px] py-[2px] text-[14px] font-medium uppercase leading-[19px] text-[#AB9475] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                    to={"/services-and-tariffs"}
                  >
                    <TriangleIcon className="h-auto w-full" />
                    <span>Подробнее</span>
                  </Link>
                </div>
              </div>
            </div>
            <section className="absolute right-0 top-2/4 h-[500px] w-[500px] -translate-y-2/4">
              <ThreeModel />
            </section>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="container">
          <div className="relative grid grid-cols-12 py-[200px] 2xl:py-[261px]">
            <div className="relative z-[5] col-start-5 col-end-13 flex flex-col gap-y-[20px] 2xl:col-start-6">
              <p className="text-[14px] font-bold uppercase leading-[19px] text-[#AB9475]">
                Калькуляторы
              </p>
              <Heading as="h2" className="text-5xl 2xl:text-[80px]">
                Рассчитывайте стоимость перевозок онлайн
              </Heading>
              <div className="grid grid-cols-2 gap-x-[20px]">
                <div className="flex flex-col items-start gap-y-[20px]">
                  <h2 className="font-semibold uppercase">
                    Тарифный калькулятор с расчетами выбросов со2
                  </h2>
                  <p>
                    Удобный тарифный калькулятор для расчета стоимости
                    перевозок. Укажите станции, груз и подвижной состав для
                    расчета по текущим тарифам.
                  </p>
                  <Link
                    className="mt-auto grid grid-cols-[8px_1fr] items-center gap-x-[5px] rounded-[57.6px] border border-[#AB9475] px-[10px] py-[2px] text-[14px] font-medium uppercase leading-[19px] text-[#AB9475] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                    to={"/services-and-tariffs"}
                  >
                    <TriangleIcon className="h-auto w-full" />
                    <span>Подробнее</span>
                  </Link>
                </div>
                <div className="flex flex-col items-start gap-y-[20px]">
                  <h2 className="flex flex-col font-semibold uppercase">
                    <span>Тарифный калькулятор для</span>
                    <span>lcl перевозок</span>
                  </h2>
                  <p>
                    Еженедельные отгрузки сборных грузов из КНР по
                    конкурентоспособным ценам. Контроль движения груза,
                    собственные контейнеры и склады. Узнайте стоимость
                    LCL-грузов в тарифном калькуляторе.
                  </p>
                  <Link
                    className="mt-auto grid grid-cols-[8px_1fr] items-center gap-x-[5px] rounded-[57.6px] border border-[#AB9475] px-[10px] py-[2px] text-[14px] font-medium uppercase leading-[19px] text-[#AB9475] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                    to={"/services-and-tariffs"}
                  >
                    <TriangleIcon className="h-auto w-full" />
                    <span>Подробнее</span>
                  </Link>
                </div>
              </div>
            </div>
            <img
              alt="Калькулятор"
              className="absolute -left-[300px] top-2/4 h-auto w-[700px] -translate-y-2/4 bg-contain object-cover 2xl:-left-[50px]"
              height={558}
              src={"/imgs/home/calc.jpg"}
              width={890}
            />
          </div>
        </div>
      </section>
      {/* <ServicesSlider /> */}
      <section className="relative bg-[#C4D0E2] before:absolute before:-top-[354px] before:left-0 before:h-[354px] before:w-full before:bg-[linear-gradient(180deg,rgba(212,225,240,0.00)_0%,#C4D0E2_78.22%)] before:content-['']">
        <div className="container pt-[120px]">
          <Heading
            as="h2"
            className="flex max-w-[700px] flex-col border-b border-b-[#244563] pb-[20px] text-5xl 2xl:max-w-[1000px] 2xl:text-[80px]"
          >
            <span>C нами</span>
            <span>сотрудничают</span>
          </Heading>
        </div>
        <div className="mt-[20px] pb-[0px]">
          <div className="relative overflow-hidden">
            <PartnersMarquee className="absolute left-0 top-2/4 z-[1] h-[96px] w-full -translate-y-2/4" />
            <KTZEMarquee />
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#C4D0E2]">
        <div className="container">
          <div className="pt-[190px]">
            <div className="flex max-w-[700px] flex-col items-start gap-y-[20px] 2xl:max-w-[1000px]">
              <Heading as="h2" className="text-5xl 2xl:text-[80px]">
                Наша компания в цифрах
              </Heading>
              <p>
                Мы не просто предоставляем услуги, а создаем персонализированный
                опыт, ориентированный на ваши уникальные потребности.
              </p>
              <Link
                className="grid grid-cols-[8px_1fr] items-center gap-x-[5px] rounded-[57.6px] border border-[#AB9475] px-[10px] py-[2px] text-[14px] font-medium uppercase leading-[19px] text-[#AB9475] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                to={"/services-and-tariffs"}
              >
                <TriangleIcon className="h-auto w-full" />
                <span>Оставить заявку</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-[10] mt-[60px] overflow-hidden pb-[275px]">
          <CountersMarquee />
        </div>
        <HomeAboutArrow />
      </section>
      <section className="overflow-hidden">
        <div className="container">
          <div className="relative grid grid-cols-2 items-center">
            <KZMapAnimation className="mr-auto lg:mx-auto lg:scale-50 xl:scale-75 2xl:scale-100" />
            <div className="col-start-2 col-end-3 flex flex-col items-start gap-y-[20px] py-[332px]">
              <Heading
                as="h2"
                className="flex flex-col text-5xl 2xl:text-[80px]"
              >
                <span>Вас приветствует</span>
                <span>АО «KTZ Express»!</span>
              </Heading>
              <hr className="w-full border-[#AB9475]" />
              <p>
                Мультимодальная транспортно-логистическая компания KTZ Express
                предлагает клиентам конкурентоспособные сроки доставки грузов по
                Казахстану и за рубежом.
              </p>
              <Link
                className="grid grid-cols-[8px_1fr] items-center gap-x-[5px] rounded-[57.6px] border border-[#AB9475] px-[10px] py-[2px] text-[14px] font-medium uppercase leading-[19px] text-[#AB9475] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                to={"/services-and-tariffs"}
              >
                <TriangleIcon className="h-auto w-full" />
                <span>Подробнее</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
