//takeEvery nos permite escuchar ciertas acciones y hacer algo cuando esto ocurra
import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { fetchWeatherStart, fetchCityWeatherStart } from './fetchWeather';

export default function* watchWeather() {
  yield takeEvery(actionTypes.FETCH_WEATHER, fetchWeatherStart);
  yield takeEvery(actionTypes.FETCH_CITY_WEATHER, fetchCityWeatherStart);
};
