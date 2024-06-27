const GET    = 'Get'
const HAS    = 'Has'
const SET    = 'Set'
const REMOVE = 'Remove'
const INFO   = '[INFO] -'
const SEP    = ' '

function Service () {

  let box   = Create ()
  let store = {}

  function info  (...messages) { box.send ([INFO , ...messages].join (SEP)) }

  function get (id) {
    info (GET, id)
    return store[id]
  }

  function has (id) {
    info (HAS, id)
    return !!get (id)
  }

  function set (id, value) {
    info (SET, id)
    store[id] = value
  }

  function remove (id) {
    info (REMOVE, id)
    delete store[id]
  }

  return {
    get,
    has,
    set,
    remove
  }

}

export default Service ()