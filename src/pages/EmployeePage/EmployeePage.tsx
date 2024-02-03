import { useAppTitle } from "@/shared/hooks";
import { Heading } from "@/shared/ui-kit";

export const EmployeePage = () => {
  useAppTitle("Кожахметов Дамир Маратович");

  return (
    <section>
      <div className="container">
        <div className="pb-[60px] pt-[100px] lg:pb-[150px] lg:pt-[170px]">
          <Heading>Кожахметов Дамир Маратович</Heading>
          <hr className="my-[20px] border-[#AB9475]" />
          <div className="grid gap-[20px] sm:grid-cols-12">
            <p className="col-span-full text-[16px] font-bold uppercase leading-[140%] text-[#AB9475] sm:text-[20px] sm:leading-[23px] lg:col-span-3">
              И.О. Генерального директора (Председателя Правления)
            </p>
            <div className="h-[500px] overflow-hidden sm:order-last sm:col-span-5 sm:h-[435px] lg:order-none lg:col-span-4 xl:col-span-3">
              <img
                alt="Кожахметов Дамир Маратович"
                className="h-full w-full object-cover"
                height={531}
                src="/imgs/about/0.jpg"
                width={435}
              />
            </div>
            <div className="flex flex-col gap-y-[20px] sm:col-span-7 lg:col-span-5 xl:col-span-6">
              <p>
                Окончил Азиатско-Тихоокеанский институт информационных
                технологий в г. Куала-Лумпур, Малайзия по специальности
                бизнес-компьютеризация. Имеет степень магистра в области
                экономики и бизнеса, Казахский национальный университет им.
                Аль-Фараби.
              </p>
              <p>
                В разные годы Дамир Маратович занимал руководящие должности в
                ТОО «ERP-SERVICE» Kaztranskom, TOО «APK OLZHA HOLDING», TOO
                «ASIA PACK», АО «ЦеснаБанк», АО «НК «ҚТЖ», АО «KTZ Express»
              </p>
              <p>
                С 20 ноября 2023 года является И.о. Генерального директора
                (Председателя Правления) АО «KTZ Express».
              </p>
              <p>
                Дамир Маратович является Членом Правления АО «KTZ Express» и
                Членом Наблюдательного совета ТОО «KTZ Express Shipping».
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
