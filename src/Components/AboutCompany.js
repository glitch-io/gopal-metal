import React from "react";
import styles from "./AboutCompany.module.css";
function AboutCompany() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className={styles.aboutCompany}>
      <div className={styles.imgDiv}>
        <img src={path + "/Imgs/main.jpg"} alt="about" />
        <img src={path + "/Imgs/about2.jpg"} alt="about-2" />
        <img src={path + "/Imgs/about3.jpg"} alt="about-3" />
      </div>
      <div className={styles.textDiv}>
        <h3>ABOUT OUR COMPANY</h3>
        <h1>Welcome to Nepco Impex LLP</h1>
        <div className={styles.text}>
          <p>
            Nepco Impex LLP is one of the leading company amongst the{" "}
            <strong>
              manufacturers and exporters of high quality flanges,Pipes and Pipe
              Fittings, Buttweld, Fasteners & sheets in Alloy steel, carbon
              steel, stainless steel, nickel alloys etc.
            </strong>
            Through regular and consistent supply of our products at industry
            leading prices, we have established ourselves a reliable player in
            the industry. We have the capability and expertise to design these
            products in different metal alloys and in a variety of
            specifications to fulfill the various requirements of our clients.
            Evolving ourselves with time, we have secured a special place for
            ourselves within the industry as well as among our clients in the
            domestic as well as international markets.
            <br />
            <br /> We would like to establish business relations with reputed
            concern like yours. We assure you that you will certainly find our
            products quality and rate most competitive at right time with
            excellent services. Your satisfaction is the award for our good
            quality and service. Our company has responded to all & every need
            of industry as one of Top and the most reputed Importers/Exporter
            Supplier & Stockist of Stainless Steel Flanges&Pipe Fittings. Our
            Competitive Prices will insure satisfaction to our customers.
            <br />
            <br /> <strong>Team of experts</strong> Our sophisticated
            manufacturing facilities are supported by a team of experienced
            technical and non-technical personnel who take care of various
            aspects of production system & overall operations. Our team plays a
            prime role in delivering quality products & services to our
            customers.
            <br />
            <br />
            <strong> Why Us</strong> <br />
            We are a renowned name in this domain engaged in providing various
            types of Stainless steel, Carbon Steel & Alloy Steel Products; we
            have gained immense client`s appreciation, Owing to our excellent
            product quality and transparent dealings. Specialties that make us a
            profitable business partner for our clients are:
            <br />
            <br />* Cost-effective rates <br /> * Customized solution <br />*
            Customized packaging <br />* Customer focused approach <br />* Easy
            payment modes <br /> * Good Financial Position & TQM <br /> *
            Superior quality products <br />* Timely delivery schedule <br /> *
            Timely delivery of products <br /> * Experience and specialty in
            work
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
