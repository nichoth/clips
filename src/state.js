var { struct, observ } = require('./lib')

function State () {
    var state = struct({
        foo: struct({ foo: observ('bar') }),
        route: struct({}),
        homeRoute: struct({
            hello: observ('world'),
            files: struct({
                chosenFile: observ([])
            })
        })
    })

    return state
}

module.exports = State
