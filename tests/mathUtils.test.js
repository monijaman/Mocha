import { expect } from 'chai';
import { add, multiply } from '../mathUtils.js';

describe('Math Utils', () => {
    it('should correctly add two numbers', () => {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });

    it('should correctly multiply two numbers', () => {
        const result = multiply(2, 3);
        expect(result).to.equal(6);
    });
});
