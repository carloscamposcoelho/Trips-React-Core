import React, {Component} from 'react'
import axios from 'axios'

export class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            dateStarted: "",
            dateCompleted: ""
        }

        this.createTripUrl = "api/Trips/AddTrip";

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const {history} = this.props;

        let newTrip = {
            id: Math.floor(Math.random()*1000),
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted
        };

        axios.post(this.createTripUrl, newTrip).then(result => {
            history.push("/trips");
        });
    }

    render() {
        return(
            <div className="trip-form" >
            <h3>Add new trip</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Trip name:  </label>
                    <input 
                      name="name"
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.handleChange}
                     />
                </div>
                <div className="form-group">
                    <label>Trip description: </label>
                    <textarea type="text" 
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                </div>
                <div className="row">
                    <div className="col col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label>Date of start:  </label>
                            <input 
                              name="dateStarted"
                              type="date" 
                              className="form-control"
                              value={this.state.dateStarted}
                              onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <label>Date of completion:  </label>
                        <input 
                            name="dateCompleted"
                            type="date" 
                            className="form-control"
                            value={this.state.dateCompleted}
                            onChange={this.handleChange}
                        />
                        </div>
                    </div>
                </div>
                
                
                <div className="form-group">
                    <input type="submit" value="Add trip" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}