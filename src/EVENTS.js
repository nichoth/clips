var namespace = require('@nichoth/events/namespace')

var EVENTS = namespace({
    hello: ['world'],
    foo: ['foo'],
    file: ['choose', 'drop'],
    download: ['start'],
    buyAccount: ['submit'],
    login: ['submit', 'res']
})

module.exports = EVENTS

