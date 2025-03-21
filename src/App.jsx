import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("./pages/Homepage"));
const Services = lazy(() => import("./pages/Services"));
const Solar = lazy(() => import("./pages/solar-installation/Solar"));
const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const Access = lazy(() => import("./pages/access-control/Access"));
const Contact = lazy(() => import("./pages/contact/Contact"));
import Loader from "./globalcomponents/Loader";

const OurServices = lazy(() => import("./pages/Services/OurServices"));
import Error404Page from "./pages/Error404Page";
import IctServices from "./pages/ict/IctServices";
import TechConsulting from "./pages/consulting/TechConsulting";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        }
      />
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
        path="about-us"
        element={
          <Suspense fallback={<Loader />}>
            <AboutPage />
          </Suspense>
        }
      />
      <Route
        path="contact-us"
        element={
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        }
      />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
