import { useState } from "react";
import Lottie from "react-lottie";

import Link from "next/link";

import AssessmentIcon from "@mui/icons-material/Assessment";

import WebIcon from "@mui/icons-material/Web";
import CreateIcon from "@mui/icons-material/Create";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="services" id="services">
      <div>
        <div className="services__top">
          <p>What we can do</p>
          <p>Services We Can Help You</p>
        </div>
        <div className="services__content">
          <div>
            <WebIcon></WebIcon>
            <h4>Website Development</h4>
            <p>
              Develop responsive E-commerce/Local business website that will be
              the perfect balance of function and design.
            </p>
          </div>
          <div>
            <WebAssetIcon></WebAssetIcon>
            <h4>Website Design</h4>
            <p>
              EUser-friendly website interface that will boost your brand
              reputation and tell your story with memorable visuals.
            </p>
          </div>
          <div>
            <AssessmentIcon></AssessmentIcon>
            <h4>Search Engine Optimization</h4>
            <p>
              Get your site on the top of Google search engine results page with
              White Hat SEO done by our specialist with proven track record and
              experience.
            </p>
          </div>
          <div>
            <CreateIcon></CreateIcon>
            <h4>Content Creation</h4>
            <p>
              Assist you in publishing pieces for all the different platforms
              and formats. Providing a narrative that the audience will want to
              read.
            </p>
          </div>
          <div>
            <SettingsIcon></SettingsIcon>
            <h4>Maintenance</h4>
            <p>
              Increased traffic to your website is meaningless if the users
              visiting your site are not engaging with your site in a meaningful
              way. We help you track the SEO ROI that maps directly to your
              business.
            </p>
          </div>
          <div>
            <StorageIcon></StorageIcon>
            <h4>Hosting</h4>
            <p>
              Increased traffic to your website is meaningless if the users
              visiting your site are not engaging with your site in a meaningful
              way. We help you track the SEO ROI that maps directly to your
              business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
