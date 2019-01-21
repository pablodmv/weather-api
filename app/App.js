import React, {Component} from 'react';
import Title from './components/title.js';
import ForecastApixu from './components/forecastApixu.js';

class App extends Component {
  render(){
    return(

      <div>
        <header>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
        </header>
        <Title />
        <ForecastApixu />
      </div>

    );
  }

}

export default App;
