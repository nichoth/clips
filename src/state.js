var { struct, observ } = require('./lib')

function State () {
    var state = struct({
        foo: struct({ foo: observ('bar') }),
        hello: observ('world'),
        route: struct({}),
        files: struct({
            seeding: observ([]),
            downloading: observ([])
       })
    })

    return state
}

module.exports = State
