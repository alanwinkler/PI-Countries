const validate = ({ name, difficulty, duration, season, countries }) => {
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
  else if (!/^(Primavera|Otoño|Invierno|Verano)$/.test(season)) {
    errors.season = "Debe ser Primavera, Otoño, Invierno o Verano";
  }
  if (countries.length === 0) errors.countries = "Debe seleccionar un país";
  console.log(countries);
  return errors;
};

export default validate;
