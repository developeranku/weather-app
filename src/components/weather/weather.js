import React from 'react';
import humidityIcon from './../../icons/humidity.svg';
import pressureIcon from './../../icons/pressure.svg';
import temperatureIcon from './../../icons/temperature.svg';

export class Weather extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="row weatherData">

                    <div className="col-md-4 humidity">
                        <img src={humidityIcon} alt='icon' />
                        <p>Humidity: <br /> {this.props.humidity} %</p>
                        <p>{this.props.city}</p>
                    </div>

                    <div className="col-md-4 pressure">
                        <img src={pressureIcon} alt='icon' />
                        <p>Pressure: <br /> {this.props.pressure} %</p>
                    </div>

                    <div className="col-md-4 temperature">
                        <img src={temperatureIcon} alt='icon' />
                        <p>Temperature: <br /> {this.props.temp} &#176;
                        C</p>
                    </div>

                </div>

            </React.Fragment>
        )

    }
}

