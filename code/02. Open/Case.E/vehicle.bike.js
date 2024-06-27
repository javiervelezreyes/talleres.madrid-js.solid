const START = 'Bike Start'
const STOP  = 'Bike Stop'

function Bike () {

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

export default Bike