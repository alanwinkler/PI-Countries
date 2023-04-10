import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar} >
      <Link className={styles.link} to="/home">HOME</Link>
      <Link className={styles.link} to="/create">CREATE AN ACTIVITY</Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;