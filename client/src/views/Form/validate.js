const validate = ({ name, difficulty, duration, season, countryId }) => {
  let errors = {};

  if (!name) errors.name = "Campo Necesario";
  else if (/[^A-Za-z0-9 ]+/g.test(name))
    errors.name = "Nombre no puede tener caracteres especiales o tildes";

  if (!duration) errors.duration = "Debe tener una duración";
  else if (duration <= 0 || duration > 24)
    errors.duration = "Debe ser entre 1 y 24";

  if (!difficulty) errors.difficulty = "Campo necesario";
  else if (difficulty <= 0 || difficulty > 5)
    errors.difficulty = "Debe ser entre 1 y 5";

  if (!season) errors.season = "Campo necesario";
  // let seasonValidate = season.toLowerCase();
  // if (countryId.length > 3) errors.countryId = "El ID debe ser de 3 caracteres";
  return errors;
};

export default validate;
