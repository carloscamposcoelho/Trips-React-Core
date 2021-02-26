using Microsoft.AspNetCore.Mvc;
using Trips.Data;

namespace Trips.Controllers
{
    [Route("api/[controller]")]
    public class TripsController : Controller
    {
        private ITripService _service;
        public TripsController(ITripService service)
        {
            _service = service;
        }
        
        [HttpGet("GetTrips")]
        public IActionResult GetTrips()
        {
            var trips = _service.GetAllTrips();
            return Ok(trips);
        }

        [HttpGet("SingleTrip/{id}")]
        public IActionResult GetTripById(int id)
        {
            var trip = _service.GetTripById(id);
            return Ok(trip);
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody]Trip trip)
        {
            if (trip != null)
            {
                _service.AddTrip(trip);
            }
            return Ok();
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, Trip trip)
        {
            _service.UpdateTrip(id, trip);
            return Ok();
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int tripId)
        {
            _service.DeleteTrip(tripId);
            return Ok();
        }
    }
}