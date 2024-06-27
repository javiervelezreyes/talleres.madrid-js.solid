const LIMIT = 80

function WShop (task) {

  function execute (vehicles) {
    let ok = true
    for (let vehicle of vehicles) {
      ok = ok && task.execute (vehicle, LIMIT)
    }
    return ok
  }

  return { execute }
  
}

export default WShop