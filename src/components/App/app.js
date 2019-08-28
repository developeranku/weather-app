import React from 'react';
import { Weather } from './../Weather/weather';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { city: 'City', humidity: '', pressure: '', temp: '' }
        this.getCity = this.getCity.bind(this)
        this.fetchAPI = this.fetchAPI.bind(this)
    }

    getCity() {
        const city = document.getElementById('city').value;
        this.setState({ city: city })
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
                    temp: data.main.temp
                });
            }

            else {
                alert('Please enter city name')
            }

        });

        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-4">

                            <form autoComplete="off">
                                <div className="form-group">
                                    <input type="" id="city" className="form-control" onChange={this.getCity} />
                                    <button className="btn btn-primary mt-2" href="# " onClick={this.fetchAPI}>Submit</button>
                                </div>
                            </form>

                        </div>

                        <div className="col-md-8">
                            <Weather
                                city={this.state.city}
                                humidity={this.state.humidity}
                                pressure={this.state.pressure}
                                temp={this.state.temp}
                            />
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;