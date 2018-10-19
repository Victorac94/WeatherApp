import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import countries from 'i18n-iso-countries';

import Card from './components/Card/Card';
import './App.css';
import * as action from './store/actions/fetchWeather';

// countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
// countries.registerLocale(require("i18n-iso-countries/langs/es.json"));

class App extends Component {
  componentDidMount() {
    this.props.onFetchWeather()
  }

  render() {
    return (
      <div className="App">
        <h2>Weather</h2>
        <Card myState={this.props.myState}></Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myState: state.weather
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchWeather: () => dispatch(action.fetchWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
