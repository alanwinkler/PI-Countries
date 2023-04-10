import styles from "./Paginado.module.css";

const Paginado = ({ allCountries, countriesPerPage, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.paginado}>
      <nav>
        <ul className={styles.ul}>
          {pageNumbers &&
            pageNumbers.map((number) => (
              <button
                key={number}
                className={styles.button}
                id={pageNumbers}
                onClick={() => paginado(number)}
              >
                {number}
              </button>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginado;
