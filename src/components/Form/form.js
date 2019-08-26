import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: '' }
        this.readValue = this.readValue.bind(this);
    }

    readValue(e) {
        return this.setState({ city: e.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <label>City Name</label>
                        <input type="city" className="form-control" placeholder="Enter City Name" onChange={this.readValue} />
                        <a class="btn btn-primary" href='# ' role="button" onClick={this.handleClick}>Check Weather
                        </a>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

