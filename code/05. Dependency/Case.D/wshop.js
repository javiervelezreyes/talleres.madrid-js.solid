function WShop (Worker) {

  function execute (vehicles) {
    for (let vehicle of vehicles) {
      Worker.execute (vehicle)
    }
  }

  return { execute }
  
}

export default WShop