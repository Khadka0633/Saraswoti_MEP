import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout   from "./components/Layout.jsx";
import Home     from "./pages/Home.jsx";
import About    from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Contact  from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All pages share the same Navbar + Footer via Layout */}
        <Route element={<Layout />}>
          <Route index        element={<Home />}     />
          <Route path="about"    element={<About />}    />
          <Route path="services" element={<Services />} />
          {/* Individual service sub-routes all render the Services page for now */}
          <Route path="services/:slug" element={<Services />} />
          <Route path="sectors"  element={<Home />}    />
          <Route path="projects" element={<Projects />} />
          <Route path="contact"  element={<Contact />} />
        </Route>

        {/* 404 - no Layout so it fills the whole screen */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
