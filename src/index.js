var { h, render } = require('preact')
var connect = require('@nichoth/preact-connect')
var Bus = require('@nichoth/events')
var Effects = require('./subscribe')
var View = require('./view')
var evs = require('./EVENTS')
var State = require('./state')
var state = State()
var bus = Bus({ memo: true })
var effects = Effects({ state, view: bus })
var _view = connect({ state, bus, view: View })

function start () {
    render(h(_view), document.getElementById('content'))

    if (process.env.NODE_ENV === 'development') {
        window.app = {
            state,
            effects,
            view: bus,
            evs
        }
    }
}

start()

module.exports = start
