import React from 'react';
import '../css/title.css';

class Title extends React.Component{
  render() {
    return (
      <div id="mainNav" className="p-0">
              <div className="navbar-brand "><img class="align-self-center mr-3" src="" alt="" id="logo" /></div>
              <div className="navbar-brand" id="customClock">
                <div className="clock text-sm-center">
                  <div className="row">
                  <h1> Este es el titulo </h1>
                    <div className="col-auto"id="Date"></div>
                    <div className="col-1" id="hour"></div>
                  </div>
                </div>
              </div>
      </div>
    );
  }
}

export default Title;
