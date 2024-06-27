const GET    = 'Get'
const HAS    = 'Has'
const SET    = 'Set'
const REMOVE = 'Remove'
const INFO   = '[INFO] -'
const SEP    = ' '

function Service (Store) {

  let box = Create ()

  function info (...messages) { box.send ([INFO, ...messages].join (SEP)) }

  function get (id) {
    info (GET, id)
    Store.get (id)
  }

  function has (id) {
    info (HAS, id)
    Store.has (id)
  }

  function set (id, value) {
    info (SET, id)
    Store.set (id, value)
  }

  function remove (id) {
    info (REMOVE, id)
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