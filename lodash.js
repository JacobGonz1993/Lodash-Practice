"use strict"
const assert = require("assert")


var _ = require ("lodash")
//here's this dumb array
let arr = [1, 2, 3, 4]
console.log('here is the array')
console.log(arr)

//chunk
console.log('here is chunk')
let chunk = _.chunk(arr, 2)
console.log(chunk)

//here's reverse
console.log('here is reverse')
let reverse = _.reverse(arr)
console.log(reverse)

//here's without
console.log('heres without 2 and 4')
let without = _.without((arr), 2, 4)
console.log(without)

//here's shuffle
console.log('heres shuffle')
let shuffle = _.shuffle(arr)
console.log(shuffle)

//here's head
console.log('heres head')
let head = _.head(arr)
console.log(head)

//tests
describe('lodash', function() {
    it('chunk', function() {
        assert.deepEqual(chunk, [[1,2],[3,4]]);
    })
    it('reverse', function() {
        assert.deepEqual(reverse, [4, 3, 2, 1])
    })
    it('without', function() {
        assert.deepEqual(without, [3, 1])
    })
    it('shuffle', function() {
        assert.deepEqual(!shuffle, !arr)
    })
    it('head', function() {
        assert.deepEqual(head, 4)
    })
})