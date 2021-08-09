import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/lottie files/21699-3d-box-rotation.json";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const Services = () => {
    const [active, setActive] = useState(0);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="services">
            <h2>Services</h2>
            <div className="services__for__big__screen">
                <div className="services__left">
                    {services.map((service, index) => (
                        <div
                            className={
                                index === active
                                    ? "services__left__card active"
                                    : "services__left__card"
                            }
                            onClick={() => setActive(index)}
                        >
                            {service.name}
                        </div>
                    ))}
                </div>
                <div className="services__right">
                    <div className="services__right__lang">
                        {services[active].languages.map((lang) => (
                            <span>{lang}</span>
                        ))}
                    </div>
                    <div className="services__right__catg">
                        {services[active].category.map((catg) => (
                            <p>
                                <ArrowForwardIcon></ArrowForwardIcon> {catg}
                            </p>
                        ))}
                    </div>
                    <button>Read More</button>
                </div>
            </div>
            <div className="box__shape__anim">
                <Lottie options={defaultOptions} width={350} />
            </div>
        </div>
    );
};

export default Services;

const services = [
    {
        id: 1,
        name: "Web development Services",
        category: [
            "Website development",
            "Business Website",
            "Startup Website",
            "Landing & promo sites",
            "E-commerce",
            "Wordpress development",
        ],
        languages: [
            "Javascript",
            "HTML5",
            "CSS3",
            "jQuery",
            "React Js",
            "Node Js",
            "mongoDB",
            "MySQL",
        ],
    },
    {
        id: 2,
        name: "Design Services",
        category: [
            "Website design",
            "UX, UI design",
            "Mobile App Design",
            "Logo Design",
        ],
        languages: ["Photoshop", "Figma", "Illustrator", "Adobe XD"],
    },
    {
        id: 3,
        name: "SEO Services",
        category: [
            "Tech SEO",
            "On-page SEO",
            "Off-page SEO",
            "SEO copywriting",
        ],
        languages: ["Google Analytics", "Webmaster tools"],
    },
    {
        id: 4,
        name: "Content Writing",
        category: [
            "Tech SEO",
            "On-page SEO",
            "Off-page SEO",
            "SEO copywriting",
        ],
        languages: ["Google Analytics", "Webmaster tools"],
    },
];
