"use client";

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
        padding: "4px",
        position: "absolute",
        right: "30px",
        top: "30px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "var(--surface-raised)",
        borderRadius: "999px",
        alignItems: "center",
        border: "1px solid var(--card-border)",
        cursor: "initial",
        boxShadow: "0 15px 35px rgba(15, 23, 52, 0.25)",
        backdropFilter: "blur(12px)",
        ...newStyle,
      }}
    >
      <button
        onClick={(e) => changeSelect("en")}
        style={{
          margin: "0px 3px",
          padding: "10px 18px",
          borderRadius: "999px",
          border: "none",
          fontFamily: ""Space Grotesk", "Inter", sans-serif",
          fontSize: "0.85rem",
          fontWeight: 600,
          cursor: "pointer",
          ...(isEnglish
            ? {
                backgroundColor: "var(--accent)",
                color: "#fff",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
              }
            : {
                backgroundColor: "transparent",
                color: "var(--muted-ink)",
              }),
        }}
      >
        English
      </button>
      <button
        onClick={(e) => changeSelect("cn")}
        style={{
          margin: "0px 3px",
          padding: "10px 18px",
          borderRadius: "999px",
          border: "none",
          fontFamily: ""Space Grotesk", "Inter", sans-serif",
          fontSize: "0.85rem",
          fontWeight: 600,
          cursor: "pointer",
          ...(!isEnglish
            ? {
                backgroundColor: "var(--accent)",
                color: "#fff",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
              }
            : {
                backgroundColor: "transparent",
                color: "var(--muted-ink)",
              }),
        }}
      >
        中文
      </button>
    </div>
  );
}
