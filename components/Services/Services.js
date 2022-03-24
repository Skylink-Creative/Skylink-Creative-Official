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
              From link building and keyword research, to page optimization and
              technical SEO, to competitor analysis and more, we're experts at
              providing search engine optimization customized to your business
              goals.
            </p>
          </div>
          <div>
            <WebAssetIcon></WebAssetIcon>
            <h4>Website Design</h4>
            <p>
              Every business is different, so we listen to your marketing goals
              to drive the strategy behind your custom SEO campaign. Then, we
              directly measure our success based on those goals.
            </p>
          </div>
          <div>
            <AssessmentIcon></AssessmentIcon>
            <h4>Seo</h4>
            <p>
              Increased traffic to your website is meaningless if the users
              visiting your site are not engaging with your site in a meaningful
              way. We help you track the SEO ROI that maps directly to your
              business.
            </p>
          </div>
          <div>
            <CreateIcon></CreateIcon>
            <h4>Content Writing</h4>
            <p>
              Increased traffic to your website is meaningless if the users
              visiting your site are not engaging with your site in a meaningful
              way. We help you track the SEO ROI that maps directly to your
              business.
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
