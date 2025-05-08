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
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
        </Route>
        <Route path="services">
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <OurServices />
              </Suspense>
            }
          />
          <Route
            path="solar-installation"
            element={
              <Suspense fallback={<Loader />}>
                <Solar />
              </Suspense>
            }
          />
          <Route
            path="ict-solutions"
            element={
              <Suspense fallback={<Loader />}>
                <IctServices />
              </Suspense>
            }
          />
          <Route
            path="cctv-and-access-control"
            element={
              <Suspense fallback={<Loader />}>
                <Access />
              </Suspense>
            }
          />
          <Route
            path="tech-consulting"
            element={
              <Suspense fallback={<Loader />}>
                <TechConsulting />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="contact-us"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="gallery"
          element={
            <Suspense fallback={<Loader />}>
              <GalleryPage />
            </Suspense>
          }
        />
        <Route
          path="power-audit"
          element={
            <Suspense fallback={<Loader />}>
              <PowerAudit />
            </Suspense>
          }
        />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );
}

export default App;
