import Washable from './role.wash.js'

function * Provider (vehicles) {

  for (let vehicle of vehicles) {
    yield Washable (vehicle)
  }
  
}

export default Provider