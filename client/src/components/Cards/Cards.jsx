import { Link } from "react-router-dom";
import styles from "./Cards.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <Link className={styles.name} to={`/detail/${props.id}`}>
        {props.name}
      </Link>
      <img className={styles.flag} src={props.flag} alt="country flag" />
      <h5 className={styles.continent}>{props.continent}</h5>
    </div>
  );
};

export default Card;
/*


 */
