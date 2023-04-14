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
import axios from "axios";

export const getCountries = () => {
  return async (dispatch) => {
    const apiData = await axios.get("http://localhost:3001/countries");
    const countries = apiData.data;
    dispatch({
      type: GET_COUNTRIES,
      payload: countries,
    });
  };
};

export const getCountryDetail = (id) => {
  return async (dispatch) => {
    const apiData = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = apiData.data;
    dispatch({
      type: GET_COUNTRY_DETAIL,
      payload: country,
    });
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    const apiData = await axios.get("http://localhost:3001/activities");
    const activities = apiData.data;
    dispatch({
      type: GET_ACTIVITIES,
      payload: activities,
    });
  };
};

export const getCountryByName = (name) => {
  return async (dispatch) => {
    const apiData = await axios.get(
      `http://localhost:3001/countries?name=${name}`
    );
    const country = apiData.data;
    dispatch({
      type: GET_COUNTRY_BY_NAME,
      payload: country,
    });
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_BY_ALF,
    payload: order,
  };
};

export const orderByPop = (order) => {
  return {
    type: ORDER_BY_POP,
    payload: order,
  };
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByActivity = (activity) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload: activity,
  };
};
