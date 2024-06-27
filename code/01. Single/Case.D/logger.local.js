const DEBUG = '[DEBUG] -'
const INFO  = '[INFO]  -'
const ERROR = '[ERROR] -'
const FATAL = '[FATAL] -'

function Logger () {

  function debug (...messages) { console.log (DEBUG, ...messages) }
  function info  (...messages) { console.log (INFO,  ...messages) }
  function error (...messages) { console.log (ERROR, ...messages) }
  function fatal (...messages) { console.log (FATAL, ...messages) }

  return {
    debug,
    info,
    error,
    fatal
  }

}

export default Logger ()