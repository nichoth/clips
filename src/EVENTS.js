var namespace = require('@nichoth/events/namespace')

var EVENTS = namespace({
    hello: ['world'],
    foo: ['foo'],
    file: ['choose', 'drop'],
    chooseFile: ['choose'],
    drop: ['drop']
})

module.exports = EVENTS

