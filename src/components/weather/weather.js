import React from 'react';

const API_KEY = '77c7ae9c2ac84dff19c359c057fbf19b';

const url = `http://api.openweathermap.org/data/2.5/forecast?q=Gurgaon&APPID=${API_KEY}`;
console.log(url);
class Weather extends React.Component {
    render() {
        return <h1>Welcome to Weather App</h1>
    }
}

export default Weather;