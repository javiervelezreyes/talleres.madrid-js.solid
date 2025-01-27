import Checkable from './role.check.js'

function WShop () {

  function execute (vehicles) {
    for (let vehicle of vehicles) {
      let check = Checkable (vehicle)
      check.start ()
      check.stop  ()
    }
  }

  return { execute }
  
}

export default WShop ()