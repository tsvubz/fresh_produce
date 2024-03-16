import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_left}>
        <p>What We Believe</p>
      </div>
      <div className={styles.footer_right}>
        <p className={styles.footer_text}>
          We believe in produce. Tasty produce. Produce like:
          <br />
          <br />
          Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers.
          <br />
          Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem
          <br />
          artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions.
          <br /> Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.
          <br />
          <br /> What are we forgetting? <br />
          <br /> Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian
          cucumbers,
          <br /> in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins.
          <br />
          Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes.
          <br /> Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website).
          Sorrel.
          <br /> Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets.
          <br />
          Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce,
          <br /> but if you asked us to describe what escaroles are...
        </p>
      </div>
    </div>
  );
}

export default Footer;
