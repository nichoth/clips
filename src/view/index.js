var { h } = require('preact')
var evs = require('../EVENTS')
var router = require('../router')
var dragDrop = require('drag-drop')

function App (props) {
    if (process.env.NODE_ENV === 'development') {
        console.log('render', props)
    }

    var { emit } = props
    var RouteView = props.route.pathname ?
        router.getView(props.route.pathname) :
        null

    var routeState = props.route.pathname ?
        router.selectState(props, props.route.pathname) :
        null
    var files = props.files

    dragDrop('body', function (file) {
        console.log('drop', arguments)
        emit(evs.file.drop, file)
    })

    return <div className="app-content">
        <h1><a href="/">BEEFDAD.com</a></h1>

        <div className="login-link">
            <a href="login">Login</a>
        </div>
        <div className="buy-account">
            <a title="Buy an account" href="buy-account">$$$</a>
        </div>
        <RouteView files={files} hello={props.hello} {...routeState} emit={emit} />
    </div>
    
}

module.exports = App

