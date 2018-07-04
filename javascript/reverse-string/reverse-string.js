const reverseString = function(str) {
  if (!str.length) {
    return str
  }

  str = str.split('')
  let newString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}

module.exports = reverseString
