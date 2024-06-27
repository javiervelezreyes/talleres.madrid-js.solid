const START = 'Car Start'
const STOP  = 'Car Stop'

function Car () {

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

export default Car