import { useEffect } from "react";
import Lottie from "react-lottie";
import MessengerCustomerChat from "react-messenger-customer-chat";
import * as animationData from "../../assets/lottie files/48945-launch.json";
import Particle from "../Particle_Bg/Particle";
const Landing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect((e) => {
    const docStyle = document.documentElement.style;
    const aElem = document.getElementById("new-style");
    const boundingClientRect = aElem.getBoundingClientRect();

    aElem.onmousemove = function (e) {
      const x = e.clientX - boundingClientRect.left;
      const y = e.clientY - boundingClientRect.top;

      const xc = boundingClientRect.width / 2;
      const yc = boundingClientRect.height / 2;

      const dx = x - xc;
      const dy = y - yc;

      docStyle.setProperty("--rx", `${dy / -1}deg`);
      docStyle.setProperty("--ry", `${dx / 10}deg`);
    };

    aElem.onmouseleave = function (e) {
      docStyle.setProperty("--ty", "0");
      docStyle.setProperty("--rx", "0");
      docStyle.setProperty("--ry", "0");
    };

    aElem.onmousedown = function (e) {
      docStyle.setProperty("--tz", "-25px");
    };

    document.body.onmouseup = function (e) {
      docStyle.setProperty("--tz", "-12px");
    };
  }, []);

  return (
    <div className="hero">
      <Particle></Particle>
      <div className="hero__content">
        <div>
          <h2>
            Grow your business with{" "}
            <span
              className="animate-charcter"
              style={{
                color: "#fff",
                padding: "10px",
                fontWeight: "300",
                fontSize: "148px",
              }}
            >
              SKYLINK CREATIVE
            </span>{" "}
          </h2>
          <p style={{ marginLeft: "12px" }}>
            It's time to take your business global. Marketing is not one size
            fits all and the world of digital marketing has evolved drastically
            in recent years, but it seems like every small-to-medium sized
            company is doing their own thing. That's where we come in.
          </p>
          <button>
            <a
              id="new-style"
              href="https://www.facebook.com/skylinkcreative"
              data-title="Hire Us"
            ></a>
            {/* <a href="https://www.facebook.com/skylinkcreative">Hire Us</a> */}
          </button>
        </div>
        <div className="lottie__file">
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </div>

      <MessengerCustomerChat
        pageId="100508642002118"
        appId="1404533659925082"
      />
    </div>
  );
};

export default Landing;
