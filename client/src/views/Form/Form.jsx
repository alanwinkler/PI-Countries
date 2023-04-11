import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import axios from "axios";
import validate from "./validate";
import styles from "./Form.module.css";

const Form = () => {
  const countries = useSelector((state) => state.countries);
  // const countryDetail = useSelector((state) => state.detail);

  const dispatch = useDispatch(getCountries());

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    // console.log(countries);
    const property = e.target.name;
    const value = e.target.value;
    setErrors(validate({ ...form, [property]: value }));
    setForm({
      ...form,
      [property]: value,
    });
  };

  const changeCountriesHandler = (e) => {
    // const property = e.target.name;
    console.log(form);

    const value = e.target.value;
    console.log(value);
    setErrors(validate({ ...form, countries:[...form.countries, value] }));
    setForm({
      ...form,
      countries: [...form.countries, value],
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(Object.values(errors))
    if (Object.values(errors).length) {
      alert("Debe completar los datos necesarios");
    }
    axios
      .post("http://localhost:3001/activities", form)
      .then((res) => alert("Actividad creada"));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.group}>
        <label className={styles.label}>Activity name: </label>
        <input
          className={styles.input}
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div className={styles.group}>
        <label className={styles.label}>Difficulty: </label>
        <input
          className={styles.input}
          type="text"
          value={form.difficulty}
          onChange={changeHandler}
          name="difficulty"
        />
        {errors.difficulty && <span>{errors.difficulty}</span>}
      </div>
      <div className={styles.group}>
        <label className={styles.label}>Duration: </label>
        <input
          className={styles.input}
          type="text"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
        />
        {errors.duration && <span>{errors.duration}</span>}
      </div>
      <div className={styles.group}>
        <label className={styles.label}>Season: </label>
        <input
          className={styles.input}
          type="text"
          value={form.season}
          onChange={changeHandler}
          name="season"
        />
        {errors.season && <span>{errors.season}</span>}
      </div>
      <div className={styles.group}>
        <label className={styles.label}>Select countries: </label>
        {/* <select
          name="countries"
          value={form.countries}
          onChange={changeHandler}
        > */}
        <ul name="countries">
          <li value="">
            {countries.map((country) => {
              return (
                <div>
                  <label name="country" key={country.id}>
                    {country.name}
                  </label>
                  <input
                    name="country"
                    type="checkbox"
                    value={country.id}
                    onChange={changeCountriesHandler}
                  ></input>
                </div>
              );
            })}
          </li>
        </ul>
        {/* <input
          className={styles.input}
          type="text"
          value={form.countryId}
          onChange={changeHandler}
          name="countryId"
        /> */}
      </div>
      <button className={styles.button} type="submit">
        CREATE ACTIVITY
      </button>
    </form>
  );
};

export default Form;
