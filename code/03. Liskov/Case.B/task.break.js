const TASK = 'Breaks'

function Task () {

  function execute (vehicle) {
    return ok (TASK, vehicle)
  }

  return { execute }
  
}

export default Task ()