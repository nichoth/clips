var { h } = require('preact')
var evs = require('../EVENTS')

function Register () {
    return function register (props) {
        var { emit } = props

        return <div>register</div>
    }
}

module.exports = Register
