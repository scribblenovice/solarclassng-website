import "./App.css";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./globalcomponents/Loader";
import ScrollToTop from "./globalcomponents/ScrollToTop";
import WhatsappBtn from "./globalcomponents/WhatsappBtn";
import BackToTopButton from "./globalcomponents/BackToTop";

const HomePage = lazy(() => import("./pages/Homepage"));
const Solar = lazy(() => import("./pages/solar-installation/Solar"));
const Access = lazy(() => import("./pages/access-control/Access"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const OurServices = lazy(() => import("./pages/Services/OurServices"));
const Error404Page = lazy(() => import("./pages/Error404Page"));
const IctServices = lazy(() => import("./pages/ict/IctServices"));
const TechConsulting = lazy(() => import("./pages/consulting/TechConsulting"));
const PowerAudit = lazy(() => import("./pages/PowerAudit"));
const GalleryPage = lazy(() => import("./pages/gallery/GalleryPage"));

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
