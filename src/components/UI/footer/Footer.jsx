import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../logo/Logo";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-midnight text-white py-12 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 px-5">
        <div className="footer-section col-span-2">
          <Logo />
          <p className="mt-8">
            Bringing the best coffee experience since 1895. <br /> Visit us at
            one of our locations or browse our online store for premium
            products.
          </p>
        </div>

        <div className="footer-section ml-6">
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <nav className="flex flex-col gap-1 text-lg">
            <NavLink
              to="/"
              className="mb-2 transition-colors duration-300 hover:text-gold"
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className="mb-2 transition-colors duration-300 hover:text-gold"
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              className="mb-2 transition-colors duration-300 hover:text-gold"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contacts"
              className="mb-2 transition-colors duration-300 hover:text-gold"
            >
              Contacts
            </NavLink>
          </nav>
        </div>

        <div className="footer-section">
          <h3 className="text-xl  font-semibold mb-6">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              className="text-white hover:text-gold transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-white hover:text-gold transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com/"
              className="text-white hover:text-gold transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-white hover:text-gold transition duration-300"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
