function stringLength(string)
{
  if(string.length>0 && string.length<10){
    return  string.length;
    }
  else
    throw new Error('the string does not meet the reqs')
}
module.exports = stringLength;
//console.log(stringLength("dgi"))