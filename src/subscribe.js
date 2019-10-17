var catchRoutes = require('@nichoth/catch-routes')
var evs = require('./EVENTS')
var Webtorrent = require('webtorrent')

function Effects ({ state, view, routes }) {
    var onRoute = routes || catchRoutes
    onRoute(function (parsedUrl) {
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

        seed: function (files, cb) {
            // ev.preventDefault()
            client.seed(files, function (torrent) {
                // console.log('seeeding', torrent)
                // console.log('magnet', torrent.magnetURI)
                state.files.seeding.set(
                    state.files.seeding().concat(files)
                )
                if (cb) cb(torrent)
                // @TODO show magnet in UI
            })
        },

        onDrop: function (ev) {
            console.log('on drop', ev)
            // client.seed(ev.target.files, function (torrent) {
            //     console.log('seeeding', torrent)
            // })
            state.files.seeding.set(ev.target.files)
        },

        download: download
    }
    client.on('error', function (err) {
        console.log('error', err)
    })

    function download (magnetURI, cb) {
        client.add(magnetURI, function (torrent) {
            // console.log('speed', torrent.downloadSpeed)
            // @todo update the spped/state periodically
            // console.log('path', torrent.path)
            // var i = state.files.downloading().length
            var newState = state.files.downloading().concat(torrent)
            state.files.downloading.set(newState)
            cb(null, torrent)
        })
    }
    
    var link = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

    // listen for DOM events
    view.on(evs.hello.world, effects.foo)
    view.on(evs.file.choose, function (ev) {
        effects.seed(ev.target.files)
    })
    view.on(evs.file.drop, effects.onDrop)
    view.on(evs.download.start, function (ev) {
        ev.preventDefault()
        download(link, function (err, torrent) {
            if (err) throw err
        })
    })
    view.on(evs.buyAccount.submit, function (ev) {
        ev.preventDefault()
        console.log(ev.target.elements.payment.value)
        console.log('state', state())
    })

    view.on(evs.login.submit, function (ev) {
        ev.preventDefault()
        if (process.env.NODE_ENV === 'development') {
            // set state login ok
        }
        // set state with resolving so you can show a spinner
        // call api
        process.nextTick(function () {
            // set state with login stuff
            console.log('login', ev.target.username.value)
        })
    })

    function close (cb) {
        client.destroy(cb)
    }

    return { effects, events: evs, close }
}

module.exports = Effects
