using System.Collections.Generic;
using System.Linq;

namespace Trips.Data
{
    public class TripService : ITripService
    {
        public void AddTrip(Trip trip)
        {
            Data.Trips.Add(trip);
        }

        public void DeleteTrip(int tripId)
        {
            var trip = GetTripById(tripId);
            Data.Trips.Remove(trip);
        }

        public List<Trip> GetAllTrips()
        {
            return Data.Trips;
        }

        public Trip GetTripById(int tripId)
        {
            return Data.Trips.FirstOrDefault(t => t.Id == tripId);
        }

        public void UpdateTrip(int tripId, Trip updatedTrip)
        {
            var trip = GetTripById(tripId);
            trip.Name = updatedTrip.Name;
            trip.Description = updatedTrip.Description;
            trip.DateStarted = updatedTrip.DateStarted;
            trip.DateCompleted = updatedTrip.DateCompleted;
        }
    }
}