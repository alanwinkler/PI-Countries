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
      <div className={styles.detailItem}>
        <div className={styles.detailLabel}>Activities:</div>
        <div className={styles.detailValue}>
          <div>
            {country.Activities ? (
              country.Activities.map((activity) => {
                return (
                  <div className={styles.detailItem} key={activity.id}>
                    <div className={styles.detailLabel}>Name: </div>

                    <div className={styles.detailValue}>{activity.name}</div>
                    <div className={styles.detailLabel}>Difficulty:</div>

                    <div className={styles.detailValue}>
                      {activity.difficulty}
                    </div>
                    <div className={styles.detailLabel}>Duration:</div>

                    <div className={styles.detailValue}>
                      {activity.duration}
                    </div>
                    <div className={styles.detailLabel}>Season:</div>

                    <div className={styles.detailValue}>{activity.season}</div>
                  </div>
                );
              })
            ) : (
              <div>No se han creado actividades</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
