import About from "../Components/About/About";
import Experience from "../Components/Experience";
import HowWeAre from "../Components/HowWeAre";
import Product from "../Components/OurProducts/Product";
import PageFooter from "../Components/PageFooter";
import PageNav from "../Components/PageNav";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";
import UncontrolledExample from "../Components/Slider/Carousel";
import ThirdParty from "../Components/ThirdParty";

function Home() {
  return (
    <>
      <PageNav />
      <UncontrolledExample />
      <Product />
      <About />
      <HowWeAre />
      <ThirdParty />
      <Skills />
      <Experience /> <Services />
      <PageFooter />
    </>
  );
}

export default Home;
