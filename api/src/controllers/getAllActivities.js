const { Activity, Country } = require("../db");

const getAllActivities = async () => {
  return await Activity.findAll({
    include: {
      model: Country,
      attributes: [
        "name",
        "flag",
        "continent",
        "capital",
        "subregion",
        "area",
        "population",
      ],
      through: {
        attributes: [],
      },
    },
  });
};

module.exports = { getAllActivities };
