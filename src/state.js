var { struct, observ } = require('./lib')

function State () {
    var state = struct({
        foo: struct({ foo: observ('bar') }),
        route: struct({}),
        files: struct({
            seeding: observ(null),
            downloading: observ([])
       })
    })

    return state
}

module.exports = State
