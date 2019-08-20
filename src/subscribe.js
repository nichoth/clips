var catchRoutes = require('@nichoth/catch-routes')
var evs = require('./EVENTS')
var Webtorrent = require('webtorrent')

function Effects ({ state, view }) {
    catchRoutes(function (parsedUrl) {
        state.route.set(parsedUrl)
    })

    var client = new Webtorrent()

    var effects = {
        foo: function (ev) {
            ev.preventDefault()
            console.log('click', ev)
            var example = ev.target.elements.example
            state.files.hello.set(example.value)
        },
        chooseFile: function (ev) {
            // ev.preventDefault()
            console.log('file', ev.target.files)
            seed(ev.target.files, function (torrent) {
                console.log('seeeding', torrent)
            })
            state.files.seeding.set(ev.target.files)
        },

        onDrop: function (ev) {
            console.log('on drop', ev)
            seed(ev.target.files, function (torrent) {
                console.log('seeeding', torrent)
            })
            state.files.seeding.set(ev.target.files)
        }
    }
    client.on('error', function (err) {
        console.log('error', err)
    })

   function seed (files, cb) {
        client.seed(files, cb)
    }

    function download (magnetURI, cb) {
        client.add(magnetURI, function (torrent) {
            console.log('here', magnetURI)
            emmit(evs.download.start, torrent)
            console.log('download', torrent)
            cb(null, torrent)
        })
    }

    // listen for DOM events
    view.on(evs.hello.world, effects.foo)
    view.on(evs.file.choose, effects.chooseFile)
    view.on(evs.file.drop, effects.onDrop)
    view.on(evs.download.start, function (ev) {

        console.log('download', ev)
    })


    return effects
}

module.exports = Effects

