import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  current: {
    city: null,
    country: null,
    temperature: null,
    feelslike_c: null,
    icon: null,
    text: null,
    pressure_mb: null,
    precip_mm: null,
    humidity: null,
    wind_mph: null,
    is_day: null
  }
  // ,
  // forecast: [
  //   0: {
  //     maxtemp_c: null,
  //     mintemp_c: null,
  //     avgtemp_c: null,
  //     text: null,
  //     icon: null,
  //     maxwind_kph: null,
  //     totalprecip_mm: null,
  //     avghumidity: null,
  //     uv: null,
  //     sunrise: null,
  //     sunset: null
  //   }
  // ]
}

const fetchWeatherSucceed = (state, action) => {
  const data = action.data;
  const newProps = {
    city: data.location.name,
    country: data.location.country,
    temperature: data.current.temp_c,
    feelslike_c: data.current.feelslike_c,
    icon: data.current.condition.icon,
    text: data.current.condition.text,
    pressure_mb: data.current.pressure_mb,
    precip_mm: data.current.precip_mm,
    humidity: data.current.humidity,
    wind_mph: data.current.wind_kph,
    is_day: data.current.is_day
  }
  return updateObject(state, newProps);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_SUCCEED: return fetchWeatherSucceed(state, action);
    default:
      return state;
  }
}
export default reducer;
