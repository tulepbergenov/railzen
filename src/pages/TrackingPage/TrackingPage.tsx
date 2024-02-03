import { RoundedCheckIcon } from "@/shared/icons";
import { Heading } from "@/shared/ui-kit";

export const TrackingPage = () => {
  return (
    <section className="pt-[120px]">
      <div className="relative border-t border-t-[#B3B3B3]">
        <div className="container">
          <div className="min-h-[calc(100svh-120px)]">
            <div className="grid grid-cols-2 gap-[32px]">
              <div className="py-[30px] pb-[35px]">
                <Heading>Отслеживание груза</Heading>
                <hr className="my-[20px] border-[#AB9475]" />
                <form>
                  <div className="relative">
                    <input
                      className="w-full border-b border-b-[#B3B3B3] px-[8px] py-[9px] text-[16px] font-normal leading-[140%] text-[#244563] placeholder:text-[#6D6E73]"
                      placeholder="Введите номер контейнера"
                      type="text"
                    />
                    <button
                      className="absolute right-0 top-2/4 z-[1] -translate-y-2/4 rounded-[57.6px] bg-[#244563] px-[10px] py-[2px] text-[14px] font-medium uppercase leading-[140%] text-white transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
                      type="submit"
                    >
                      Отследить груз
                    </button>
                  </div>
                  <span className="mt-[20px] inline-block text-[#E7311B]">
                    Трек-номер не найден.
                  </span>
                </form>
                <div className="mt-[36px] rounded-[8px] border border-[#244563] p-[36px]">
                  <div>
                    <div>
                      <div className="flex flex-col gap-y-[32px]">
                        <div className="grid grid-cols-[20px_1fr] gap-x-[20px]">
                          <div className="relative w-full pt-[1px] before:absolute before:left-2/4 before:top-[4px] before:h-[calc(100%+28px)] before:w-px before:-translate-x-2/4 before:border-l before:border-dashed before:border-l-[#B3B3B3] before:content-['']">
                            <RoundedCheckIcon className="relative inline-block h-auto w-full text-[#AB9475]" />
                          </div>
                          <div className="flex flex-col gap-y-[12px]">
                            <div className="flex items-center justify-between text-[14px] uppercase leading-[140%] text-[#6D6E73]">
                              <span>Отправление</span>
                              <div className="flex items-center gap-x-[20px]">
                                <span>Прошел</span>
                                <span className="rounded-[8px] border border-[#244563] px-[8px] py-[4px] font-medium text-[#244563]">
                                  <time>10.01.2024</time>
                                </span>
                              </div>
                            </div>
                            <div className="border-b border-b-[#B3B3B3] pb-[16px]">
                              <p className="font-semibold">Алматы</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-[20px_1fr] gap-x-[20px]">
                          <div className="relative w-full pt-[1px] before:absolute before:left-2/4 before:top-[4px] before:h-[calc(100%+28px)] before:w-px before:-translate-x-2/4 before:border-l before:border-dashed before:border-l-[#B3B3B3] before:content-['']">
                            <RoundedCheckIcon className="relative inline-block h-auto w-full text-[#6D6E73]" />
                          </div>
                          <div className="flex flex-col gap-y-[12px]">
                            <div className="flex items-center justify-between text-[14px] uppercase leading-[140%] text-[#6D6E73]">
                              <span>В пути</span>
                              <div className="flex items-center gap-x-[20px]">
                                <span className="rounded-[8px] border border-[#244563] px-[8px] py-[4px] font-medium text-[#244563]">
                                  <time>10.01.2024</time>
                                </span>
                              </div>
                            </div>
                            <div className="border-b border-b-[#B3B3B3] pb-[16px]">
                              <p className="font-semibold">Елимай (обп)</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-[20px_1fr] gap-x-[20px]">
                          <div className="relative w-full pt-[1px] after:absolute after:-left-[8px] after:-top-[4.5px] after:h-[36px] after:w-[36px] after:rounded-full after:bg-[#244563]/20 after:content-['']">
                            <RoundedCheckIcon className="relative z-[1] inline-block h-auto w-full text-[#244563]" />
                          </div>
                          <div className="flex flex-col gap-y-[12px]">
                            <div className="flex items-center justify-between text-[14px] uppercase leading-[140%] text-[#6D6E73]">
                              <span>Назначение</span>
                              <div className="flex items-center gap-x-[20px]">
                                <span className="rounded-[8px] border border-[#244563] px-[8px] py-[4px] font-medium text-[#244563]">
                                  <time>10.01.2024</time>
                                </span>
                              </div>
                            </div>
                            <div className="border-b border-b-[#B3B3B3] pb-[16px]">
                              <p className="font-semibold">Астана</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[48px] grid grid-cols-2 gap-[20px] 2xl:grid-cols-3">
                    <div className="flex flex-col gap-y-[16px]">
                      <p className="rounded-[140%] text-[14px] text-[#6D6E73]">
                        Текущая дислокация
                      </p>
                      <p>Елимай (обп)</p>
                    </div>
                    <div className="flex flex-col gap-y-[16px]">
                      <p className="rounded-[140%] text-[14px] text-[#6D6E73]">
                        Номер контейнера
                      </p>
                      <p>379HGDT58Kb</p>
                    </div>
                    <div className="flex flex-col gap-y-[16px]">
                      <p className="rounded-[140%] text-[14px] text-[#6D6E73]">
                        Номер вагона
                      </p>
                      <p>94410396</p>
                    </div>
                    <div className="flex flex-col gap-y-[16px]">
                      <p className="rounded-[140%] text-[14px] text-[#6D6E73]">
                        Последнее обновление
                      </p>
                      <p>08.09.2023, 17:35</p>
                    </div>
                    <div className="flex flex-col gap-y-[16px]">
                      <p className="rounded-[140%] text-[14px] text-[#6D6E73]">
                        Номер поезда
                      </p>
                      <p>1164</p>
                    </div>
                    <div className="flex flex-col gap-y-[16px]">
                      <p className="rounded-[140%] text-[14px] text-[#6D6E73]">
                        Индекс поезда
                      </p>
                      <p>1483-613-7085</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-2/4 bg-[#DFE7F5]">
          <ul className="absolute left-[24px] top-[24px] flex flex-wrap items-center gap-x-[16px] gap-y-[10px] text-[14px] font-normal leading-[140%] text-[#244563]">
            <li className="flex items-center gap-x-[10px] rounded-[8px] bg-white px-[10px] py-[12px]">
              <span className="inline-block h-[15px] w-[15px] rounded-full bg-[#AB9475]"></span>
              Пункт отправления
            </li>
            <li className="flex items-center gap-x-[10px] rounded-[8px] bg-white px-[10px] py-[12px]">
              <span className="inline-block h-[15px] w-[15px] rounded-full bg-[#009DE2]"></span>
              Текущее местоположение
            </li>
            <li className="flex items-center gap-x-[10px] rounded-[8px] bg-white px-[10px] py-[12px]">
              <span className="inline-block h-[15px] w-[15px] rounded-full bg-[#244563]"></span>
              Пункт назначения
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
