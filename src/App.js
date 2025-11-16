import Navbar from "./components/NavBar/Navbar";
import Design from "./pages/Design";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Footer from "./components/Footer/Footer";
import Jarney from "./pages/DesignProjects/Jarney";
import JarneyCode from "./pages/FrontendProjects/Jarney";
import FIFO from "./pages/FrontendProjects/FIFO";
import ZOOX from "./pages/DesignProjects/ZOOX";
import ColorUnclasher from "./pages/FrontendProjects/ColorUnclasher";
import Advising from "./pages/FrontendProjects/Advising";
import Flashcard from "./pages/FrontendProjects/Flashcard";

import Hobbees from "./pages/DesignProjects/Hobbees";
import WhatColor from "./pages/DesignProjects/WhatColor";
import ActivityStatus from "./pages/DesignProjects/ActivityStatus";
import { Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";
import ScroolToTop from "./pages/ScroolToTop";
import i18n from "./i18n";
import Loading from "./components/Loading";
import LocaleContext from "./components/LocaleContext";
import Navigation from "./pages/navigation";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <ScroolToTop />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Design" element={<Design />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/Design/Jarney" element={<Jarney />} />
            <Route path="/Design/ZOOX" element={<ZOOX />} />
            <Route path="/Design/WhatColor" element={<WhatColor />} />
            {/* <Route path="/Design/Hobbees" element={<Hobbees />} /> */}
            <Route path="/Design/ActivityStatus" element={<ActivityStatus />} />
            <Route path="/Jarney" element={<JarneyCode />} />
            <Route path="/Advising" element={<Advising />} />
            <Route path="/Flashcard" element={<Flashcard />} />
            <Route path="/ColorUnclasher" element={<ColorUnclasher />} />
            <Route path="/FIFO" element={<FIFO />} />
          </Routes>
        </div>
        <Footer />
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
