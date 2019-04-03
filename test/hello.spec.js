const hello = require('../src/hello')
const expect = require('chai').expect

describe('hello', () => {
    const text = 'Hello World'
    it(`should return ${text} text`, () => {
        expect(hello()).equal(text)
    })
})