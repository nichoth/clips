var Router = require('ruta3')
var Home = require('../view/home')
var Foo = require('../view/foo')
var BuyAccount = require('../view/buy-account')
var Login = require('../view/login')

function GetView () {
    var router = Router()

    router.addRoute('/', Home)
    router.addRoute('/foo', Foo)
    router.addRoute('/buy-account', BuyAccount)
    router.addRoute('/login', Login)

    return function getView (pathname) {
        var match = router.match(pathname)
        if (!match) throw new Error('route miss: ' + pathname)
        return match.action(match)
    }
}

module.exports = GetView

