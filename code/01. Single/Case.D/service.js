const GET    = 'Get'
const HAS    = 'Has'
const SET    = 'Set'
const REMOVE = 'Remove'

function Service (Store, Logger) {

  function get (id) {
    Logger.info (GET, id)
    return Store.get (id)
  }

  function has (id) {
    Logger.info (HAS, id)
    return Store.has (id)
  }

  function set (id, value) {
    Logger.info (SET, id)
     Store.set  (id, value)
  }

  function remove (id) {
    Logger.info   (REMOVE, id)
     Store.remove (id)
  }

  return {
    get,
    has,
    set,
    remove
  }

}

export default Service