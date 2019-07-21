var namespace = require('@nichoth/events/namespace')

var EVENTS = namespace({
    hello: ['world'],
    foo: ['foo'],
    chooseFile: ['choose'],
    drop: ['drop']
})

module.exports = EVENTS

