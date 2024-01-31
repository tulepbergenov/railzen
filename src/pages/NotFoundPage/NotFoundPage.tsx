import { useAppTitle } from "@/shared/hooks";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  useAppTitle("Страница не найдена");

  return (
    <section className="mt-[170px]">
      <div className="container">
        <div>
          <header>
            <Link to={"/"}>Home</Link>
            <h1>Страница не найдена</h1>
          </header>
        </div>
      </div>
    </section>
  );
};
