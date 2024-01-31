import { CloseIcon } from "@/shared/icons";
import { useApplyModalStore } from "@/shared/stores";
import { Input, Modal } from "@/shared/ui-kit";
import { Tab } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { Fragment, useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { firstSchema } from "./ApplyModal.schema";
import { IFirstFormSubmitData } from "./ApplyModal.type";

export const ApplyModal = () => {
  const { isOpen, onClose } = useApplyModalStore();
  const firstSubmitBtnRef = useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { register: firstFormRegister, handleSubmit: firstFormHandleSubmit } =
    useForm<IFirstFormSubmitData>({
      resolver: yupResolver(firstSchema),
    });

  const onSubmitFirstForm = (values: IFirstFormSubmitData) => {
    console.log("onSubmitFirstForm", values);
  };

  const onSubmitDataForms = useCallback(() => {
    if (selectedIndex === 0) {
      if (firstSubmitBtnRef.current) {
        firstSubmitBtnRef.current.click();
        setSelectedIndex(1);
      }
    }
  }, [selectedIndex]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative flex items-center justify-between gap-[20px] p-[30px] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[#DFE7F5] before:content-['']">
        <h2 className="font-semibold">
          Заполните форму заявки на расчет ставки
        </h2>
        <button
          className="inline-block text-[#6D6E73] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
          type="button"
          onClick={onClose}
        >
          <CloseIcon className="h-auto w-[24px]" />
        </button>
      </div>
      <Tab.Group
        as="div"
        className="p-[30px] pt-[10px]"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List as="div" className="grid grid-cols-2 text-[#B3B3B3]">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={classNames(
                  "flex flex-col items-center gap-y-[8px] border-b-[2px] px-[16p] pb-[20px] pt-[20px] text-[16px] font-normal leading-[140%] transition-[border,background,color,opacity] duration-300 ease-in-out focus:outline-none focus-visible:outline-[#244563] active:opacity-50 md:hover:opacity-50",
                  {
                    ["border-b-[#244563] text-[#244563]"]: selected,
                    ["border-b-[#B3B3B3]"]: !selected,
                  },
                )}
                type="button"
              >
                <span
                  className={classNames(
                    "flex h-[25px] w-[25px] items-center justify-center rounded-full leading-none text-white",
                    {
                      ["bg-[#244563]"]: selected,
                      ["bg-[#B3B3B3]"]: !selected,
                    },
                  )}
                >
                  1
                </span>
                <span>Личные данные</span>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={classNames(
                  "flex flex-col items-center gap-y-[8px] border-b-[2px] px-[16p] pb-[20px] pt-[20px] text-[16px] font-normal leading-[140%] transition-[border,background,color,opacity] duration-300 ease-in-out focus:outline-none focus-visible:outline-[#244563] active:opacity-50 md:hover:opacity-50",
                  {
                    ["border-b-[#244563] text-[#244563]"]: selected,
                    ["border-b-[#B3B3B3]"]: !selected,
                  },
                )}
                type="button"
              >
                <span
                  className={classNames(
                    "flex h-[25px] w-[25px] items-center justify-center rounded-full leading-none text-white",
                    {
                      ["bg-[#244563]"]: selected,
                      ["bg-[#B3B3B3]"]: !selected,
                    },
                  )}
                >
                  2
                </span>
                <span>Данные груза</span>
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels as="div" className="mt-[12px] min-h-[100px]">
          <Tab.Panel as="div">
            <form onClick={firstFormHandleSubmit(onSubmitFirstForm)}>
              <fieldset>
                <legend className="sr-only">Личные данные форма</legend>
                <div className="grid grid-cols-2 gap-x-[24px] gap-y-[2px]">
                  <div>
                    <Input
                      placeholder="Фамилия"
                      type="text"
                      {...firstFormRegister("lastName")}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Имя"
                      type="text"
                      {...firstFormRegister("firstName")}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Отчество"
                      type="text"
                      {...firstFormRegister("middleName")}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Наименование компании"
                      type="text"
                      {...firstFormRegister("companyName")}
                    />
                  </div>
                  <div>
                    <Input
                      inputMode="email"
                      placeholder="Email"
                      type="text"
                      {...firstFormRegister("email")}
                    />
                  </div>
                  <div>
                    <Input
                      inputMode="tel"
                      placeholder="Телефон"
                      type="text"
                      {...firstFormRegister("phone")}
                    />
                  </div>
                </div>
              </fieldset>
              <button className="sr-only" ref={firstSubmitBtnRef} type="submit">
                Отправить
              </button>
            </form>
          </Tab.Panel>
          <Tab.Panel as="div">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              quae eos laboriosam eaque. Necessitatibus dolores, similique, quia
              temporibus recusandae accusantium quas totam cumque vitae laborum
              itaque obcaecati amet modi ab.
            </p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="flex items-center justify-end p-[30px]">
        <button
          className="relative flex min-h-[24px] min-w-[135px] items-center justify-center overflow-hidden rounded-[57.6px] bg-[#244563] px-[10px] py-[2px] text-[14px] font-medium uppercase leading-[140%] text-white transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
          type="button"
          onClick={onSubmitDataForms}
        >
          <span
            className={classNames(
              "absolute left-2/4 top-2/4 -translate-y-2/4 transition-transform duration-300 ease-in-out ",
              {
                ["-translate-x-2/4"]: selectedIndex === 1,
                ["-translate-x-[170px]"]: selectedIndex !== 1,
              },
            )}
          >
            Отправить
          </span>
          <span
            className={classNames(
              "absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 transition-transform duration-300 ease-in-out",
              {
                ["-translate-x-2/4"]: selectedIndex === 0,
                ["translate-x-[80px]"]: selectedIndex !== 0,
              },
            )}
          >
            Далее
          </span>
        </button>
      </div>
    </Modal>
  );
};
