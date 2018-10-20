import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardCurrent from './components/Cards/CardCurrent/CardCurrent';
import CardForecast from './components/Cards/CardForecast/CardForecast';
import ShowMore from './components/UI/Buttons/ShowMore/ShowMore';
import './App.css';
import * as action from './store/actions/fetchWeather';

class App extends Component {

  state =  {
    showLastCards: false
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
          card = <CardCurrent key={i} myCurrent={this.props.myState.current} myLocation={this.props.myState.location} />;
          cards.push(card);
        }
        else if (i === 3 || i === 4) {
          //These are the last 2 cards, they'll be hidden by default
          //until the user presses the 'show more' button
          card = <CardForecast key={i} myForecast={this.props.myState.forecast.forecastday[i]} myLocation={this.props.myState.location} />;
          lastCards.push(card);
        }
        else {
          card = <CardForecast key={i} myForecast={this.props.myState.forecast.forecastday[i]} myLocation={this.props.myState.location} />;
          cards.push(card);
        }
      }
    } else {
      cards = null;
      lastCards = null;
    }

    return (
      <div className="App">
        <h2>Weather</h2>
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
    onFetchWeather: () => dispatch(action.fetchWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
