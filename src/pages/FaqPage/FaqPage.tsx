import { useAppTitle } from "@/shared/hooks";
import { Accordion } from "@/shared/ui-kit";

export const FaqPage = () => {
  useAppTitle("FAQ - часто задаваемые вопросы");

  return (
    <>
      <section className="overflow-hidden">
        <div className="container relative z-[5]">
          <div className="gap-[20px] pt-[100px] md:grid lg:grid-cols-12 lg:py-[170px]">
            <header className="lg:col-span-9 2xl:col-span-8">
              <h1 className="text-[80px] font-light uppercase leading-[120%]">
                FAQ - часто задаваемые вопросы
              </h1>
            </header>
            <hr className="my-[20px] border-[#AB9475] lg:col-span-9 lg:my-[50px] 2xl:col-span-8" />
            <div className="gap-x-[24px] gap-y-[5px] md:grid md:grid-cols-2 md:items-start lg:col-span-9 2xl:col-span-8">
              <Accordion heading={"Как подать заявку на расчет ставок?"}>
                <p>Заявку на расчет ставок можно подать:</p>
                <ul className="list-inside list-decimal">
                  <li>
                    через Контакт центр по номеру (7172)611500 или по почте
                    express@ktze.online;
                  </li>
                  <li>через сайт: www.ktze.online или www.ktze.kz;</li>
                  <li>через Facebook;</li>
                  <li>
                    написав официальное письмо привезти его нарочно по адресу
                    Конаева 10, и/или отправив на email канцелярии: info@ktze.kz
                  </li>
                </ul>
              </Accordion>
              <Accordion heading={"Какие грузы АО «KTZ Express» отправляет?"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion
                heading={"Какие документы необходимы для заключения договора?"}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion heading={"Как производится расчет стоимости ставок?"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion
                heading={
                  "Как можно получить учредительные документы АО «KTZ Express»?"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion
                heading={
                  "Как мне узнать о состоянии моего груза, когда он в пути?"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion heading={"Срок действия ставок?"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion heading={"Как оплатить ваши услуги?"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion
                heading={
                  "Какие дополнительные услуги оказывает АО «KTZ Express»?"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion
                heading={
                  "Какие дополнительные услуги оказывает АО «KTZ Express»?"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion heading={"Как заключить с вами договор?"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion heading={"График работы контакт центра?"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
              <Accordion
                heading={
                  "Консультируют ли специалисты компании по вопросам оформления товаросопроводительных документов?"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum aut in impedit facere harum alias ad sint! Consequatur
                  ad eveniet enim qui iusto iure inventore deleniti? Ea nesciunt
                  doloribus nobis.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px] lg:hidden"></section>
    </>
  );
};
