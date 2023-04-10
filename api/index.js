const server = require("./src/app.js");
const { sequelize } = require("./src/db.js");
const PORT = 3001;
const saveApiData = require("./src/controllers/saveApiData");

// saveApiData();

// Syncing all the models at once.
server.listen(PORT, async () => {
  await sequelize.sync({ force: true });
  await saveApiData();
  console.log(`Server listening at ${PORT}`); // eslint-disable-line no-console
});
