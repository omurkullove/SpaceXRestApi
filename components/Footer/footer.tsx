import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.block1}>
        <img
          src="https://seeklogo.com/images/S/spacex-crs-10-logo-C9F711CF7E-seeklogo.com.png"
          alt="img"
        />
      </div>
      <div className={styles.block2}>
        <p>
          This page was developed by Aidin. All information was taken from an
          <br />
          open source. Link to REST API documentation:
          <br />
          <a
            href="https://docs.spacexdata.com/#eda45a06-9f05-40f1-a333-028f647ba797"
            target="_blanck">
            Clich here
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
