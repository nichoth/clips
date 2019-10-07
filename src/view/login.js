var { h } = require('preact')
var evs = require('../EVENTS')

function Login (match) {
    return function Login (props) {
        var { emit } = props

        return <form className="login-form" onSubmit={emit(evs.login.submit)}>
            <div className="login-section">
                <label for="username">username</label>
                <input name="username" id="username" />
            </div>

            <div className="login-section">
                <label for="password">password</label>
                <input type="password" name="password" id="password" />
            </div>

            <div className="buttons">
                <button tyoe="submit">submit</button>
            </div>
        </form>
    }
}

module.exports = Login
