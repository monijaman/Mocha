import { expect } from 'chai';
import { capitalize, reverseString } from '../stringUtils.js';

describe('String Utils', () => {
    describe('capitalize', () => {
        it('should capitalize the first letter of a string', () => {
            const result = capitalize('hello');
            expect(result).to.equal('Hello');
        });

        it('should return an empty string if input is empty', () => {
            const result = capitalize('');
            expect(result).to.equal('');
        });

        it('should handle strings with one character', () => {
            const result = capitalize('a');
            expect(result).to.equal('A');
        });
    });

    describe('reverseString', () => {
        it('should reverse a string', () => {
            const result = reverseString('hello');
            expect(result).to.equal('olleh');
        });

        it('should return an empty string if input is empty', () => {
            const result = reverseString('');
            expect(result).to.equal('');
        });

        it('should handle strings with one character', () => {
            const result = reverseString('a');
            expect(result).to.equal('a');
        });
    });
});
