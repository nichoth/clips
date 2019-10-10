var test = require('tape')
var Bus = require('@nichoth/events')
var evs = require('../src/EVENTS')
var connect = require('@nichoth/preact-connect')
var View = require('../src/view')
var State = require('../src/state')
var state = State()
var Effects = require('../src/subscribe')
var App = require('../src')

test('example', function (t) {
    // var bus = Bus({ memo: true })
    // connect({ state, bus, view: View })
    // Effects({ state, view: bus })

    // t.plan(1)

    t.pass('wooooooo')
    t.end()
})
