import React from 'react';

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Gurgaon&APPID=77c7ae9c2ac84dff19c359c057fbf19b';

const weatherData = []

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: '' };
    }

    componentDidMount() {
        fetch(url).then(res => res.json()).then(data => weatherData.push(data));
        console.log(weatherData);
    }

    render() {
        return <h1>Welcome to Weather App</h1>
    }
}

export default Weather;