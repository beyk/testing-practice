
const stringLength = require("./stringLength");

const testStr="hello";
test("The length of Hello is 5",() =>{
     expect(stringLength(testStr)).toBe(5);
})

 test("The string is too short",()=>{
     expect(() => {stringLength('');}).toThrowError(new Error('the string does not meet the reqs'));;
 })

 test("The string is too long",()=>{
    expect(() => {stringLength('12345678901');}).toThrowError(new Error('the string does not meet the reqs'));;
})