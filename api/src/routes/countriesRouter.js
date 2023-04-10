const { Router } = require("express");
const { getCountriesHandler, getCountryDetailHandler } = require("../handlers");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:id", getCountryDetailHandler);


module.exports = countriesRouter;
