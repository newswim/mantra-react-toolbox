const catchErrors = (
  fn,
  rethrow = true
) => {
  return (...props) => {
    try {
      return fn.apply(null,props)
    } catch (e) {
      console.error(e.stack)
      if (rethrow) {
        throw e
      }
    }
  }
}

export default catchErrors
