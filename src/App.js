import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardCurrent from './components/Cards/CardCurrent/CardCurrent';
import CardForecast from './components/Cards/CardForecast/CardForecast';
import ShowMore from './components/UI/Buttons/ShowMore/ShowMore';
import './App.css';
import * as action from './store/actions/fetchWeather';

class App extends Component {

  state =  {
    showLastCards: false,
    isCelsiusActive: true
  }

  toggleSearchBar = () => {
    const searchBox = document.querySelector(".searchBox");
    const searchBoxInput = document.querySelector(".searchBox input");
    //Hide the searchBox
    if (searchBox.classList.contains("searchBoxShow")) {
      searchBox.classList.remove("searchBoxShow");
      searchBoxInput.classList.remove("searchBoxShowInputPadding");
    } 
    //Show the searchBox
    else {
      searchBox.classList.add("searchBoxShow");
      searchBoxInput.classList.add("searchBoxShowInputPadding");
      searchBoxInput.focus();
    }
  }

  searchCity = e => {
    e.preventDefault();
    const search = document.querySelector(".searchBox input");
    console.log(search.value);
    this.props.onFetchCityWeather(search.value);
  }

  activateCelsius = () => {
    const degreesContainer = document.querySelector(".degreeUnits");
    const cel = degreesContainer.firstElementChild;
    const fah = degreesContainer.lastElementChild;

    if (cel.classList.contains("degreeUnits__active")) return;
    else {
      cel.classList.add("degreeUnits__active");
      fah.classList.remove("degreeUnits__active");
      const stateCopy = {...this.state};
      this.setState({...stateCopy, isCelsiusActive: true})
    }
  }

  activateFahrenheit = () => {
    const degreesContainer = document.querySelector(".degreeUnits");
    const cel = degreesContainer.firstElementChild;
    const fah = degreesContainer.lastElementChild;

    if (cel.classList.contains("degreeUnits__active")) {
      cel.classList.remove("degreeUnits__active");
      fah.classList.add("degreeUnits__active");
      const stateCopy = {...this.state};
      this.setState({...stateCopy, isCelsiusActive: false})
    }
    else return;
  }

  showMoreDays = () => {
    this.setState({showLastCards: true});
  }

  componentDidMount() {
    this.props.onFetchWeather();
  }

  render() {
    let cards;
    let lastCards;

    if (this.props.myState.current) {
      cards = [];
      lastCards = [];

      for ( let i = 0; i < 5; i++) {
        let card = null;

        if (i === 0) {
          card = (
            <CardCurrent
              key={i}
              isCelsiusActive={this.state.isCelsiusActive}
              myCurrent={this.props.myState.current}
              myLocation={this.props.myState.location} />
          );
          cards.push(card);
        }
        else if (i === 3 || i === 4) {
          //These are the last 2 cards, they'll be hidden by default
          //until the user presses the 'show more' button
          card = (
            <CardForecast
              key={i}
              isCelsiusActive={this.state.isCelsiusActive}
              myForecast={this.props.myState.forecast.forecastday[i]}
              myLocation={this.props.myState.location} />
          );
          lastCards.push(card);
        }
        else {
          card = (
            <CardForecast
              key={i}
              isCelsiusActive={this.state.isCelsiusActive}
              myForecast={this.props.myState.forecast.forecastday[i]}
              myLocation={this.props.myState.location} />
          );
          cards.push(card);
        }
      }
    } else {
      cards = null;
      lastCards = null;
    }

    return (
      <div className="App">
        <header className="appHeader">
          <form className="searchBox" onSubmit={(e) => this.searchCity(e)}>
            <input type="text" placeholder="Search your city..." />
            <span className="searchBox__icon icon-search" onClick={() => this.toggleSearchBar()}></span>
          </form>
          <h2>Weather</h2>
          <div className="degreeUnits">
            <div onClick={() => this.activateCelsius()} className="degreeUnits__celsius degreeUnits__active">
              ºC
            </div>
            <div onClick={() => this.activateFahrenheit()} className="degreeUnits__fahrenheit">
              ºF
            </div>
          </div>
        </header>
        {cards}
        {this.state.showLastCards ? lastCards : null}
        {this.props.myState.current && !this.state.showLastCards ?
          <ShowMore showMore={() => this.showMoreDays()}/>
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myState: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchWeather: () => dispatch(action.fetchWeather()),
    onFetchCityWeather: (city) => dispatch(action.fetchCityWeather(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
