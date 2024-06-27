import Store   from './store.local.js'
import Service from './service.local.js'

function Controller () {

 let service = Service (Store)
 let {has}   = service

 return {
  get    (id)       { return service.get (id, body)       },
  post   (body)     { !has (id) && service.set (id, body) },
  put    (id, body) {  has (id) && service.set (id, body) },
  delete (id)       {  has (id) && service.remove (id)    },
 }

}

export default Controller ()