const { Activity } = require("../db");

const createNewActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries,
  comments
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    comments
  });
  if (!countries) {
    return "Debe incluir un país al menos";
  }
  await newActivity.addCountry(countries); // newActivity.setCountries(countries)
  return newActivity;
};

module.exports = { createNewActivity };
