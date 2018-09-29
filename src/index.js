module.exports = function getZerosCount(number) {
  if (number/5 >= 1) {return Math.floor(number/5) + getZerosCount(Math.floor(number/5))} else return 0
}
