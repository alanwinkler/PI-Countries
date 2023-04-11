const { Activity } = require("../db");

const createNewActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  await newActivity.addCountry(countries); // newActivity.setCountries(countries)
  return newActivity;
};

module.exports = { createNewActivity };
