const { stringLength, reverseString } = require('./stringLength.js');

describe('stringFunctions',() => {
test("The length of Hello is 5",() =>{
     expect(stringLength("Hello")).toBe(5);
})

 test("The string is too short",()=>{
     expect(() => {stringLength('');}).toThrowError(new Error('the string does not meet the reqs'));
 })

 test("The string is too long",()=>{
    expect(() => {stringLength('this text is too long');}).toThrowError(new Error('the string does not meet the reqs'));
})
test('"messi" reversed should be "issem"', () => {
    expect(reverseString('messi')).toMatch('issem');
  });
// // test("hello must be reversed to olleh",() =>{
// //     expect(reversString("hello")).toMatch("olleh");
// // })
})