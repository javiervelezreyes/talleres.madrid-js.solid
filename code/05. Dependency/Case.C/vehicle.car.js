const START = 'Car Start'
const STOP  = 'Car Stop'
const WASH  = 'Car Wash'

function Car () {

  function start () { console.log (START) }
  function stop  () { console.log (STOP)  }
  function wash  () { console.log (WASH)  }

  return { 
    start,
    stop,
    wash
  }
  
}

export default Car