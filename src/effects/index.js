var catchRoutes = require('@nichoth/catch-routes')
var evs = require('../EVENTS')

function Effects ({ state, view }) {
    catchRoutes(function (parsedUrl) {
        state.route.set(parsedUrl)
    })

    var effects = {
        foo: function (ev) {
            ev.preventDefault()
            console.log('click', ev)
            var example = ev.target.elements.example
            state.homeRoute.hello.set(example.value)
        },

        chooseFile: function (ev) {
            // ev.preventDefault()
            console.log('file', ev.target.files)
        }
    }

    // listen for DOM events
    view.on(evs.hello.world, effects.foo)
    view.on(evs.chooseFile.choose, effects.chooseFile)


    return effects
}

module.exports = Effects

