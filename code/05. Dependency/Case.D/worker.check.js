function Worker () {

  function execute (vehicle) { 
    vehicle.start ()
    vehicle.stop  ()
  }

  return { execute }
  
}

export default Worker