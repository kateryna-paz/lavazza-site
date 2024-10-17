import { Outlet } from "react-router-dom";
import Header from "../components/UI/header/Header.jsx";
import Footer from "../components/UI/footer/Footer.jsx";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
