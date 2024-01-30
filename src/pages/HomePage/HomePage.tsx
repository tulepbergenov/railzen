import { useAppTitle } from "@/shared/hooks";
import { Link } from "react-router-dom";

export const HomePage = () => {
  useAppTitle();

  return (
    <section>
      <div className="container">
        <div>
          <header>
            <Link to={"/about"}>About</Link>
            <h1>KTZ Express</h1>
          </header>
        </div>
      </div>
    </section>
  );
};
