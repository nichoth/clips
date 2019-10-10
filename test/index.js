var test = require('tape')
var Bus = require('@nichoth/events')
var Sub = require('../src/subscribe')
var State = require('../src/state')

var closeClient
function Before () {
    bus = Bus()
    var state =  State()
    var { close } = Sub({ state, view: bus, routes: function (path) {
        state.route.set(path)
    } })
    closeClient = close
    return state
}

test('init state', function (t) {
    t.plan(1)
    var state = Before()

    t.deepEqual(state(), {
        foo: { foo: 'bar' },
        route: {},
        files: {
            seeding: [],
            downloading: []
        }
    }, 'should have init state')

    closeClient()
})
