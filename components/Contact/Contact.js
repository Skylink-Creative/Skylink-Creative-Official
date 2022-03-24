import React, { useState } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // e.target.reset()
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__left">
        <div>
          <p>CONTACT</p>
          <p>contact@skylinkcreative.com</p>
        </div>
        <div>
          <p>FOLLOW</p>
          <div>
            <a href="">
              <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </a>
            <a href="">
              <TwitterIcon></TwitterIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="contact__right">
        <div className="contact__right__top">
          <p>HIRE US</p>
          <p>Let’s talk!</p>
        </div>
        <div className="contact__right__form">
          <form
            action="https://formsubmit.co/contact@skylinkcreative.com"
            method="POST"
          >
            <div>
              <label htmlFor="">Name & Company</label>
              <input type="text" placeholder="John From google.." name="name" />
            </div>
            <input
              type="hidden"
              name="_next"
              value="https://www.skylinkcreative.com/"
              required
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks For Showing Interest On Us. We will Contact to you soon"
            />
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="john@google.com"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="">Project Description</label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                placeholder="We Need help to redesign our..."
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
