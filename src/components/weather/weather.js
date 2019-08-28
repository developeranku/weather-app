import React from 'react';

export class Weather extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome</h1>
                <p>{this.props.humidity}</p>
                <p>{this.props.pressure}</p>
                <p>{this.props.temp}</p>
            </React.Fragment>
        )

    }
}

