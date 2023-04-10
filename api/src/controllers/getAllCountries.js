const { Country, Activity } = require("../db");

const getAllCountries = async () => {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  return countries;
};

module.exports = { getAllCountries };
