const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountryByName = async (name) => {
  // console.log(country);
  const country = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
      },
    ],
  });
  if(!country.length){
    return `El país ${name} no se encuentra en la base de datos`;
  } else return country;
};

module.exports = { getCountryByName };

// const country = await Country.findAll({
//   where: {
//     name: { [Op.substring]: name },
//   },
//   include: [
//     {
//       model: Activity,
//       attributes: ["name", "difficulty", "duration", "season"],
//       through: { attributes: [] },
//     },
//   ],
// });
