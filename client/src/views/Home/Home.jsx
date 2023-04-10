import CardsContainer from "../../components/CardsContainer/CardsContainer";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  filterByActivity,
  filterByContinent,
  getActivities,
  getCountries,
  orderByPop,
  orderCards,
} from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  const handleSort = (e) => {
    dispatch(orderCards(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };

  const handleSortPop = (e) => {
    dispatch(orderByPop(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        Filter by continent
      <select className={styles.select}
        name="filter"
        id=""
        onChange={(e) => dispatch(filterByContinent(e.target.value))}
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      </div>
      <div className={styles.item}>
        Sort by alphabet
      <select className={styles.select} placeholder="" name="orderByAlf" id="" onChange={handleSort}>
        <option value="" disabled>...</option>
        <option value="Ascendente">A to Z</option>
        <option value="Descendente">Z to A</option>
      </select>
      </div>
      <div className={styles.item}>
        Sort by population
      <select className={styles.select} name="orderByPop" id="" onChange={handleSortPop}>
        <option value="" disabled>...</option>
        <option value="Mayor a menor">Descending order</option>
        <option value="Menor a mayor">Ascending order</option>
      </select>
      </div>
      <div className={styles.item}>
        Search by activity
        {activities.length === 0 ? (
          <p>No activities have been created</p>
        ) : (
          <select className={styles.select} name="filterByAct" id="" onChange={(e) => dispatch(filterByActivity(e.target.value))}>
            <option value="Todos">All</option>
            {activities.map((activity) => (
              <option value={activity.name} key={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className={styles.cardsContainer}>
      <CardsContainer />

      </div>

    </div>

  );
};

export default Home;
