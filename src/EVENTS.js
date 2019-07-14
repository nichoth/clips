var namespace = require('@nichoth/events/namespace')

var EVENTS = namespace({
    hello: ['world'],
    chooseFile: ['choose']
})

module.exports = EVENTS

