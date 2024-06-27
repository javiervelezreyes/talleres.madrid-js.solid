function WShop () {

  function execute (checkables) {
    for (let checkable of checkables) {
      checkable.start ()
      checkable.stop  ()
    }
  }

  return { execute }
  
}

export default WShop ()