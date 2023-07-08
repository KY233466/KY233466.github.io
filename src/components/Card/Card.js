import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Card.module.css";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Skeleton from "@mui/material/Skeleton";

function Card() {
  const { t } = useTranslation();
  const LPIpath = "LandingPage.";

  const loading = true;
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  //   margin: 3rem 0rem 0rem 9rem;
  // width: 70%;
  // border-radius: 5px;
  // -webkit-backdrop-filter: blur(6px);
  // backdrop-filter: blur(6px);
  // box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.09);
  // border-top: 2px solid rgba(225, 225, 225, 0.3);
  // border-left: 2px solid rgba(225, 225, 225, 0.1);
  // border-right: 1px solid rgba(225, 225, 225, 0.2);
  // padding: 3rem;
  // padding-bottom: 1rem;
  // overflow-y: auto;
  // box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  // transform: translate(-4rem, 0);

  return (
    <div>
      <div className={styles.glass1}>
        {loading ? (
          <Skeleton variant="rounded" width={"100%"} height={"100%"} />
        ) : (
          <div>
            <div className={styles.header}>
              <h1>{t(LPIpath + "Intro.header1")}</h1>
              <h3>{t(LPIpath + "Intro.header2")}</h3>
            </div>
            <div className={styles.bodyText}>
              <h4>{t(LPIpath + "Intro.slogan")}</h4>
            </div>
          </div>
        )}
      </div>
      <div className={styles.glass2}>
        <div className={styles.bodyText}>
          <h5>{t(LPIpath + "Intro.message1")}</h5>
        </div>
      </div>

      <div className={styles.glass3}>
        <div className={styles.bodyText}>
          <h5>{t(LPIpath + "Intro.message2")}</h5>
        </div>
      </div>
    </div>
    // <Carousel className={styles.lol}>
    //   <Carousel.Item>
    //     <div className={styles.glass}>
    //       <div>
    //         <div className={styles.header}>
    //           <h1>Hi!</h1>
    //           <h3>I am Katie Yang</h3>
    //         </div>
    //         <div className={styles.bodyText}>
    //           <h4>
    //             Junior, Computer Science and Studio Arts, and aspiring Front-end
    //             Developer with a background in Design
    //           </h4>
    //           <h5>
    //             I believe in putting the user first when solving problems.
    //           </h5>
    //         </div>
    //       </div>
    //     </div>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className={styles.glass}>
    //       <div className={styles.bodyText}>
    //         <h5>
    //           I am passionate about improving people's quality of life by
    //           standing at the intersection of technology and human-centered
    //           design.
    //         </h5>
    //         <br />
    //         <h5>
    //           During my free-time, I am into watching anime, learn about
    //           interactive art, and perform stand-up comedy.
    //         </h5>
    //       </div>
    //     </div>
    //   </Carousel.Item>
    // <Carousel.Item>
    //     <div className={styles.glass}>
    //       <div className={styles.header}>
    //         <h1>Hi!</h1>
    //         <h3>I am Katie Yang</h3>
    //       </div>
    //       <div className={styles.bodyText}>
    //         <h4>
    //           Junior, Computer Science and Studio Arts, and aspiring Front-end
    //           Developer with a background in Design
    //         </h4>
    //         <h5>
    //           I believe in putting the user first when solving problems. <br />I
    //           am passionate about improving people's quality of life by standing
    //           at the intersection of technology and human-centered design.
    //         </h5>
    //       </div>
    //     </div>
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default Card;
