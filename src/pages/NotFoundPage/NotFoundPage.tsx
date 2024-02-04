import { KZMapAnimation } from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { TriangleIcon } from "@/shared/icons";
import { Heading } from "@/shared/ui-kit";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  useAppTitle("Страница не найдена");

  return (
    <section className="mb-[60px] mt-[100px] overflow-hidden lg:mb-[200px] lg:mt-[170px]">
      <div className="container">
        <div>
          <header className="flex flex-col items-center">
            <KZMapAnimation className="h-[500px] w-[550px] scale-[0.9] sm:scale-100" />
            <Heading className="mt-[20px]">Произошла ошибка</Heading>
            <Link
              className="mt-[10px] grid grid-cols-[8px_1fr] items-center gap-x-[6px] rounded-[57.6px] bg-[#244563] px-[10px] py-[2px] text-white transition-opacity duration-300 ease-in-out active:opacity-50 md:hover:opacity-50"
              to={"/"}
            >
              <TriangleIcon className="h-auto w-full" />
              <span>Вернуться на главную</span>
            </Link>
          </header>
        </div>
      </div>
    </section>
  );
};
