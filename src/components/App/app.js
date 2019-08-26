import React from 'react';
import { Weather } from './../Weather/weather';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Weather />
            </React.Fragment>
        )
    }
}

export default App;