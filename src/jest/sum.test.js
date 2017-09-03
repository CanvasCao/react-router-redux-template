const sum = require('./sum')

describe('the can', () => {
    test('has 12 ounces', () => {
        expect(sum(1,2)).toBe(3);
    });

    test('has a sophisticated name', () => {
        expect(sum(1,2)).toBe(3);
    });
});