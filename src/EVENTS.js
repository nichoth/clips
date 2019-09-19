var namespace = require('@nichoth/events/namespace')

var EVENTS = namespace({
    hello: ['world'],
    foo: ['foo'],
    file: ['choose', 'drop'],
    download: ['start'],
    buyAccount: ['submit'],
    login: ['submit']
})

module.exports = EVENTS

