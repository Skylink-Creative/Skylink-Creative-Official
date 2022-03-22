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
          <Link href="/">Home</Link>
          <span>
            <p>
              Services <ExpandMoreIcon></ExpandMoreIcon>
            </p>
            <ul>
              <li>
                <Link href="/services/web-development/">
                  Custom Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress/">WordPress Website</Link>
              </li>
              <li>
                <Link href="/services/ui-ux/">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/services/affiliate-marketing/">
                  Affiliate Website
                </Link>
              </li>
              <li>
                <Link href="/services/seo/">
                  Search Engine Optimization (SEO)
                </Link>
              </li>
              <li>
                <Link href="/services/content/">Content Writing</Link>
              </li>
            </ul>
          </span>
          <a href="/#works">Our Works</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
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
