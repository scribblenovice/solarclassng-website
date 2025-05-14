import "./App.css";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./globalcomponents/Loader";
import ScrollToTop from "./globalcomponents/ScrollToTop";
import WhatsappBtn from "./globalcomponents/WhatsappBtn";
import BackToTopButton from "./globalcomponents/BackToTop";
import { lazyWithDelay } from "./globalcomponents/LazyWithDelay";

const HomePage = lazyWithDelay(() => import("./pages/Homepage"));
const Solar = lazyWithDelay(() => import("./pages/solar-installation/Solar"));
const Access = lazyWithDelay(() => import("./pages/access-control/Access"));
const Contact = lazyWithDelay(() => import("./pages/contact/Contact"));
const OurServices = lazyWithDelay(() => import("./pages/Services/OurServices"));
const Error404Page = lazyWithDelay(() => import("./pages/Error404Page"));
const IctServices = lazyWithDelay(() => import("./pages/ict/IctServices"));
const TechConsulting = lazyWithDelay(() => import("./pages/consulting/TechConsulting"));
const PowerAudit = lazyWithDelay(() => import("./pages/PowerAudit"));
const GalleryPage = lazyWithDelay(() => import("./pages/gallery/GalleryPage"));

function App() {
  return (
    <>
      <WhatsappBtn />
      <BackToTopButton />
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="services">
            <Route index element={<OurServices />} />
            <Route path="solar-installation" element={<Solar />} />
            <Route path="ict-solutions" element={<IctServices />} />
            <Route path="cctv-and-access-control" element={<Access />} />
            <Route path="tech-consulting" element={<TechConsulting />} />
          </Route>
          <Route path="contact-us" element={<Contact />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="power-audit" element={<PowerAudit />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
