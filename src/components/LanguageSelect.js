import { useContext } from "react";
import LocaleContext from "./LocaleContext";
import i18n from "../i18n";

export default function LanguageSelect({newStyle}) {
  const { locale } = useContext(LocaleContext);
  const isEnglish = (locale || "").startsWith("en");

  const changeSelect = (choice) => {
    // Persist choice so it is remembered on reload
    try {
      localStorage.setItem("i18nextLng", choice);
    } catch (e) {
      // ignore when localStorage is unavailable (SSR / privacy mode)
    }

    // Tell i18next to switch language if it changed
    if (locale !== choice) {
      i18n.changeLanguage(choice);
    }
  };

  return (
    <div
      title="Language Setting"
      style={{
        padding: "8px",
        position: "absolute",
        right: "30px",
        top: "30px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#484A52",
        borderRadius: "30px",
        alignItems: "center",
        border: "none",
        cursor: "initial",
        ...newStyle,
      }}
    >
      <button
        onClick={(e) => changeSelect("en")}
        style={{
          margin: "0px 5px 0px 5px",
          padding: "8px 15px",
          borderRadius: "18px",
          border: "none",
          color: "white",
          cursor: "pointer",
          ...(isEnglish
            ? { backgroundColor: "#A88FD0", color: "black" }
            : { backgroundColor: "transparent", color: "white" }),
        }}
      >
        English
      </button>
      <button
        onClick={(e) => changeSelect("cn")}
        style={{
          margin: "0px 5px 0px 5px",
          padding: "8px 15px",
          borderRadius: "18px",
          border: "none",
          color: "white",
          cursor: "pointer",
          ...(!isEnglish
            ? { backgroundColor: "#A88FD0", color: "black" }
            : { backgroundColor: "transparent", color: "white" }),
        }}
      >
        中文
      </button>
    </div>
  );
}
