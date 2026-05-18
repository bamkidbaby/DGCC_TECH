import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Repairs from "./pages/Repairs";
import OnlineRegistrations from "./pages/OnlineRegistrations";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import SubPage from "./pages/SubPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<SubPage category="services" />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:slug" element={<SubPage category="training" />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/online-registration" element={<OnlineRegistrations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
