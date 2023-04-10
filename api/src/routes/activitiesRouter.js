const { Router } = require("express");
const { getActivitiesHandler, postActivityHandler} = require("../handlers")

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);

activitiesRouter.post("/", postActivityHandler)

module.exports = activitiesRouter;