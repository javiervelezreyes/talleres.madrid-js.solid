const START = 'Bike Start'
const STOP  = 'Bike Stop'
const WASH  = 'Bike Wash'

function Bike () {

  function start () { console.log (START) }
  function stop  () { console.log (STOP)  }
  function wash  () { console.log (WASH)  }

  return { 
    start,
    stop,
    wash
  }
  
}

export default Bike