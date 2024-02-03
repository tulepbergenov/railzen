import { KTZEMarquee } from "@/components";
import { CONTACT_ITEMS } from "@/shared/constants";
import { useAppTitle } from "@/shared/hooks";
import { Heading } from "@/shared/ui-kit";
import { Link } from "react-router-dom";

export const HotlinePage = () => {
  useAppTitle("Горячая линия");

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="container relative z-[5]">
          <div className="pb-[68px] pt-[100px] lg:pb-[335px] lg:pt-[170px]">
            <div className="grid gap-[20px] lg:grid-cols-12">
              <Heading className="lg:col-span-10 2xl:col-span-8">
                Горячая линия
              </Heading>
              <hr className="my-[20px] border-[#AB9475] lg:col-span-10 lg:my-[30px] 2xl:col-span-8" />
              <div className="grid gap-x-[20px] gap-y-[30px] lg:col-span-10 lg:grid-cols-2 2xl:col-span-8">
                <div>
                  <div className="flex flex-col gap-y-[20px]">
                    <p>
                      О любых фактах трудовых, коррупционных и иных видов
                      правонорушений Вы можете сообщить по любому из четырех
                      каналов связи
                    </p>
                    <p>Конфиденциальность и анонимность</p>
                    <p>Рассмотрение 100% обращений</p>
                  </div>
                  <ul className="mt-[30px] grid grid-cols-2 gap-x-[20px] gap-y-[30px]">
                    {CONTACT_ITEMS.map((item) => {
                      if (item.isBlank) {
                        return (
                          <li
                            className="flex text-[16px] leading-[140%] text-[#AB9475]"
                            key={item.href}
                          >
                            <Link
                              className="grid grid-cols-[32px_1fr] items-center gap-x-[20px] gap-y-[10px] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50 [&>svg]:row-span-2 [&>svg]:h-[32px] [&>svg]:w-full"
                              target="_blank"
                              to={item.href}
                            >
                              {item.icon}
                              <span>{item.name}</span>
                              <span className="font-semibold">
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        );
                      }

                      return (
                        <li
                          className="flex text-[16px] leading-[140%] text-[#AB9475]"
                          key={item.href}
                        >
                          <Link
                            className="grid grid-cols-[32px_1fr] items-center gap-x-[20px] gap-y-[10px] transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50 [&>svg]:row-span-2 [&>svg]:h-[32px] [&>svg]:w-full"
                            target="_blank"
                            to={item.href}
                          >
                            {item.icon}
                            <span>{item.name}</span>
                            <span className="font-semibold">{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="h-[260px] w-full">
                  <img
                    alt="Samryk Kazyna"
                    className="h-full w-full object-contain"
                    height={262}
                    src="/imgs/hotline.jpg"
                    width={582}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-[430px] top-[150px] hidden h-[550px] w-[550px] -rotate-45 lg:block 2xl:-right-[300px] 2xl:h-[700px] 2xl:w-[700px]">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)]"></div>
          <div className="absolute left-[100px] top-[100px] h-full w-full bg-[linear-gradient(135deg,#AB9475_0%,#AB9475_0.01%,rgba(171,148,117,0.00)_42.76%)] 2xl:left-[230px] 2xl:top-[230px]"></div>
        </div>
      </div>
      <KTZEMarquee className="pb-[95px] lg:hidden" />
    </>
  );
};
