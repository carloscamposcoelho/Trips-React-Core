import React, {Component} from 'react'
import axios from 'axios';

export class Trips extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            loading: true
        }

        this.getTripsUri = "api/Trips/GetTrips";
    }

    componentDidMount(){
        this.populateTripsData();
    }

    toLocalDateFormat(date){
        return(
            date ? new Date(date).toLocaleDateString() : "-"
        )
    }

    populateTripsData() {
        axios.get(this.getTripsUri).then(result => {
            const response = result.data;
            this.setState( {trips: response, loading: false})
        })

    }

    renderAllTrips(trips) {

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date started</th>
                        <th>Date completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map(trip => (
                        <tr key={trip.id}>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{this.toLocalDateFormat(trip.dateStarted)}</td>
                            <td>{this.toLocalDateFormat(trip.dateCompleted)}</td>
                            <td> - </td>
                        </tr>

                        ))
                    }

                </tbody>
            </table>
        )
    }

    render() {

        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
            this.renderAllTrips(this.state.trips)
        )

        return(
            <div>
                <h1>All trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>
        )
    }
}