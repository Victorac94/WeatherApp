import * as actionTypes from './actionTypes';

export const fetchWeather = () => {
  return {
    type: actionTypes.FETCH_WEATHER,
    error: false
  }
}

export const fetchWeatherSucceed = (data) => {
  return {
    type: actionTypes.FETCH_WEATHER_SUCCEED,
    data: data
  }
}

export const fetchWeatherFailed = () => {
  return {
    type: actionTypes.FETCH_WEATHER_FAILED,
  }
}

export const fetchCityWeather = (city) => {
  return {
    type: actionTypes.FETCH_CITY_WEATHER,
    city: city,
    error: false
  }
}

export const fetchCityWeatherSucceed = (data) => {
  return {
    type: actionTypes.FETCH_CITY_WEATHER_SUCCEED,
    data: data
  }
}
