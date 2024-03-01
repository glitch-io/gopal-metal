import About from "../Components/About/About";
import Experience from "../Components/Experience";
import HowWeAre from "../Components/HowWeAre";
import Product from "../Components/OurProducts/Product";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";
import UncontrolledExample from "../Components/Slider/Carousel";
import ThirdParty from "../Components/ThirdParty";

function Home() {
  return (
    <>
      <UncontrolledExample />
      <Product />
      <About />
      <HowWeAre />
      <ThirdParty />
      <Skills />
      <Experience /> <Services />
    </>
  );
}

export default Home;
