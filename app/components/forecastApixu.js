import React from 'react';
import TEXT from './utils';
import conditions_esp from './conditions.js';
import '../css/forecastApixuCss.css'
class ForecastApixu extends React.Component {

  constructor(props){
    super(props);
    this.state = {forecast:[],load:false, };
    this.getNameDay=this.getNameDay.bind(this);
    this.getConditions=this.getConditions.bind(this);
  }

  getNameDay(param) {
      var d = new Date(param);
      var weekday = new Array(7);
      weekday[0] = "Lunes";
      weekday[1] = "Martes";
      weekday[2] = "Miércoles";
      weekday[3] = "Jueves";
      weekday[4] = "Viernes";
      weekday[5] = "Sábado";
      weekday[6] = "Domingo";

      var n = weekday[d.getDay()];
      return n;

  }

  getConditions(code){
    for (var i = 0; i < conditions_esp.length; i++) {
      if (conditions_esp[i].code == code) {
        return conditions_esp[i].day
      }
    }
  }

  getConditionsIcon(code, is_day){
    for (var i = 0; i < conditions_esp.length; i++) {
      if (conditions_esp[i].code == code) {
        if (is_day ) {
          return "/images/icons/" + conditions_esp[i].icon_day;
        }
        return "/images/icons/" + conditions_esp[i].icon_night;
      }
    }
  }



  componentDidMount() {
   fetch('/api')
     .then(res => res.json())
     .then(datos => this.setState({ forecast: datos, load: true, }));
  }



  render() {
    if (!this.state.load) return (<h1> No cargo</h1>)
    return(
      <div className="container fluid mt-5">
        <div className="row ">
          <div className="col-md-auto rounded shadow-lg pt-5 offset-md-1" id="currentForecast">
              <div className="col-md-auto text-center ">
                <h5 className="text-white">Hoy</h5>
              </div>
            <div className="row ">
              <div className="col-md">
                <img className="img-fluid rounded mx-auto d-block w-100" src={this.getConditionsIcon(this.state.forecast.current.condition.code,this.state.forecast.current.is_day)} alt=""  />
              </div>
            </div>
              <div className="col-auto text-center">
                <h5 className="text-center">
                  {TEXT.temp}
                </h5>
              </div>
              <div className="col-auto text-center ">
                <h1 className="font-weight-bold display-3 ">
                  {this.state.forecast.current.temp_c}°
                </h1>
              </div>

              <div className="col-auto text-center">
                <h5>
                  {this.getConditions(this.state.forecast.current.condition.code)}
                </h5>
              </div>

            <div className="col-auto text-center  ">
              <h5>
                {TEXT.humidity}:{this.state.forecast.current.humidity}%
              </h5>
            </div>
            <div className="col-auto text-center  ">
              <h6>
                {TEXT.updated}:{this.state.forecast.current.last_updated}
              </h6>
            </div>
          </div>

            <div className="col-md-2 rounded shadow-lg  my-5 offset-sm-1" id="nextDayForecast">
                <div className="col-md-auto text-center pt-5 ">
                  <h5 className="text-white ">{this.getNameDay(this.state.forecast.forecast.forecastday[1].date)}</h5>
                </div>
              <div className="row ">
                <div className="col-md">
                  <img className="img-fluid rounded mx-auto d-block w-100" src={this.getConditionsIcon(this.state.forecast.forecast.forecastday[1].day.condition.code,1)} alt=""  />
                </div>
              </div>
                <div className="col-auto text-center">
                  <h6 className="text-center">
                    {TEXT.txt_forecast_max}
                  </h6>
                </div>
                <div className="col-auto text-center">
                  <h3 className="font-weight-bold">
                    {(this.state.forecast.forecast.forecastday[1].day.maxtemp_c).toFixed() }°
                  </h3>
                </div>
                <div className="col-auto text-center">
                  <h6>
                    {this.getConditions(this.state.forecast.forecast.forecastday[1].day.condition.code)}
                  </h6>
                </div>

              <div className="col-auto text-center  ">
                <h6>
                  {TEXT.humidity}: {this.state.forecast.forecast.forecastday[1].day.avghumidity}%
                </h6>
              </div>
            </div>

            <div className="col-md-2 rounded shadow-lg my-5 " id="dayTwo">
                <div className="col-md-auto text-center pt-5 ">
                  <h5 className="text-white">{this.getNameDay(this.state.forecast.forecast.forecastday[2].date)}</h5>
                </div>
              <div className="row ">
                <div className="col-md">
                  <img className="img-fluid rounded mx-auto d-block w-100" src={this.getConditionsIcon(this.state.forecast.forecast.forecastday[2].day.condition.code,1)} alt=""  />
                </div>
              </div>
                <div className="col-auto text-center">
                  <h6 className="text-center">
                    {TEXT.txt_forecast_max}
                  </h6>
                </div>
                <div className="col-auto text-center">
                  <h3 className="font-weight-bold">
                    {(this.state.forecast.forecast.forecastday[2].day.maxtemp_c).toFixed()}°
                  </h3>
                </div>
                <div className="col-auto text-center">
                  <h6>
                    {this.getConditions(this.state.forecast.forecast.forecastday[2].day.condition.code)}
                  </h6>
                </div>

              <div className="col-auto text-center  ">
                <h6>
                  {TEXT.humidity}: {this.state.forecast.forecast.forecastday[2].day.avghumidity}%
                </h6>
              </div>
            </div>


            <div className="col-md-2 rounded shadow-lg my-5 " id="dayThree">
                <div className="col-md-auto text-center  pt-5">
                  <h5 className="text-white">  {this.getNameDay(this.state.forecast.forecast.forecastday[3].date)}</h5>
                </div>
              <div className="row ">
                <div className="col-md">
                  <img className="img-fluid rounded mx-auto d-block w-100" src={this.getConditionsIcon(this.state.forecast.forecast.forecastday[3].day.condition.code,1)} alt=""  />
                </div>
              </div>
                <div className="col-auto text-center">
                  <h6 className="text-center">
                    {TEXT.txt_forecast_max}
                  </h6>
                </div>
                <div className="col-auto text-center">
                  <h3 className="font-weight-bold">
                    {(this.state.forecast.forecast.forecastday[3].day.maxtemp_c).toFixed()}°
                  </h3>
                </div>
                <div className="col-auto text-center">
                  <h6>
                    {this.getConditions(this.state.forecast.forecast.forecastday[3].day.condition.code)}
                  </h6>
                </div>

              <div className="col-auto text-center  ">
                <h6>
                  {TEXT.humidity}: {this.state.forecast.forecast.forecastday[3].day.avghumidity}%
                </h6>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ForecastApixu;
