import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageTransition from "@/components/global/PageTransition";
import Home from "@/components/shared/Home";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Expertise from "./components/shared/Expertise";
import PageLayout from "./components/global/PageLayout";
import Solutions from "./components/shared/Solutions";
import SolutionDetails from "./components/shared/SolutionPage";
import NotFound from "./components/shared/NotFound";
import Home2 from "./components/shared/Home2";
import Home3 from "./components/shared/Home3";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages */}
        <Route element={<PageTransition />}>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home-2" element={<Home2 />} />
            <Route path="/home-3" element={<Home3 />} />

            <Route path="/expertise" element={<Expertise />} />

            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries">
              <Route index />
              <Route path=":slug" element={<SolutionDetails />} />
            </Route>

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>

        {/* 404 */}

        <Route element={<PageLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;