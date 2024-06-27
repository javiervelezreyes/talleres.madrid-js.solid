function WShop (task) {

  function execute (vehicles) {
    let ok = true
    for (let vehicle of vehicles) {
      ok = ok && task.doBreak  && task.doBreak  (vehicle)
      ok = ok && task.doEngine && task.doEngine (vehicle)
      ok = ok && task.doLigth  && task.doLigth  (vehicle)
    }
    return ok
  }

  return { execute }
  
}

export default WShop