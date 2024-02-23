import Product from "../Components/OurProducts/Product";
import PageFooter from "../Components/PageFooter";
import PageNav from "../Components/PageNav";
import UncontrolledExample from "../Components/Slider/Carousel";

function Home() {
  return (
    <>
      <PageNav />
      <UncontrolledExample />
      <Product />
      <PageFooter />
    </>
  );
}

export default Home;
