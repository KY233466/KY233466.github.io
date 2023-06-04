import Navbar from "./components/NavBar/Navbar"
import Design from "./pages/Design"
import About from "./pages/About"
import Resume from "./pages/Resume";
import Footer from "./components/Footer/Footer";
import Jarney from "./pages/DesignProjects/Jarney";
import JarneyCode from "./pages/FrontendProjects/Jarney";
import FIFO from "./pages/FrontendProjects/FIFO";
import ZOOX from "./pages/DesignProjects/ZOOX"
import Hobbees from "./pages/DesignProjects/Hobbees";
import WhatColor from "./pages/DesignProjects/WhatColor";
import ActivityStatus from "./pages/DesignProjects/ActivityStatus";
import { Route, Routes } from "react-router-dom"
import ScroolToTop from "./pages/ScroolToTop"

function App() {
  return (
    <>
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
          <Route path="/FIFO" element={<FIFO />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App