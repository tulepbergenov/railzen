import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { contactFormSchema } from "./ContactForm.schema";
import { IContactForm, IContactFormSubmitData } from "./ContactForm.type";

export const ContactForm = ({ isOpen, className, ...props }: IContactForm) => {
  const id = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactFormSubmitData>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = (values: IContactFormSubmitData) => {
    console.log("values", values);

    reset();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{
            opacity: 1,
          }}
          className={classNames(className)}
          exit={{
            opacity: 0,
          }}
          initial={{
            opacity: 0,
          }}
          key={`${id}+contact-form`}
          transition={{
            ease: "easeInOut",
            delay: 0,
            duration: 0.2,
          }}
          {...props}
        >
          <form
            className="w-full max-w-[600px] rounded-[8px] bg-white p-[30px] shadow-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset>
              <legend className="text-[18px] font-bold leading-[24px] text-[#AB9475]">
                Телефон горячей линии АО «KTZ Express»{" "}
                <Link
                  className="active:underline md:hover:underline"
                  to={"tel:88000801994"}
                >
                  + 7 800 080 19 94
                </Link>
              </legend>
              <div className="mt-[26px] grid grid-cols-1 gap-y-[14px]">
                <div className="relative">
                  <input
                    className="placeholder:tex-t[#6D6E73] inline-block w-full border-b border-b-[#6D6E73] px-[8px] py-[10px] text-[#244563]"
                    placeholder="ФИО"
                    type="text"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <span className="absolute right-0 top-[calc(100%+5px)] z-[5] text-[14px] leading-[1] text-[#E7311B]">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    className="placeholder:tex-t[#6D6E73] inline-block w-full border-b border-b-[#6D6E73] px-[8px] py-[10px] text-[#244563]"
                    inputMode="tel"
                    placeholder="Номер телефона"
                    type="text"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <span className="absolute right-0 top-[calc(100%+5px)] z-[5] text-[14px] leading-[1] text-[#E7311B]">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    className="placeholder:tex-t[#6D6E73] inline-block w-full border-b border-b-[#6D6E73] px-[8px] py-[10px] text-[#244563]"
                    inputMode="email"
                    placeholder="Электронная почта"
                    type="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="absolute right-0 top-[calc(100%+5px)] z-[5] text-[14px] leading-[1] text-[#E7311B]">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <textarea
                    className="placeholder:tex-t[#6D6E73] inline-block max-h-[50px] min-h-[50px] w-full border-b border-b-[#6D6E73] px-[8px] py-[10px] text-[#244563]"
                    placeholder="Текст сообщения"
                    {...register("message")}
                  />
                  {errors.message && (
                    <span className="absolute right-0 top-[calc(100%+5px)] z-[5] text-[14px] leading-[1] text-[#E7311B]">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-[20px]">
                <p className="text-[#6D6E73]">
                  Необходимо заполнить все поля формы
                </p>
                <div className="mt-[30px] flex justify-end">
                  <button
                    className="inline-block rounded-[57.6px] bg-[#244563] px-[10px] py-[2px] text-[14px] font-medium uppercase leading-[140%] text-white transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                    type="submit"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
