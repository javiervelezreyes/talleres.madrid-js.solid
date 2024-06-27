const GET    = 'Get'
const HAS    = 'Has'
const SET    = 'Set'
const REMOVE = 'Remove'

function Service (Logger) {

  let store = {}

  function get (id) {
    Logger.info (GET, id)
    return store[id]
  }

  function has (id) {
    Logger.info (HAS, id)
    return !!get (id)
  }

  function set (id, value) {
    Logger.info (SET, id)
    store[id] = value
  }

  function remove (id) {
    Logger.info (REMOVE, id)
    delete store[id]
  }

  return {
    get,
    has,
    set,
    remove
  }

}

export default Service