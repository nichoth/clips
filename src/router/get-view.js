var Router = require('ruta3')
var Home = require('../view/home')
var Foo = require('../view/foo')

function GetView () {
    var router = Router()

    router.addRoute('/', Home)
    router.addRoute('/foo', Foo)

    return function getView (pathname) {
        var match = router.match(pathname)
        if (!match) throw new Error('route miss: ' + pathname)
        return match.action(match)
    }
}

module.exports = GetView

