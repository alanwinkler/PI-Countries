import Card from "../Cards/Cards";
import { useState } from "react";
import { useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import styles from "./CardsContainer.module.css";

const CardContainer = () => {
  const allCountries = useSelector((state) => state.countries);
  const [page, setPage] = useState(1);
  const paginado = (page) => {
    setPage(page);
  };

  const countriesPerPage = 10;

  // PASAR EL PAGINADO ACÁ OTRA VEZ PARA QUE FUNCIONE BIEN.

  const lastCountry = page * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const countries = allCountries.slice(firstCountry, lastCountry);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer} >
        {countries.length ? (
          countries.map((e) => {
            return (
              <div key={e.id}>
                <Card
                  flag={e.flag}
                  name={e.name}
                  continent={e.continent}
                  key={e.id}
                  id={e.id}
                />
              </div>
            );
          })
        ) : (
          <h1>No se encontraron países</h1>
        )}
      </div>
      <div>
        <div>
          <Paginado
            countriesPerPage={countriesPerPage}
            allCountries={allCountries.length}
            paginado={paginado}
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
