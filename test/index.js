var test = require('tape')
var Bus = require('@nichoth/events')
var Sub = require('../src/subscribe')
var State = require('../src/state')
var parseTorrent = require('parse-torrent')

// var closeClient
function Before () {
    bus = Bus()
    var state =  State()
    var { close, effects } = Sub({ state, view: bus, routes: function (path) {
        state.route.set(path)
    } })
    // closeClient = close
    return { state, bus, close, effects }
}

test('init state', function (t) {
    t.plan(1)
    var { state, close } = Before()

    t.deepEqual(state(), {
        foo: { foo: 'bar' },
        route: {},
        files: {
            seeding: [],
            downloading: []
        }
    }, 'should have init state')

    close()
})

test('transfer', function (t) {
    t.plan(1)
    var path = __dirname + '/SampleVideo_1280x720_2mb.mp4'
    var client = Before()              // .effects
    var client2 = Before() //.effects
    client.effects.seed(path, function onSeed (torrent) {
        console.log('on seed')
        var parsed = parseTorrent(torrent)
        parsed.announce = 'http://tracker.local:80'                  
        client2.effects.download(parsed, function ondownload (err, torrent2) {
            t.equal(parsed.infoHash, torrent2.infoHash)
            client.close()
            client2.close()
        })
    })
})
