function WShop (task) {

  function execute (vehicles) {
    return vehicles.every (task.execute)
  }

  return { execute }
  
}

export default WShop