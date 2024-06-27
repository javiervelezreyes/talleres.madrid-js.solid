import Vehicles from './provider.vehicles.js'

function WShop () {

  function execute () {
    for (let vehicle of Vehicles) {
      vehicle.start ()
      vehicle.stop  ()
    }
  }

  return { execute }
  
}

export default WShop ()