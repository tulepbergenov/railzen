import { Heading } from "@/shared/ui-kit";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IEmployeesSlider } from "./EmployeesSlider.type";

export const EmployeesSlider = ({
  heading,
  employees = [],
  className,
  ...props
}: IEmployeesSlider) => {
  if (!employees || employees.length === 0 || !Array.isArray(employees)) {
    return null;
  }

  return (
    <section className={classNames("overflow-hidden", className)} {...props}>
      <div className="container">
        <div>
          <Heading as="h2">{heading}</Heading>
          <hr className="my-[20px] border-[#244563]" />
          <div className="relative min-h-[400px] sm:min-h-[600px]">
            <div className="absolute left-0 top-0 h-full w-screen">
              <Swiper
                breakpoints={{
                  480: {
                    spaceBetween: "48",
                  },
                }}
                className="pr-[200px_!important]"
                modules={[Mousewheel]}
                mousewheel={true}
                slidesPerView={"auto"}
                spaceBetween={20}
              >
                {employees.map((item, i) => (
                  <SwiperSlide
                    className="h-full w-[256px_!important] sm:w-[435px_!important]"
                    key={i}
                  >
                    <article className="group relative flex h-full flex-col gap-y-[16px]">
                      <div className="h-[300px] overflow-hidden bg-slate-200 sm:h-[500px]">
                        <img
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                          height={505}
                          src={`/imgs/about/${item.cover ? item.cover : "empty-cover.jpg"}`}
                          width={435}
                        />
                      </div>
                      <p className="font-semibold">{item.position}</p>
                      <h3 className="text-[14px] leading-[140%] text-[#6D6E73]">
                        {item.name}
                      </h3>
                      <div className="absolute left-0 top-0 h-full w-full px-[5px]">
                        <Link
                          className="inline-block h-full w-full text-[0] leading-[0]"
                          to={`/about/${item.alias}`}
                        >
                          {" "}
                          {item.name}
                        </Link>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
