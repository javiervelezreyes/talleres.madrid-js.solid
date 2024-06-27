const START = 'Start'
const STOP  = 'Stop'
const BIKE  = 'Bike'
const TRUCK = 'Truck'
const CAR   = 'Car'

function Bike () {

  function start () { console.log (BIKE, START) }
  function stop  () { console.log (BIKE, STOP)  }

  return { 
    start,
    stop,
    check
  }
  
}

function Truck () {

  function start () { console.log (TRUCK, START) }
  function stop  () { console.log (TRUCK, STOP)  }

  return { 
    start,
    stop,
    check
  }
  
}

function Car () {

  function start () { console.log (CAR, START) }
  function stop  () { console.log (CAR, STOP)  }

  return { 
    start,
    stop,
    check
  }
  
}

export default { Bike, Truck, Car }