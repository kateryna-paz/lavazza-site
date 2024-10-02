import Button from "../button/Button";
import Navbar from "../navbar/Navbar";
import Logo from "../../logo/Logo";

function Header() {
  return (
    <header className="fixed w-full flex flex-row items-center justify-between py-4 px-12 bg-midnight z-[100]">
      <Logo />
      <Navbar />
      <Button>Log In</Button>
    </header>
  );
}

export default Header;
