import Washable from './role.wash.js'

const SOAP = 'Soap'
const WAX  = 'Wax'

function WShop () {

  function execute (vehicles) {
    for (let vehicle of vehicles) {
      let wash = Washable (vehicle)
      wash.wash (SOAP)
      wash.wash (WAX)
    }
  }

  return { execute }
  
}

export default WShop ()