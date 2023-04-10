import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  return (
    <div className={styles.detailContainer}>
      <img src={country.flag} alt="Flag" className={styles.flag} />
      <div className={styles.name}>{country.name}</div>
      <div className={styles.detailItem}>
        <div className={styles.detailLabel}>ID:</div>
        <div className={styles.detailValue}>{country.id}</div>
      </div>
      <div className={styles.detailItem}>
        <div className={styles.detailLabel}>Capital:</div>
        <div className={styles.detailValue}>{country.capital}</div>
      </div>
      <div className={styles.detailItem}>
        <div className={styles.detailLabel}>Continente:</div>
        <div className={styles.detailValue}>{country.continent}</div>
      </div>
      <div className={styles.detailItem}>
        <div className={styles.detailLabel}>Subregión:</div>
        <div className={styles.detailValue}>{country.subregion}</div>
      </div>
      <div className={styles.detailItem}>
        <div className={styles.detailLabel}>Área:</div>
        <div className={styles.detailValue}>{country.area} km²</div>
      </div>
      <div className={styles.detailItem}>
        <div className={styles.detailLabel}>Población:</div>
        <div className={styles.detailValue}>{country.population}</div>
      </div>
    </div>
    // <div>
    //   <p>{country.name}</p>
    //   <p>{country.id}</p>
    //   <img src={country.flag} alt="contry-flag" />
    //   <p>Capital: {country.capital}</p>
    //   <p>Continente: {country.continent}</p>
    //   <p>Subregión: {country.subregion}</p>
    //   <p>Área: {country.area} km²</p>
    //   <p>Población: {country.population}</p>
    // </div>
  );
};

export default Detail;
