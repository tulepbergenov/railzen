import { useAppTitle } from "@/shared/hooks";
import { useApplyModalStore } from "@/shared/stores";
import { Link } from "react-router-dom";

export const HomePage = () => {
  useAppTitle();

  const { onOpen } = useApplyModalStore();

  return (
    <section>
      <div className="container">
        <div>
          <header>
            <Link to={"/about"}>About</Link>
            <h1>KTZ Express</h1>
            <button type="button" onClick={onOpen}>
              Оставить заявку
            </button>
          </header>
        </div>
      </div>
    </section>
  );
};
