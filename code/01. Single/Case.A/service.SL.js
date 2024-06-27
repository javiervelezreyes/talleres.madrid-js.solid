const GET    = 'Get'
const HAS    = 'Has'
const SET    = 'Set'
const REMOVE = 'Remove'
const INFO   = '[INFO] -'

function Service () {

  function info (...messages) { console.log (INFO, ...messages) }

  let asJson = JSON.stringify
  let asData = JSON.parse
  let store  = localStorage 

  function get (id) {
    info (GET, id)
    return asData (store.getItem (id))
  }

  function has (id) {
    info (HAS, id)
    return !!get (id)
  }

  function set (id, value) {
    info (SET, id)
    store.setItem (id, asJson (value))
  }

  function remove (id) {
    info (REMOVE, id)
    delete store.removeItem (id)
  }

  return {
    get,
    has,
    set,
    remove
  }

}

export default Service ()