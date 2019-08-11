var { struct, observ } = require('./lib')

function State () {
    var state = struct({
        foo: struct({ foo: observ('bar') }),
        route: struct({}),
        files: struct({
            hello: observ('world'),
            seeding: observ([]),
            downloading: observ([])
       })
    })

    return state
}

module.exports = State
