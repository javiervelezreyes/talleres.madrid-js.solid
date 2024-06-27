const START = 'Start'
const STOP  = 'Stop'
const BIKE  = 'Bike'
const TRUCK = 'Truck'
const CAR   = 'Car'

function Bike () {

  function type  () { return BIKE }
  function start () { console.log (BIKE, START) }
  function stop  () { console.log (BIKE, STOP)  }

  return {
    type,
    start,
    stop,
    check
  }
  
}

function Truck () {

  function type  () { return TRUCK }
  function start () { console.log (TRUCK, START) }
  function stop  () { console.log (TRUCK, STOP)  }

  return { 
    type,
    start,
    stop,
    check
  }
  
}

function Car () {

  function type  () { return CAR }
  function start () { console.log (CAR, START) }
  function stop  () { console.log (CAR, STOP)  }

  return { 
    type,
    start,
    stop,
    check
  }
  
}

export default { Bike, Truck, Car }