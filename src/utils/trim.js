export default (str, length = 120) => {
  return `${
    str.slice(0, length)
  }${
    (str.length > length) ? '...' : ''
  }`
};