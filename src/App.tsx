import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageTransition from "@/components/global/PageTransition";
import Home from "@/components/shared/Home";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Expertise from "./components/shared/Expertise";
import PageLayout from "./components/global/PageLayout";
import Solutions from "./components/shared/Solutions";
import SolutionDetails from "./components/shared/SolutionPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages */}
        <Route element={<PageTransition />}>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="/expertise" element={<Expertise />} />

              <Route path="/solutions">
                <Route index element={<Solutions />} />
                <Route path=":slug" element={<SolutionDetails />} />
              </Route>

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="font-display text-4xl">
                404
              </h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;