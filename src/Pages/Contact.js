import React from "react";
import Banner from "../Components/Banner";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Nepco Impex LLP</title>
        <meta
          name="description"
          content="Nepco Impex LLP is one of the leading company amongst the manufacturers and exporters of high quality flanges,Pipes and Pipe Fittings, Buttweld, ..."
        />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <Banner title={"Contact"} />
    </>
  );
}

export default Contact;
