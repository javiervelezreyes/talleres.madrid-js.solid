const GET    = 'Get'
const HAS    = 'Has'
const SET    = 'Set'
const REMOVE = 'Remove'

function Session (Logger) {

  let asJson = JSON.stringify
  let asData = JSON.parse
  let store  = localStorage 

  function get (id) {
    Logger.info (GET, id)
    return asData (store.getItem (id))
  }

  function has (id) {
    Logger.info (HAS, id)
    return !!get (id)
  }

  function set (id, value) {
    Logger.info (SET, id)
    store.setItem (id, asJson (value))
  }

  function remove (id) {
    Logger.info (REMOVE, id)
    delete store.removeItem (id)
  }

  return {
    get,
    has,
    set,
    remove
  }

}

export default Session (Logger)