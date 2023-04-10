const axios = require("axios");
const { Country } = require("../db");

const getApiData = async () => {
  try {
    const { data } = await axios("https://restcountries.com/v3/all");
    const countriesData = data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags[0],
        continent: country.continents[0],
        capital: country.capital ? country.capital : "No se encontró capital",
        subregion: country.subregion
          ? country.subregion
          : "No se encontró subregión",
        area: country.area ? country.area : "No se encontró area",
        population: country.population,
      };
    });
    // console.log(countriesData);
    return countriesData;
  } catch (err) {
    return { msg: err.message };
  }
};

const saveApiData = async () => {
  try {
    const allCountries = await getApiData();
    Country.bulkCreate(allCountries).then(console.log("Arreglo cargado a la base de datos"))
    return allCountries;
  } catch (error) {
    return { msg: error.message };
  }
};

module.exports = saveApiData;
