exports.format = (status, result = null, errors = {}) => {
  return {
    status,
    result,
    errors,
  }
}
