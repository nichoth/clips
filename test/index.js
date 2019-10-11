var test = require('tape')
var Bus = require('@nichoth/events')
var Sub = require('../src/subscribe')
var State = require('../src/state')

// var closeClient
function Before () {
    bus = Bus()
    var state =  State()
    var { close } = Sub({ state, view: bus, routes: function (path) {
        state.route.set(path)
    } })
    closeClient = close
    return { state, bus, close }
}

test('init state', function (t) {
    t.plan(1)
    var { state, close } = Before()

    t.deepEqual(state(), {
        foo: { foo: 'bar' },
        route: {},
        files: {
            seeding: [],
            downloading: []
        }
    }, 'should have init state')

    close()
})

test('transfer', function (t) {
    t.plan(1)
    var { bus, state } = Before()
    var client2 = Before()
    client2.on('torrent', function (torrent) {
        console.log('torrent', torrent)
    })
    client2.close()
})
