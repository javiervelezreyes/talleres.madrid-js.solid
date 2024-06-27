const START = 'Truck Start'
const STOP  = 'Truck Stop'
const WASH  = 'Truck Wash'

function Truck () {

  function start () { console.log (START) }
  function stop  () { console.log (STOP)  }
  function wash  () { console.log (WASH)  }

  return { 
    start,
    stop,
    wash
  }
  
}

export default Truck