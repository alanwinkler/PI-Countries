const { getAllActivities, createNewActivity } = require("../controllers");

const getActivitiesHandler = async (req, res) => {
  try {
    const allActivities = await getAllActivities();
    if (!allActivities)
      return res.status(400).send("No se encontraron actividades");
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const postActivityHandler = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countryId } = req.body;
    const newActivity = await createNewActivity(name, difficulty, duration, season, countryId);
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getActivitiesHandler, postActivityHandler };
