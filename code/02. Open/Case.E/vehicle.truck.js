const START = 'Truck Start'
const STOP  = 'Truck Stop'

function Truck () {

  function start () { console.log (START) }
  function stop  () { console.log (STOP)  }
  function check () {
    this.start ()
    this.stop  ()
  }

  return { 
    start,
    stop,
    check
  }
  
}

export default Truck