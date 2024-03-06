import React from "react";
import Banner from "../Components/Banner";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - Nepco Impex LLP</title>
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <Banner title={"Contact"} />
    </>
  );
}

export default Contact;
