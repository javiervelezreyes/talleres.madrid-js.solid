const TASK = 'Breaks'

function Task () {

  function doBreak (vehicle) {
    return ok (TASK, vehicle)
  }

  return { doBreak }
  
}

export default Task ()