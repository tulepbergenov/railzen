import { LangPicker } from "@/components";
import { useAppTitle } from "@/shared/hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { t } = useTranslation();

  useAppTitle();

  return (
    <section>
      <div className="container">
        <div>
          <header>
            <LangPicker />
            <Link to={"/about"}>About</Link>
            <h1>{t("home")}</h1>
          </header>
        </div>
      </div>
    </section>
  );
};
