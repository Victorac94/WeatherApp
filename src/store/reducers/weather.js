import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  current: null,
  forecast: null,
  location: null,
  error: false
}

//Reset the error to false everytime we try to fetch data
const fetchWeather = (state, action) => {
  return updateObject(state, {error: false});
}

//This function will handle default fetchWeather and city searched weather on success
const fetchWeatherSucceed = (state, action) => {
  const data = action.data;
  const current = {...data.current};
  const forecast = {...data.forecast};
  const location = {...data.location};
  const newProps = { current, forecast, location }

  return updateObject(state, newProps);
}

//This function will handle error on fetching weather data
const fetchWeatherFailed = (state, action) => {
  return updateObject(state, {error: true})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER: return fetchWeather(state, action);
    case actionTypes.FETCH_CITY_WEATHER: return fetchWeather(state, action);
    case actionTypes.FETCH_WEATHER_SUCCEED: return fetchWeatherSucceed(state, action);
    case actionTypes.FETCH_WEATHER_FAILED: return fetchWeatherFailed(state, action);
    case actionTypes.FETCH_CITY_WEATHER_SUCCEED: return fetchWeatherSucceed(state, action);
    default:
      return state;
  }
}
export default reducer;
