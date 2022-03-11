function stringLength(string) {
  if(string.length < 1 || string.length > 10) {
    throw new Error('the string does not meet the reqs')
  } else {
    return string.length;
  }
}

function reverseString(string) {
  return string.split('').reverse().join('');
}
module.exports = {
  stringLength,
  reverseString
};
// console.log(stringLength("036547896"))
// console.log(reversString("01236547896"))