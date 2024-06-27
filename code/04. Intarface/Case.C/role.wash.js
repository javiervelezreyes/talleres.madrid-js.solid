function Role (vehicle) {

  let {wash} = vehicle
  let ok     = !!wash

  return ok && { 
    wash : vehicle.wash .bind (vehicle)
  } || {}
  
}

export default Role