const { expect, test } = require("@jest/globals");
const stringLength = require("./stringLength");
const strLength = require("./stringLength");
const testStr="hello";
test("The length of Hello is 5",() =>{
    return expect(stringLength(testStr)).toBe(5);
})