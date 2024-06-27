const SOAP = 'Soap'
const WAX  = 'Wax'

function WShop () {

  function execute (vehicles) {
    for (let vehicle of vehicles) {
      vehicle.wash (SOAP)
      vehicle.wash (WAX)
    }
  }

  return { execute }
  
}

export default WShop ()