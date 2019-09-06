var test = require('tape')
var Bus = require('@nichoth/events')
var Sub = require('../src/subscribe')
var State = require('../src/state')
// var flatten = require('@nichoth/events/flatten')

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
    })

    closeClient()
})
