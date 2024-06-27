const SOAP = 'Soap'
const WAX  = 'wax'

function Worker () {

  function execute (vehicle) { 
    vehicle.wash (SOAP)
    vehicle.wash (WAX)
  }

  return { execute }
  
}

export default Worker