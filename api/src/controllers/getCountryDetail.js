const { Country, Activity} = require("../db");

// localhost:3001/countries/:idPais (params)
// tiene que traer los detalles del país con las actividades turísticas de ese país.
// Falta traer las actividades;
const getCountryDetail = async (id) => {
  const country = await Country.findOne({
    where: {
      id: id,
    },
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  return country;
};

module.exports = { getCountryDetail };
