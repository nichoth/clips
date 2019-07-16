var { h } = require('preact')
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

    dragDrop('body', function (file) {
        console.log('drop', arguments)
        emit('drop', file)
    })

    return <div>
        <div className="app-content">
            <RouteView {...routeState} emit={emit} />
        </div>
    </div>
}

module.exports = App

