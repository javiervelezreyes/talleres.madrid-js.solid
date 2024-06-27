function Role (vehicle) {

  let {start} = vehicle
  let {stop}  = vehicle
  let ok      = !!start && !!stop

  return ok && { 
    start : vehicle.start .bind (vehicle),
    stop  : vehicle.stop  .bind (vehicle)
  } || {}
  
}

export default Role