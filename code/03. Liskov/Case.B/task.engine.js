const TASK = 'Engine'

function Task () {

  function execute (vehicle, limit) {
    return (limit > 80) && ok (TASK, vehicle)
  }

  return { execute }
  
}

export default Task ()