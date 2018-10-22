import * as actionTypes from './actionTypes';

export const fetchWeather = () => {
  return {
    type: actionTypes.FETCH_WEATHER
  }
}

export const fetchWeatherSucceed = (data) => {
  return {
    type: actionTypes.FETCH_WEATHER_SUCCEED,
    data: data
  }
}

export const fetchCityWeather = (city) => {
  return {
    type: actionTypes.FETCH_CITY_WEATHER,
    city: city
  }
}

export const fetchCityWeatherSucceed = (data) => {
  return {
    type: actionTypes.FETCH_CITY_WEATHER_SUCCEED,
    data: data
  }
}
