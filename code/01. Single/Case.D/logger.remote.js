const DEBUG = '[DEBUG] -'
const INFO  = '[INFO]  -'
const ERROR = '[ERROR] -'
const FATAL = '[FATAL] -'
const SEP   = ' '

function Logger () {

  let box = Create ()

  function debug (...messages) { box.send ([DEBUG, ...messages].join (SEP)) }
  function info  (...messages) { box.send ([INFO , ...messages].join (SEP)) }
  function error (...messages) { box.send ([ERROR, ...messages].join (SEP)) }
  function fatal (...messages) { box.send ([FATAL, ...messages].join (SEP)) }

  return {
    debug,
    info,
    error,
    fatal
  }

}

export default Logger ()