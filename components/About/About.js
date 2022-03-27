import React from "react";
import Image from "next/image";
import logo from "../../assets/images/about-icon-1.png";
import ReactCardFlipper from "react-card-flipper";
import gif from "../../assets/lottie files/69983-team-work.gif";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about__left">
          <p>ABOUT US</p>
          <p>We’r a dynamic team of creatives people innovation & Marketing</p>
          <p>
            Skylink creative is a full-fledged digital business solution agency
            to revolutionize your thoughts into realism. We provide web
            development, WordPress website, UI/UX design, SEO, article writing,
            web design, WordPress speed optimization, CRO service.
          </p>
          <Link href="https://www.facebook.com/skylinkcreative">
            Learn More
          </Link>
        </div>
        <div className="about__right">
          <Image src={gif} alt="About us" />
        </div>
      </div>
    </>
  );
};

export default About;
