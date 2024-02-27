import React from "react";
import styles from "./Flanges.module.css";
import PageNav from "../../Components/PageNav";
import PageFooter from "../../Components/PageFooter";
import Banner from "../../Components/Banner";
import QuickLinks from "../../Components/QuickLinks";

function Flanges() {
  return (
    <>
      <PageNav />
      <Banner title={"Flanges"} />
      <div className={styles.flangesSection}>
        <QuickLinks />
        <div className={styles.flangeContent}>
          <div className={styles.flangeImg}>
            <img
              src={process.env.PUBLIC_URL + "/Imgs/product/flanges.jpg"}
              alt={"flanges.jpg"}
            />
          </div>
          <h1>Flanges</h1>
          <p>
            Our range of industrial flanges are ideal for application in diverse
            industry for high pressure and temperature applications. These
            flanges are designed with precision for easy installation. Apart
            from standard flanges, we also offer custom designed flanges to meet
            the specific application requirements of the customers. There are
            several types of steel flanges, including:
          </p>
          <h1>Weld Neck Flange:</h1>
          <p>
            This type of flange is welded to the pipe or fitting, providing a
            strong and permanent connection. It is commonly used in
            high-pressure applications and can be used for both high and low
            temperatures.
          </p>
          <h1>Slip-On Flange:</h1>
          <p>
            This type of flange slides onto the pipe or fitting and is then
            welded in place. It is a popular choice for low-pressure
            applications and can be used for both high and low temperatures.
          </p>
          <h1>Blind Flange:</h1>
          <p>
            A blind flange (also called a ‘closure plate flange’) is installed
            at the end of a piping system to terminate a pipe. It has no centre
            hole (bore), so there is no flow through the flange. A blind flange
            may be used for isolating a pipe, valve, or pressure vessel.
          </p>
          <h1>Socket Weld Flange:</h1>
          <p>
            This type of flange has a socket for the pipe to fit into, creating
            a smooth flow path. It is commonly used in high-pressure
            applications and can be used for both high and low temperatures.
          </p>
          <h1>Lap Flange:</h1>
          <p>
            Lap Joint Flanges are used with a stub end, which is welded to the
            pipe. Alloy Steel Lapped Joint Flanges are designed in a way that
            they swing over the pipe without the need to be welded.
          </p>
          <h1>Plate Flange:</h1>
          <p>
            Manufactured with procedures that are compliant with global flange
            standards, our Stainless Steel Plate Flanges are free from any
            cracks and deformities, due to which they last longer and provide an
            extended service lifespan. Our Carbon Steel Plate special
            maintenance needs,and added advantage to use them.
          </p>
          <h1>Tongue & Groove:</h1>
          <p>
            Tongue & Groove Flange, the Tongue Flange is manufactured with a
            raised ring that is machined into its face. The Groove Flange is
            produced with a matching depression machined onto its face. In order
            to have a watertight connection, it is important to match the faces
            of these flanges.
          </p>
          <h1>Ring Type Joint Flanges:</h1>
          <p>
            (RTJ) that are best-in-class. A Ring type joint flange(RTJ) is a
            machined metallic ring with a deep groove cut into its face. This
            groove rests a metal ring which gets compressed when the connecting
            bolts of the flange are tightened.
          </p>
          <h1>Orifice Flanges:</h1>
          <p>
            An orifice flange is used to measure the flow of the fluid conveyed
            by the pipeline via a flow nozzle positioned on the flange itself.
            Pairs of pressure tappings are machined onto the orifice flange,
            making separate tappings on the pipe wall unnecessary.
          </p>
          <h1>Threaded Flange:</h1>
          <p>
            This type of flange has threads on the inside diameter, allowing it
            to be screwed onto a threaded pipe or fitting. It is commonly used
            in low-pressure applications and can be used for both high and low
            temperatures.
          </p>
        </div>
      </div>
      <PageFooter />
    </>
  );
}

export default Flanges;
