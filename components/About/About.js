import React from "react";
import Image from "next/image";
import logo from "../../assets/images/about-icon-1.png";
import ReactCardFlipper from "react-card-flipper";
import gif from "../../assets/lottie files/69983-team-work.gif";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about__left">
          <p>ABOUT US</p>
          <p>We’r a dynamic team of creatives people innovation & Marketing</p>
          <p>
            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion many
            consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm is
            that ipsum that dolocons rsus mal suada and fadolorit to consectetur
            our is dummy text more text elit.Grursus mal suada faci ipsum to and
            the and ametion consectetur more bulum that odio.Grursus mal suada
            faci the ipsum to and the and dolarorit ametion consectetur elitto
            more bulum that dummy text here now at odio...
          </p>
          <button>Learn More</button>
        </div>
        <div className="about__right">
          <Image src={gif} alt="About us" />
        </div>
      </div>
    </>
  );
};

export default About;
