const drill = require('./sort');
const chai = require('chai');
const expect = chai.expect;

describe('sort module', () => {
    it('should sort in ascending order', () => {
        const list = [3,2,5];
        const expectedAnswer = [2,3,5];
        const actualAnswer = drill(list)

        expect(actualAnswer).to.deep.equal(expectedAnswer);
    })
})