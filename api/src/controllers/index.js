const { getAllCountries } = require("./getAllCountries");
const { getCountryDetail } = require("./getCountryDetail");
const { getCountryByName } = require("./getCountryByName");
const {getAllActivities} = require("./getAllActivities");
const {createNewActivity} = require("./postActivity");

module.exports = { getAllCountries, getCountryDetail, getCountryByName, getAllActivities, createNewActivity };
