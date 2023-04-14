const {
  getAllCountries,
  getCountryDetail,
  getCountryByName,
} = require("../controllers");

const getCountriesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const countries = await getCountryByName(name);
      return res.status(200).json(countries);
    } else {
      const allCountries = await getAllCountries();
      return res.status(200).json(allCountries);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const getCountryDetailHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await getCountryDetail(id);
    if (!country)
      return res
        .status(400)
        .send(`El país con id ${id} no se encuentra en la base de datos`);
    else return res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getCountriesHandler,
  getCountryDetailHandler,
};
