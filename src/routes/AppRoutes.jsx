import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import CategoryPage from "../pages/categoryPage/CategoryPage";
import Register from "../pages/register/Register";
import MainLayout from "../layouts/MainLayout";
import RegisterLayout from "../layouts/RegisterLayout";
import LogIn from "../pages/login/LogIn";
import OrdersHistory from "../pages/ordersHistory/OrdersHistory";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<RegisterLayout />}>
        <Route path="/auth/login" element={<LogIn />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu/:category" element={<CategoryPage />} />
        <Route path="orders" element={<OrdersHistory />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
