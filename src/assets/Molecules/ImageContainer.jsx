import Image from "../Atoms/Image";
import image1 from "../images/image.png";
import image2 from "../images/image2.png";
import styles from "./ImageContainer.module.css";

function ImageContainer() {
  return (
    <div className={styles.image_container}>
      <div className={styles.image_left}>
        <Image src={image1} className={styles.image_one} />
      </div>
      <div className={styles.image_right}>
        <Image src={image2} className={styles.image_two} />
        <p className={styles.image_text}>
          <strong>Central California</strong> — The person who grew these was located in Central
          California and, er, hopefully very well-
          <br />
          compensated.
        </p>
      </div>
    </div>
  );
}

export default ImageContainer;
