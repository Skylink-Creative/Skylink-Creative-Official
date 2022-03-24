import React from "react";
import Image from "next/image";
import easybank from "../../assets/images/easybank.png";
import mentex from "../../assets/images/mentex.png";
import tuition from "../../assets/images/tuition.png";
const OurWorks = () => {
  return (
    <section className="ourWorks" id="works">
      <div>
        <div>
          <p>Featured Projects</p>
          <p>Our works</p>
        </div>
        <div>
          <a href="https://mozumdertushar.github.io/easybank-landing-page/index.html">
            <div>
              <Image src={easybank} alt="" />
              <div>
                <small>Web Design</small>
                <p>Easy Bank</p>
              </div>
            </div>
          </a>
          <a href="https://mentex-5b2ed.web.app/">
            <div>
              <Image src={mentex} alt="" height="100%" />
              <div>
                <small>Full Stack Web App</small>
                <p>Mentex</p>
              </div>
            </div>
          </a>
          <a href="https://tuition-fixer-e027b.web.app/">
            <div>
              <Image src={tuition} alt="" />
              <div>
                <small>Full Stack Web App</small>
                <p>Tuition Fixer</p>
              </div>
            </div>
          </a>
        </div>

        <button>View More</button>
      </div>
    </section>
  );
};

export default OurWorks;
