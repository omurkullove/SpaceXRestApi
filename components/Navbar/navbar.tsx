import styles from "../../styles/Navbar.module.scss";
import Link from "next/dist/client/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.block1}>
        <Link href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
