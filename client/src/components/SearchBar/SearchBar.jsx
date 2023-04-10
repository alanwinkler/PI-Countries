import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const onSearch = (name) => {
    dispatch(getCountryByName(name));
  };

  return (
    <div>
      <input className={styles.input} type="search" placeholder="Search a country" value={country} onChange={handleChange}/>
      <button className={styles.button} onClick={() => onSearch(country)}>Search</button>
    </div>
  );
};

export default SearchBar;

