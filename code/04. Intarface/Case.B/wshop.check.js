import Checable from './role.check.js'

function WShop () {

  function execute (vehicles) {
    for (let vehicle of vehicles) {
      let check = Checable (vehicle)
      check.start ()
      check.stop  ()
    }
  }

  return { execute }
  
}

export default WShop ()