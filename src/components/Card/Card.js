import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Card.module.css";

function Card() {
  return (
    <Carousel className={styles.lol}>
      <Carousel.Item>
        <div className={styles.glass}>
          <div>
            <div className={styles.header}>
              <h1>Hi!</h1>
              <h3>I am Katie Yang</h3>
            </div>
            <div className={styles.bodyText}>
              <h4>
                Junior, Computer Science and Studio Arts, and aspiring Front-end
                Developer with a background in Design
              </h4>
              <h5>
                I believe in putting the user first when solving problems.
              </h5>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.glass}>
          <div className={styles.bodyText}>
            <h5>
              I am passionate about improving people's quality of life by
              standing at the intersection of technology and human-centered
              design.
            </h5>
            <br />
            <h5>
              During my free-time, I am into watching anime, learn about
              interactive art, and perform stand-up comedy.
            </h5>
          </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <div className={styles.glass}>
          <div className={styles.header}>
            <h1>Hi!</h1>
            <h3>I am Katie Yang</h3>
          </div>
          <div className={styles.bodyText}>
            <h4>
              Junior, Computer Science and Studio Arts, and aspiring Front-end
              Developer with a background in Design
            </h4>
            <h5>
              I believe in putting the user first when solving problems. <br />I
              am passionate about improving people's quality of life by standing
              at the intersection of technology and human-centered design.
            </h5>
          </div>
        </div>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Card;