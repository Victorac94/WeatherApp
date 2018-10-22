import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  current: null,
  forecast: null,
  location: null
}

//This function will handle default fetchWeather and city searched weather
const fetchWeatherSucceed = (state, action) => {
  const data = action.data;
  const current = {...data.current};
  const forecast = {...data.forecast};
  const location = {...data.location};
  const newProps = { current, forecast, location }

  return updateObject(state, newProps);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_SUCCEED: return fetchWeatherSucceed(state, action);
    case actionTypes.FETCH_CITY_WEATHER_SUCCEED: return fetchWeatherSucceed(state, action);
    default:
      return state;
  }
}
export default reducer;
