import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/action-types';
import { apiQuery } from '../../../../models/apiQuery'

export default function * root () {
  yield takeLatest(actions.GET_WEATHER_DATA, fetchWeatherData);
  
}