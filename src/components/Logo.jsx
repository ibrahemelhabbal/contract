import PropTypes from "prop-types";
import styles from "./Logo.module.css";

function Logo({ scrolling }) {
  return (
    <div className={styles.logo}>
      <img
        className={`${styles.logoContainer} ${
          scrolling ? styles.scrolled : ""
        }`}
        src="logo2.png"
        alt="logo"
      />
      <img src="logo.png" alt="logo" />
    </div>
  );
}

Logo.propTypes = {
  scrolling: PropTypes.bool.isRequired,
};

export default Logo;
