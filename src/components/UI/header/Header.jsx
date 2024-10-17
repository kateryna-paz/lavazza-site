import Button from "../button/Button";
import Navbar from "../navbar/Navbar";
import Logo from "../../logo/Logo";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser, logoutUser } from "../../../store/features/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth/login");
  };

  const currentUser = useSelector(getCurrentUser);
  return (
    <header className="fixed w-full flex flex-row items-center justify-between py-4 px-12 bg-midnight z-[100]">
      <Logo />
      <Navbar />
      {currentUser ? (
        <Button onClick={handleLogout}>Log Out</Button>
      ) : (
        <Button onClick={() => navigate("/auth/login")}>Log In</Button>
      )}
    </header>
  );
}

export default Header;
