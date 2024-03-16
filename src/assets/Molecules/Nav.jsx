import Button from "../Atoms/Button";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.nav_container_one}>
          <h2>Fresh Produce</h2>
        </div>
        <div className={styles.nav_container_two}>
          <a href="#">Shop</a>

          <a href="#">Newstand</a>

          <a href="#">Who we are</a>

          <a href="#">My Profile</a>

          <a href="#">
            <Button name="Basket" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
