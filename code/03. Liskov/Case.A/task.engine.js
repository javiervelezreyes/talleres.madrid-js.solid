const TASK = 'Engine'

function Task () {

  function doEngine (vehicle) {
    return ok (TASK, vehicle)
  }

  return { doEngine }
  
}

export default Task ()