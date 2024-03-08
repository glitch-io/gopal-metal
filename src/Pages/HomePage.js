import About from "../Components/OurProducts/About/About";
import Experience from "../Components/Experience";
import WhoWeAre from "../Components/WhoWeAre";
import Product from "../Components/OurProducts/Product";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";
import Slider from "../Components/Slider/Carousel";
import ThirdParty from "../Components/ThirdParty";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Nepco Impex LLP</title>
        <meta
          name="description"
          content="Nepco Impex LLP is one of the leading company amongst the manufacturers and exporters of high quality flanges,Pipes and Pipe Fittings, Buttweld, ..."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Slider />
      <Product />
      <About />
      <WhoWeAre />
      <ThirdParty />
      <Skills />
      <Experience /> <Services />
    </>
  );
}

export default Home;
