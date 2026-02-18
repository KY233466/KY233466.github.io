"use client";

import { Suspense, useEffect, useState } from "react";
import i18n from "../i18n";
import LocaleContext from "../components/LocaleContext";
import Loading from "../components/Loading";
import RouteScroll from "./route-scroll";

export default function ClientProviders({ children }) {
  const [locale, setLocale] = useState(i18n.language);

  useEffect(() => {
    const handler = () => setLocale(i18n.language);
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <RouteScroll />
        {children}
      </Suspense>
    </LocaleContext.Provider>
  );
}
