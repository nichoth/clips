var test = require('tape')
var Bus = require('@nichoth/events')
var Sub = require('../src/subscribe')
var State = require('../src/state')
var flatten = require('@nichoth/events/flatten')

function Before () {
    bus = Bus()
    var state =  State()
    return state
}

test('example', function (t) {
    t.plan(1)
    var state = Before()

    t.deepEqual(state(), {
        foo: { foo: 'bar' },
        route: {},
        files: {
            seeding: [],
            downloading: []
        }
    })

    state = null
})
