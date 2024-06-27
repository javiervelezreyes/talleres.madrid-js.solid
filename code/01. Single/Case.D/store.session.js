function Store () {

  let asJson = JSON.stringify
  let asData = JSON.parse
  let store  = localStorage 

  function get (id) {
    return asData (store.getItem (id))
  }

  function has (id) {
    return !!get (id)
  }

  function set (id, value) {
    store.setItem (id, asJson (value))
  }

  function remove (id) {
    delete store.removeItem (id)
  }

  return {
    get,
    has,
    set,
    remove
  }

}

export default Store ()