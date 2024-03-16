import Button from "../Atoms/Button";
import styles from "./Highlight.module.css";

function Highlight() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          We&#39;re <i>farmers, purveyors,</i> and <i>eaters</i> of
          <br /> organically grown food.
        </p>
      </div>
      <div className={styles.shop_button}>
        <Button name="Browse our shop" />
      </div>
    </div>
  );
}

export default Highlight;
