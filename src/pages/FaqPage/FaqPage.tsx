import { KTZEMarquee } from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { Accordion, Heading } from "@/shared/ui-kit";

export const FaqPage = () => {
  useAppTitle("FAQ - часто задаваемые вопросы");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container relative z-[5]">
          <div className="gap-[20px] pt-[100px] md:grid lg:grid-cols-12 lg:py-[170px]">
            <header className="lg:col-span-9 2xl:col-span-8">
              <Heading>FAQ - часто задаваемые вопросы</Heading>
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
        <div className="absolute -right-[400px] top-[150px] hidden h-[600px] w-[600px] -rotate-45 lg:block 2xl:-right-[300px] 2xl:h-[820px] 2xl:w-[820px]">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
          <div className="absolute left-[150px] top-[150px] h-full w-full bg-[linear-gradient(135deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)] 2xl:left-[230px] 2xl:top-[230px]"></div>
        </div>
      </section>
      <KTZEMarquee className="py-[60px] lg:hidden" />
    </>
  );
};
