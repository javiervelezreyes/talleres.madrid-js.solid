function * Provider () {

  let vehicles = get ()

  for (let vehicle of vehicles) {
    yield vehicle
  }
  
}

export default Provider