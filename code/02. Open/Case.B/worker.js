function Worker () {

  let Check = { Bike, Truck, Car }

  function Bike (vehicle) {
    vehicle.start ()
    vehicle.stop  ()
  }

  function Truck (vehicle) {
    vehicle.start ()
    vehicle.stop  ()
  }

  function Car (vehicle) {
    vehicle.start ()
    vehicle.stop  ()
  }

  function check (vehicle) {
    let {type} = vehicle
    return Check[type ()](vehicle)
  }

  return { check }
  
}

export default Worker