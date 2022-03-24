import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Landing from "../components/Landing/Landing";
import OurWorks from "../components/OurWorks/OurWorks";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SkyLink Creative | Web development Agency</title>
        <meta
          name="description"
          content="SkyLink creative success is attributed to the collective performance
          of its team. Effective, open communication in our workplace keeps us
          focused and driven towards providing you with an outstanding service."
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
      </Head>

      <main>
        <CustomCursor
          targets={[".nav__right", ".nav__left"]}
          customClass="custom-cursor"
          dimensions={90}
          fill="#FFF"
          smoothness={{
            movement: 0.2,
            scale: 0.1,
            opacity: 0.2,
          }}
          targetOpacity={0.4}
        />
        <Landing></Landing>
        <Services></Services>
        <About></About>
        <OurWorks></OurWorks>
        {/* <Team></Team> */}
        <Contact></Contact>
      </main>
    </div>
  );
}
