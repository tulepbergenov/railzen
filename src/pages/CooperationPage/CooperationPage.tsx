import { CooperationNavigation } from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { Heading } from "@/shared/ui-kit";

export const CooperationPage = () => {
  useAppTitle("Сотрудничество");

  return (
    <>
      <section className="relative bg-black text-white before:absolute before:left-0 before:top-0 before:z-[3] before:h-full before:w-full before:bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.60)_99.88%)] before:content-[''] after:absolute after:left-0 after:top-0 after:z-[4] after:h-full after:w-full after:bg-[linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%)] after:content-['']">
        <img
          alt="О программе трансформация"
          className="absolute inset-0 h-full w-full object-cover"
          height={1080}
          src="/imgs/coop.jpg"
          width={1920}
        />
        <div className="container relative z-[5]">
          <div className="relative flex min-h-svh flex-col justify-end">
            <CooperationNavigation className="absolute left-2/4 top-[120px] z-[5] -translate-x-2/4" />
            <div className="mb-[30px] grid grid-cols-2 gap-[20px]">
              <Heading>О программе трансформация</Heading>
              <hr className="col-span-full my-[20px] border-white" />
              <p className="col-start-2 col-end-3">
                Программа трансформации бизнеса АО «НК «ҚТЖ» – это деятельность
                Компании направленная на реализацию Программы трансформации АО
                «Самрук-Қазына» и ожиданий Единственного акционера АО «НК «ҚТЖ»,
                а также достижение стратегических целей Компании, указанных в
                Стратегии развития АО «НК «ҚТЖ» до 2025 года (утвержденной
                Советом директоров Компании 26.11.2015 года, №11) (далее –
                Стратегия), посредством системных преобразований во внутренней и
                внешней средах.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[100px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-[20px]">
            <div>
              <Heading as="h2">
                Увеличение транзитных перевозок и доходов от них
              </Heading>
              <hr className="my-[20px] border-[#AB9475]" />
              <div className="text-[#AB9475]">
                <p>
                  Спонсор проекта: Абдуллаев Д.В. - Председателя Правления
                  (Генеральный директор) АО «KTZ Express».
                </p>
                <p>
                  Руководитель проекта: Ахмеджанова М.Т. – Заместитель
                  Генерального директора АО «KTZ Express».
                </p>
                <p>Цель проекта:</p>
                <p>
                  Увеличение объема контейнерных перевозок в среднем на 15%
                  ежегодно.
                </p>
              </div>
            </div>
            <div>
              <p>
                <b>Предпосылки к проекту:</b>
              </p>
              <p>
                Снижение в 2019 году объемов транзитных перевозок в РК по
                сравнению с прошлым годом;
              </p>
              <p>
                Отсутствие автоматизации основных производственных
                бизнес-процессов;
              </p>
              <p>
                Отсутствие агентской сети в основных грузообразующих точках.
              </p>
              <p>
                <b>Ожидания от реализации:</b>
              </p>
              <p>Улучшение количественных и качественных показателей;</p>
              <p>Повышение эффективности функции продаж;</p>
              <p>Создание эффективной модели управления компанией;</p>
              <p>Автоматизация бизнес-процессов компании;</p>
              <p>
                Повышение эффективности текущих бизнес-направлений (контейнерные
                поезда в рамках ТМТМ, ОТЛК; международный транзит; контейнерный
                сервис).
              </p>
              <p>Срок реализации проекта: 2019-2023 гг.</p>
              <p>
                <b>Периметр проекта: </b>АО «KTZ Express».
              </p>
              <p>
                <b>Выгоды проекта: </b>Финансовые выгоды предусмотрены.
              </p>
              <p>
                <b>Качественные выгоды:</b>
              </p>
              <p>Повышение доходности Компании;</p>
              <p>
                Увеличение объемов транзитных перевозок в среднем на 15% в год;
              </p>
              <p>
                Расширение агентской сети путем открытия коммерческих офисов в
                грузообразующих точках КНР, РФ, Турции и Европе;
              </p>
              <p>Повышение эффективности функции продаж;</p>
              <p>Эффективная модель управления компанией;</p>
              <p>Автоматизация бизнес-процессов компании;</p>
              <p>
                Повышение эффективности текущих бизнес-направлений (контейнерные
                поезда в рамках ТМТМ, ОТЛК; международный транзит; контейнерный
                сервис);
              </p>
              <p>
                Развитие новых бизнес-направлений (холодные поезда, фидерное
                сообщение по Каспию, «Rail-Air»);
              </p>
              <p>
                Интеграция с Комитетом гос.доходов РК в целях обеспечения
                ускоренного прохождения транзитных грузов через гос.границы
                РК-КНР, РК-Узбекистан, РК-Азербайджан;
              </p>
              <p>
                Сокращение транспортных расходов казахстанских грузоотправителей
                на 12% по территории Казахстана через применение нулевой ставки
                НДС к обороту по экспортным перевозкам грузов ЖД-водным
                сообщением с перевалкой груза с ЖД на водный транспорт.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[200px]">
        <div className="container">
          <div>
            <div className="max-w-[800px] uppercase text-[#AB9475]">
              <p>
                Спонсор проекта: Соколов П.В. – Заместитель Председателя
                Правления по логистике АО «НК «ҚТЖ».
              </p>
              <p>
                Руководитель проекта: Урынбасаров А.Ж. – директор Департамента
                продаж контейнерные перевозки АО «KTZ Express».
              </p>
              <p>Цель проекта:</p>
              <p>
                Повышение доходности KTZE от реализации проекта за период
                2020-2023 годы.
              </p>
            </div>
            <Heading as="h2" className="mt-[20px] max-w-[700px]">
              Развитие LCL - перевозок
            </Heading>
            <div className="relative mt-[20px] flex items-end justify-end gap-[20px]">
              <img
                alt="Развитие LCL - перевозок"
                className="relative"
                height={288}
                src="/imgs/coop/1.jpg"
                width={432}
              />
              <div className="max-w-[700px]">
                <p>
                  <b>Развитие LCL-перевозок</b>
                </p>
                <p>
                  Острая необходимость в реализации новых логистических
                  продуктов с высокой степенью маржинальности;
                </p>
                <p>
                  Высокая степень развития интернет-продаж товаров формирует
                  увеличивающийся спрос в организации сборных перевозок из КНР в
                  РК;
                </p>
                <p>
                  Наличие терминальной инфраструктуры в порту Ляньюньган (КНР)
                  мощностью 500 тыс. ДФЭ и одновременного хранения грузов - 27
                  тыс. тонн на открытой площадке
                </p>
                <p>
                  Потенциальная возможность поднять уровень маржинальности
                  контейнерных перевозок в 20 раз посредством оказания сервиса
                  «LCL-перевозок».
                </p>
                <p>
                  <b>Ожидания от реализации:</b>
                </p>
                <p>Повышение доли маржинальных контейнерных перевозок;</p>
                <p>Повышение доходности KTZE до 2023 года;</p>
                <p>
                  Минимизация убытков KTZE за аренду складов УК СЭЗ «Хоргос –
                  Восточные ворота»;
                </p>
                <p>
                  Развитие новых бизнес-направлений (услуги складской логистики
                  и логистического аутсорсинга).
                </p>
                <p>Срок реализации проекта: 2019-2023 гг.</p>
                <p>
                  <b>Периметр проекта: </b>АО «KTZ Express».
                </p>
                <p>
                  <b>Выгоды проекта: </b> Финансовые выгоды предусмотрены.
                </p>
                <p>
                  <b>Качественные выгоды:</b>
                </p>
                <p>Повышение доходности Компании;</p>
                <p>
                  Минимизация убытков KTZE за аренду складов УК СЭЗ «Хоргос –
                  Восточные ворота».
                </p>
                <p>Повышение доли маржинальных контейнерных перевозок;</p>
                <p>
                  Развитие новых бизнес-направлений (услуги складской логистики
                  и логистического аутсорсинга).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[200px]">
        <div className="container">
          <div>
            <div className="max-w-[800px] uppercase text-[#AB9475]">
              <p>
                Спонсор проекта: Соколов П.В. – Заместитель Председателя
                Правления по логистике АО «НК «ҚТЖ». Руководитель проекта:
                Тулеушин Ш.А. – Заместитель Генерального директора по
                операционному обеспечению АО «KTZ Express».
              </p>
            </div>
            <Heading as="h2" className="mt-[20px]">
              Предпроектное обследование по внедрению технологии контейнерных
              стоков
            </Heading>
            <div className="relative mt-[20px] flex items-start justify-end gap-[20px]">
              <img
                alt="Развитие LCL - перевозок"
                className="mt-[150px]"
                height={288}
                src="/imgs/coop/2.jpg"
                width={432}
              />
              <div className="max-w-[700px]">
                <p>
                  Направлено на оптимизацию издержек логистической цепи за счет
                  улучшения технологии и минимизации непроизводительных затрат и
                  временных потерь, систематизация контейнерных потоков,
                  изменение географии размещения контейнерных площадок.
                </p>
                <p>
                  <b>Предпосылки к мероприятию:</b>
                </p>
                <p>
                  Высокая стоимость перевозки в контейнере в сравнении с
                  повагонными отправками;
                </p>
                <p>
                  Несбалансированность экспортных и импортных грузопотоков, а
                  также транзитных;
                </p>
                <p>
                  Задействование ремонтной базы, как дополнительной бизнес
                  единицы, формирующей доходные поступления.
                </p>
                <p>
                  <b>Ожидания от реализации:</b>
                </p>
                <p>
                  Повышение конкурентоспособности контейнерных перевозок путем
                  принятия сбалансированной тарифной политики.
                </p>
                <p>
                  <b>Срок реализации мероприятия:</b> до конца 2019 года.
                </p>
                <p>
                  <b>Периметр проекта:</b> АО «KTZ Express».
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[200px]">
        <div className="container">
          <div>
            <div className="max-w-[800px] uppercase text-[#AB9475]">
              <p>
                Спонсор проекта: Абдуллаев Д.В. –Председатель Правления
                (Генеральный директор) АО «KTZ Express».
              </p>
              <p>
                Руководитель проекта: Тулеушин Ш.А. – Заместитель Генерального
                директора по операционному обеспечению АО «KTZ Express».
              </p>
              <p>
                Направлено на принятие решения о целесообразности открытия
                нового направления бизнеса для KTZE по оказанию услуг
                логистического аутсорсинга (консалтинга).
              </p>
            </div>
            <Heading as="h2" className="mt-[20px]">
              Предпроектное исследование по целессообразности внедрения услуг
              логистического аутсорсинга
            </Heading>
            <div className="relative mt-[20px] flex items-start justify-end gap-[20px]">
              <img
                alt="Развитие LCL - перевозок"
                className="mt-[150px]"
                height={288}
                src="/imgs/coop/2.jpg"
                width={432}
              />
              <div className="max-w-[700px]">
                <p>
                  <b>Предпосылки к мероприятию:</b>
                </p>
                <p>
                  Нескоординированные действия логистических подразделений
                  предприятий и работы станций (результат: простой вагонов на
                  станциях отправления/назначения. Простой грузовых вагонов в
                  ожидании погрузочно-разгрузочных работ.)
                </p>
                <p>
                  Простой вагонов, увеличение времени оборота вагона и как
                  следствие неисполнения плановых показателей: по грузообороту,
                  по уровню погрузки и соответственно уровня доходов от
                  оперирования вагонами.
                </p>
                <p>
                  <b>Ожидания от реализации:</b> Оценка перспектив услуг
                  логистического аутсорсинга в Казахстане.
                </p>
                <p>
                  <b>Срок реализации мероприятия:</b> до конца 2019 года.
                </p>
                <p>
                  <b>Периметр проекта:</b> АО «KTZ Express».
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[182px] mt-[100px]">
        <div className="container">
          <div className="max-w-[800px]">
            <div className="uppercase text-[#AB9475]">
              <p>
                Спонсор проекта: Абдуллаев Д.В. –Председатель Правления
                (Генеральный директор) АО «KTZ Express».
              </p>
              <p>
                Руководитель проекта: Ибраева С.Ж. – директор Департамента
                маркетинга и стратегического развития АО «KTZ Express».
              </p>
              <p>
                Направлено на решение о целесообразности открытия нового
                направления бизнеса для KTZE по управлению складов,
                расположенных на территории СЭЗ «Хоргос – Восточные ворота».
              </p>
            </div>
            <Heading as="h2" className="mt-[20px]">
              Предпроектное исследование по внедрению услуг складской логистики
            </Heading>
            <hr className="my-[20px] border-[#AB9475]" />
            <div>
              <p>
                <b>Предпосылки к мероприятию:</b>
              </p>
              <p>
                Затраты KTZE за аренду складов, расположенных на территории СЭЗ
                «Хоргос – Восточные ворота».
              </p>
              <p>
                <b>Ожидания от реализации:</b>
              </p>
              <p>
                Минимизация убытков KTZE за аренду складов, расположенных на
                территории СЭЗ «Хоргос – Восточные ворота».
              </p>
              <p>
                <b>Срок реализации мероприятия:</b> до конца 2019 года.
              </p>
              <p>
                <b>Периметр проекта:</b> АО «KTZ Express».
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};