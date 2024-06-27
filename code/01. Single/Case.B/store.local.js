function Store () {

  let store = {}

  function get (id) {
    return store[id]
  }

  function has (id) {
    return !!get (id)
  }

  function set (id, value) {
    store[id] = value
  }

  function remove (id) {
    delete store[id]
  }

  return {
    get,
    has,
    set,
    remove
  }

}

export default Store ()