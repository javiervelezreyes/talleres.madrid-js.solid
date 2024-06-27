function WShop () {

  function execute (vehicles) {
    for (let vehicle of vehicles) {
      vehicle.check ()
    }
  }

  return { execute }
  
}

export default WShop ()