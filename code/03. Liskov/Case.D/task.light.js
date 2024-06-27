const TASK = 'Lights'

function Task () {

  function execute (vehicle) {
    console.log (TASK, vehicle)
  }

  return { execute }
  
}

export default Task ()