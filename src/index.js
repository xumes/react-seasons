import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    hasError: false,
    err: false
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      err => {
        console.log(err);
        this.setState({
          hasError: true,
          err: err
        })
      }
    );
  }

  render(){
      if (this.state.hasError && !this.state.latitude) {
        return (
          <div>
            <p>Ops</p>
            <p>Err: {this.state.err.message}</p>
          </div>
        )
      }

      if (!this.state.hasError && this.state.latitude) {
        return <SeasonDisplay lat={this.state.latitude} long={this.state.longitude} />
      }

      return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
