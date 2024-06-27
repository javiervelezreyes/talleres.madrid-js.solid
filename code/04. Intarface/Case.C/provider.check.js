import Checkable from './role.check.js'

function * Provider (vehicles) {

  for (let vehicle of vehicles) {
    yield Checkable (vehicle)
  }
  
}

export default Provider