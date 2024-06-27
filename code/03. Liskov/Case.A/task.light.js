const TASK = 'Lights'

function Task () {

  function doLight (vehicle) {
    return ok (TASK, vehicle)
  }

  return { doLight }
  
}

export default Task ()