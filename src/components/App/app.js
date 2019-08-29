import React from 'react';
import './app.css';
import { Weather } from './../Weather/weather';
import 'bootstrap/dist/css/bootstrap.min.css';

// Images
import CityImage from './../../images/city.png';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { city: 'City', humidity: '-', pressure: '-', temp: '-' }
        this.getCity = this.getCity.bind(this)
        this.fetchAPI = this.fetchAPI.bind(this)
    }

    getCity() {
        const city = document.getElementById('city').value;
        this.setState({ city: city })
    }

    convertToCelcius(kelvin) {
        return (kelvin - 273).toFixed(2);
    }

    fetchAPI() {
        const API_KEY = '77c7ae9c2ac84dff19c359c057fbf19b';
        const city = this.state.city;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

        fetch(url).then(res => res.json()).then((data) => {

            if (this.state.city) {
                this.setState({
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    temp: this.convertToCelcius(data.main.temp)
                });
            }

            else {
                alert('Please enter city name')
            }

        }).catch(err => alert(' Sorry! We dont have this city in our data'));

        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <div className="body">
                    <div className="container">

                        <div className="row text-center">
                            <div className="col-lg-4 inputForm">
                                <h4>Please enter your city name:</h4>

                                <form autoComplete="off" >
                                    <div className="form-group">
                                        <input type="" id="city" className="form-control" onChange={this.getCity} />
                                        <a className="btn btn-primary" href="# " onClick={this.fetchAPI}>
                                            <i className="fa fa-search" />
                                        </a>

                                    </div>
                                </form>

                                <img src={CityImage} alt="city" />

                                <div className="appDetails" >
                                    <small>All the weather data is generated by our systems and we do not claim it to be accurate.</small>
                                </div>

                            </div>

                            <div className="col-lg-8">
                                <div className="title">
                                    <Weather humidity={this.state.humidity} pressure={this.state.pressure} temp={this.state.temp} />
                                </div>

                                <div className="footer">
                                    <p>This application is developed by: Ankur Sharma</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;