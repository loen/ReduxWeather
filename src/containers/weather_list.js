import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => Number((weather.main.temp - 273.15).toFixed(2)));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    console.log(temp);
    return(
      <tr key={name}>
        <td>{name}</td>
        <td><Chart color="orange" data={temp} units="C" /></td>
        <td><Chart color="green" data={pressures} units="hPa" /></td>
        <td><Chart color="black" data={humidities} units="%" /></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

}

function mapStateToProps({weather}) {
  return({ weather});
}

export default connect(mapStateToProps)(WeatherList);
