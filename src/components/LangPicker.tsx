import { useTranslation } from "react-i18next";

export const LangPicker = () => {
  const { i18n } = useTranslation();

  return (
    <ul className="flex items-center gap-5 py-7">
      <li className="flex">
        <button
          type="button"
          onClick={() => {
            i18n.changeLanguage("ru");
          }}
        >
          Ru
        </button>
      </li>
      <li className="flex">
        <button
          type="button"
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          En
        </button>
      </li>
      <li className="flex">
        <button
          type="button"
          onClick={() => {
            i18n.changeLanguage("kz");
          }}
        >
          Kz
        </button>
      </li>
      <li className="flex">
        <button
          type="button"
          onClick={() => {
            i18n.changeLanguage("zh");
          }}
        >
          Zh
        </button>
      </li>
    </ul>
  );
};
