import Service from './service.LL.js'

function Controller () {

 let service = Service ()
 let {has}   = service

 return {
  get    (id)       { return service.get (id, body)       },
  post   (body)     { !has (id) && service.set (id, body) },
  put    (id, body) {  has (id) && service.set (id, body) },
  delete (id)       {  has (id) && service.remove (id)    },
 }

}

export default Controller ()