import { ContactForm } from "@/components";
import { PhoneContactIcon } from "@/shared/icons";
import classNames from "classnames";
import { useState } from "react";

export const ContactsPage = () => {
  const [isOpenContactForm, setIsOpenContactForm] = useState(false);
  // const [isOpenContactList, setIsOpenContactList] = useState(false);

  const handleToggleContactForm = () => {
    setIsOpenContactForm((prevState) => !prevState);
  };

  // const handleToggleContactList = () => {
  //   setIsOpenContactList((prevState) => !prevState);
  // };

  return (
    <section>
      <div className="container">
        <div className="relative pt-[120px]">
          <header className="sr-only">
            <h1>Контакты</h1>
          </header>
          <div className="absolute left-[25px] top-[145px] z-[5] flex flex-col gap-y-[16px]">
            {/* <button
              className={classNames(
                "flex h-[42px] w-[42px] items-center justify-center rounded-[8px] shadow-md transition-[color,background,opacity] duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
                {
                  ["bg-[#244563] text-white"]: isOpenContactList,
                  ["bg-white text-[#244563]"]: !isOpenContactList,
                },
              )}
              type="button"
              onClick={handleToggleContactList}
            >
              <BurgerTripleIcon className="h-auto w-[20px]" />
            </button> */}
            <button
              className={classNames(
                "flex h-[42px] w-[42px] items-center justify-center rounded-[8px] shadow-md transition-[color,background,opacity] duration-300 ease-in-out active:opacity-50 md:hover:opacity-50",
                {
                  ["bg-[#244563] text-white"]: isOpenContactForm,
                  ["bg-white text-[#244563]"]: !isOpenContactForm,
                },
              )}
              type="button"
              onClick={handleToggleContactForm}
            >
              <PhoneContactIcon className="h-auto w-[22px]" />
            </button>
          </div>
          <div className="absolute bottom-0 right-0 z-[5] flex min-h-[175px] w-full max-w-[600px] flex-col justify-between gap-y-[10px] rounded-[16px] bg-white p-[30px] shadow-md sm:bottom-[25px] sm:right-[25px]">
            <p className="text-[18px] font-bold uppercase leading-[1.2]">
              Филиал AO&nbsp;&laquo;KTZ Express&raquo;- &laquo;KTZE
              Commerce&raquo;
            </p>
            <div>
              <p>
                Казахстан, Алматыул. Жамакаева дом 155а Контактный телефон:
                <a
                  className="active:underline md:hover:underline"
                  href="tel:+77754521777"
                >
                  +7 775 452 17 77
                </a>{" "}
                Электронный адресс:{" "}
                <a
                  className="active:underline md:hover:underline"
                  href="mailto:commerce@ktze.kz"
                >
                  commerce@ktze.kz
                </a>
              </p>
            </div>
          </div>
          <ContactForm
            className="absolute bottom-0 right-0 z-[10] sm:bottom-[25px] sm:right-[25px]"
            isOpen={isOpenContactForm}
          />
          <div className="h-[600px] w-full [&>iframe]:h-full [&>iframe]:w-full">
            <iframe
              frameBorder="0"
              height="400"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A845a9da5bc888d5e829e9e03c7f4759b23e4913dd6433b3d429412855e95305c&amp;source=constructor"
              width="500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
