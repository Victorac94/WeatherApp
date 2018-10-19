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
