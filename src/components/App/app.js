import React from 'react';
import { Weather } from './../Weather/weather';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { city: 'Gurgaon', weatherData: [] }
        this.getCity = this.getCity.bind(this);
        this.fetchAPI = this.fetchAPI.bind(this);
    }

    getCity() {
        this.setState({ city: document.getElementById('city').value })
    }

    fetchAPI() {
        const API_KEY = '77c7ae9c2ac84dff19c359c057fbf19b';
        let city = this.state.city;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
        fetch(url).then(res => res.json()).then(data => this.state.weatherData.push(data));
        console.log(this.state.weatherData);

    }



    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-4">

                            <form autoComplete="off" >
                                <div className="form-group">
                                    <input type="" id="city" className="form-control" onChange={this.getCity} />
                                    <a className="btn btn-primary mt-2" href="# " onClick={this.fetchAPI} >Submit</a>

                                </div>
                            </form>

                        </div>

                        <div className="col-md-8">
                            <Weather />
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;