//import logo from './logo.svg';
//import './App.css';
import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import PageLoader from "./PageLoader";

class App extends React.Component {

  // initialize state without class constructor
  state = { lat: null, errorMessage: '' };

  componentDidMount() {

    // get latitude and use setState
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState( { errorMessage: err.message})
    );

  }

  // rendor helper class for multiple return points
  renderContent() {

    if (this.setState.errorMessage && !this.state.lat)
    {
    return (
      <div>
        Error : {this.state.errorMessage}
      </div>
    );
    }

    if (this.state.lat) {
      return  (
        <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
      );
    }

    return <PageLoader message="Please accept location request"></PageLoader>;

  }

  render() {
  
    return <div> {this.renderContent()}</div>

  }
}

export default App;
