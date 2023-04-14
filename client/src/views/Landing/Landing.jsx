import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <h1>Welcome</h1>
        <h2>This is a single page application</h2>
        <h2>that shows data of countries</h2>
        <Link className={styles.link} to="/home">
          {" "}
          GO TO HOME{" "}
        </Link>
      </div>
    </div>
  );
};

export default Landing;
