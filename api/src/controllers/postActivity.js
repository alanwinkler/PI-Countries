const { Activity } = require("../db");

const createNewActivity = async (
  name,
  difficulty,
  duration,
  season,
  countryId
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  await newActivity.setCountries(countryId);
  return newActivity;
};

module.exports = { createNewActivity };
