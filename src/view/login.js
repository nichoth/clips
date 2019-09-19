var { h } = require('preact')
var evs = require('../EVENTS')

function Login (match) {
    return function Login (props) {
        var { emit } = props

        return <form className="login-form" onSubmit={emit(evs.login.submit)}>
            <label for="username">username</label>
            <input name="username" id="username" />
            <div className="buttons">
                <button tyoe="submit">submit</button>
            </div>
        </form>
    }
}

module.exports = Login
