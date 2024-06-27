function WShop () {

  function execute (vehicles) {
    for (let vehicle of vehicles) {
      vehicle.start ()
      vehicle.stop  ()
    }
  }

  return { execute }
  
}

export default WShop ()