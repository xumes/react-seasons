import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position.coords.latitude, position.coords.longitude),
    err => console.log(err)
  );
  return <div>Hi</div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
