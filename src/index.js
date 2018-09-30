module.exports = function getZerosCount(number) {
  if (number/5 >= 1) {
    return ~~(number/5) + getZerosCount(~~(number/5));
  } 
  else {
    return 0;
  }  
}
