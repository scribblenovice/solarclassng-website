import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("./pages/Homepage"));

const Services = lazy(() => import("./pages/Services"));
const Solar = lazy(() => import("./pages/solar-installation/Solar"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Access = lazy(() => import("./pages/access-control/Access"));
import Loader from "./globalcomponents/Loader";
import AboutPage from "./pages/about/AboutPage";
import Contact from "./pages/contact/Contact";
import OurServices from "./pages/Services/OurServices";

function App() {
  return (
    <Routes>
      <Route
        index
        path="/"
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
              {/* <Services /> */}
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
              <Services />
            </Suspense>
          }
        />
      </Route>
      <Route path="about-us" element={<AboutPage/>}/>
      <Route path="contact-us" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
