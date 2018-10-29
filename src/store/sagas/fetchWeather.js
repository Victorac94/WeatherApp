import axios from 'axios';
import { put } from 'redux-saga/effects';

import { fetchWeatherSucceed, fetchCityWeatherSucceed, fetchWeatherFailed } from '../actions/fetchWeather';

export function* fetchWeatherStart() {
  try {
    const response = yield axios.get('https://api.apixu.com/v1/forecast.json?key=54dac3d1c97d4b04927144355181810&q=auto:ip&days=5');
    yield put(fetchWeatherSucceed(response.data));
  }
  catch {
    yield put(fetchWeatherFailed());
  }
}

export function* fetchCityWeatherStart(data) {
  try {
    const cityURI = encodeURI(data.city);
    const response = yield axios.get('https://api.apixu.com/v1/forecast.json?key=54dac3d1c97d4b04927144355181810&q=' + cityURI + '&days=5');
    yield put(fetchCityWeatherSucceed(response.data))
  }
  catch {
    yield put(fetchWeatherFailed());
  }
}
