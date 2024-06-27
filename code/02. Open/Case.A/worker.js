const BIKE  = 'Bike'
const TRUCK = 'Truck'
const CAR   = 'Car'

function Worker () {

  function check (vehicle) {
    let type = vehicle.type ()
    if (type == BIKE) {
      vehicle.start ()
      vehicle.stop  ()
    }
    if (type == TRUCK) {
      vehicle.start ()
      vehicle.stop  ()
    }
    if (type == CAR) {
      vehicle.start ()
      vehicle.stop  ()
    }
  }

  return { check }
  
}

export default Worker