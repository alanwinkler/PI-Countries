import {
  GET_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
  ORDER_BY_ALF,
  ORDER_BY_POP,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
} from "./actiontypes";

const initialState = {
  countries: [],
  allCountries: [],
  detail: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_COUNTRY_BY_NAME:
      const filteredCountry = state.allCountries.filter(
        (country) => country.name === action.payload[0].name
      );
      const filtrado = !action.payload.length ? state.allCountries : filteredCountry;
      return {
        ...state,
        countries: filtrado,
      };
    case ORDER_BY_ALF:
      const sortedCountries = state.countries;
      if (action.payload === "Ascendente")
        sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
      else sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        countries: sortedCountries,
      };
    case ORDER_BY_POP:
      const orderedCountries = state.countries;
      if (action.payload === "Mayor a menor") {
        orderedCountries.sort((a, b) => b.population - a.population);
      } else {
        orderedCountries.sort((a, b) => a.population - b.population);
      }
      return {
        ...state,
        countries: orderedCountries,
      };
    case FILTER_BY_CONTINENT:
      const filteredCountries =
        action.payload === "All"
          ? state.allCountries
          : state.allCountries.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        countries: filteredCountries,
      };
    case FILTER_BY_ACTIVITY:
      const allCountries = state.allCountries;
      const country = allCountries.filter(
        (country) => country.Activities.length > 0
      );
      let activities = [];
      for (let i = 0; i < country.length; i++) {
        for (let j = 0; j < country[i].Activities.length; j++) {
          if (country[i].Activities[j].name === action.payload)
            activities.push(country[i]);
        }
      }
      const filter = action.payload === "Todos" ? allCountries : activities;
      return {
        ...state,
        countries: filter,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
