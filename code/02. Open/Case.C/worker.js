function Worker () {

  function check (bike) {
    bike.start ()
    bike.stop  ()
  }

  function check (truck) {
    truck.start ()
    truck.stop  ()
  }

  function check (car) {
    car.start ()
    car.stop  ()
  }
  
  return { check }
  
}

export default Worker