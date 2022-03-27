import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import blue_logo from "../../assets/images/blue_logo.svg";
import white_logo from "../../assets/images/white_logo.svg";
const Nav = () => {
  const [top, setTop] = useState(true);
  const hamburgerRef = useRef();
  const navLinkRef = useRef();
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", (event) => {
      var y = window.scrollY;
      var w = window.innerWidth;
      if (y > 0 && w > 1023) {
        setTop(false);
      } else {
        setTop(true);
      }
    });
  }
  const handleBurger = () => {
    hamburgerRef.current.classList.toggle("animate");
    navLinkRef.current.classList.toggle("hamburger__menu__active");
  };

  const handleCloseMenu = () => {
    hamburgerRef.current.classList.remove("animate");
    navLinkRef.current.classList.remove("hamburger__menu__active");
  };

  return (
    <nav className={top ? "nav" : "nav white__bg"}>
      <div>
        <div className="nav__left">
          <Link href="/">
            {top ? (
              <Image
                src={white_logo}
                alt="SkyLink Creative"
                width={150}
                height={50}
              />
            ) : (
              <Image
                src={blue_logo}
                alt="SkyLink Creative"
                width={150}
                height={50}
              />
            )}
          </Link>
        </div>
        {/* nav menu for desktop */}
        <div className="nav__right " ref={navLinkRef}>
          <Link href="/#" onClick={handleCloseMenu}>
            Home
          </Link>
          <a href="/#services" onClick={handleCloseMenu}>
            Services
          </a>
          <a href="/#about" onClick={handleCloseMenu}>
            About
          </a>
          <a href="/#works" onClick={handleCloseMenu}>
            Works
          </a>
          <a href="/#contact" onClick={handleCloseMenu}>
            Contact
          </a>
        </div>
        {/* mobile hamburger menu */}
        <div className="menu-wrapper" onClick={handleBurger}>
          <div ref={hamburgerRef} className="hamburger-menu"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
