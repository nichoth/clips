var test = require('tape')
var Bus = require('@nichoth/events')
var evs = require('../src/EVENTS')
var connect = require('@nichoth/preact-connect')
var View = require('../src/view')
var State = require('../src/state')
var state = State()
var Effects = require('../src/subscribe')


test('example', function (t) {
    t.pass('wooooooo')
    t.end()

    var bus = Bus({ memo: true })
    connect({ state, bus, view: View })
    Effects({ state, view: bus })
})
