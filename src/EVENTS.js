var namespace = require('@nichoth/events/namespace')

var EVENTS = namespace({
    hello: ['world'],
    foo: ['foo'],
    chooseFile: ['choose']
})

module.exports = EVENTS

