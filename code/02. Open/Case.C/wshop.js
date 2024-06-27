import Worker from './worker.js'

function WShop () {

  function execute (vehicles) {
    for (let vehicle of vehicles) {
      Worker.check (vehicle)
    }
  }

  return { execute }
  
}

export default WShop ()