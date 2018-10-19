import axios from 'axios';
import { put } from 'redux-saga/effects';

import { fetchWeatherSucceed } from '../actions/fetchWeather';

export function* fetchWeatherStart() {
  const response = yield axios.get('https://api.apixu.com/v1/current.json?key=54dac3d1c97d4b04927144355181810&q=auto:ip');
  console.log(response.data);
  yield put(fetchWeatherSucceed(response.data));
}
