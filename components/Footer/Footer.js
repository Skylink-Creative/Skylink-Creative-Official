import React from "react";
import Head from "next/head";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineMail,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhoneAlt, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <Head>
        <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
      </Head>
      <div className="footer_item">
        <h2>About us</h2>
        <p>
          SkyLink creative success is attributed to the collective performance
          of its team. Effective, open communication in our workplace keeps us
          focused and driven towards providing you with an outstanding service.
        </p>
        <ul className="footer_list">
          <li>
            {" "}
            <a href="https://www.facebook.com/skylinkcreative">
              <AiFillFacebook size={25} />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://twitter.com/creativeskylink?fbclid=IwAR2X_72MzQKKZnKUjOwyWNdp9sWwduXOn4zUlAHMRLyG6vcgd12UQiQxTMc">
              {" "}
              <AiFillTwitterSquare size={25} />
            </a>{" "}
          </li>
          <li>Copyright © skylink creative 2022</li>
        </ul>
      </div>
      <div className="footer_item">
        <h2>Quick Links</h2>

        <div className="footer_link">
          <div className="footer_link_items">
            <p>Services</p>
            <p>Portfolio</p>
            <p>Terms & condition</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>

      <div className="footer_item">
        <h2>Contact Info</h2>
        <ul className="footer_info">
          <li>
            <p>
              {/* <FaMapMarkerAlt size={20} /> */}
              <lord-icon
                src="https://cdn.lordicon.com/zzcjjxew.json"
                trigger="loop"
                colors="primary:#286dec,secondary:#7166ee"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
              Sylhet 3100, Bangladesh
            </p>
          </li>

          {/* <li>
            <p>
              {" "}
              <FaPhoneAlt size={20} /> Cell No:+14465676676
            </p>
          </li> */}

          <li>
            <p>
              <AiOutlineMail size={20} color="#286dec" />{" "}
              contact@skylinkcreative.com
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
