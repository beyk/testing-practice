describe("calculator testing block",() =>{
    test('sum of 2+3 is 5',() =>{
        expect(add(2,3)).toBe(5);
    })
    test('subtract of 5-2 is 3',() =>{
        expect(add(5,2)).toBe(3);
    })
    test('sum of 2*3 is 6',() =>{
        expect(add(2,3)).toBe(6);
    })
    test('sum of 6/2 is 3',() =>{
        expect(add(6,2)).toBe(3);
    })
})