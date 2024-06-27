const START = 'Bike Start'
const STOP  = 'Bike Stop'

function Bike () {

  function start () { console.log (START) }
  function stop  () { console.log (STOP)  }
  
  return { 
    start,
    stop
  }
  
}

export default Bike