import React from 'react';
import { Form } from './../Form/form';

const API_KEY = '77c7ae9c2ac84dff19c359c057fbf19b';
const url = `http://api.openweathermap.org/data/2.5/forecast?q=Gurgaon&APPID=${API_KEY}`;

export class Weather extends React.Component {

    componentDidMount() {
        fetch(url).then(res => res.json()).then(data => console.log(data))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Form />
                    </div>
                    <div className="col-md-8">
                        <h1>Welcome to Weather App</h1>
                    </div>
                </div>
            </div>
        )

    }
}

