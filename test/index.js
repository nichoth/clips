var test = require('tape')
var Bus = require('@nichoth/events')
var Sub = require('../src/subscribe')
var State = require('../src/state')

function Before () {
    var bus = Bus()
    var state =  State()
    var on = bus.on.bind(bus, 'route')
    Sub({ view: bus, state, routes: on })
    return state
}

test('example', function (t) {
    var state = Before()

    t.deepEqual(state(), {
        foo: { foo: 'bar' },
        route: {},
        files: {
            seeding: [],
            downloading: []
        }
    })
})

