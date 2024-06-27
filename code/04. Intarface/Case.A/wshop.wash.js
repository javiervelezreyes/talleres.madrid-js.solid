const SOAP = 'Soap'
const WAX  = 'Wax'

function WShop () {

  function execute (washables) {
    for (let washable of washables) {
      washable.wash (SOAP)
      washable.wash (WAX)
    }
  }

  return { execute }
  
}

export default WShop ()