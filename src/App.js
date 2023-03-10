import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Apply from "./components/Apply";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ResearchProgram from "./components/ResearchProgram";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/cugr" element={<Home />} />
          <Route path="/researchProgram" element={<ResearchProgram />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;
