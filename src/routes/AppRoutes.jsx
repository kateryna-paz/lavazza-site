import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import CategoryPage from "../pages/categoryPage/CategoryPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/menu/:category" element={<CategoryPage />} />
    </Routes>
  );
}

export default AppRoutes;
