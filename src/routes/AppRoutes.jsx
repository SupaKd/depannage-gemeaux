// AppRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Mentions from "../pages/Mentions";
import Contact from "../pages/Contact";
import Apropos from "../pages/Apropos";
function AppRoutes() {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
  );
}

export default AppRoutes;
