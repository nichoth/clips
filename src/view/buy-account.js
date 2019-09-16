var { h } = require('preact')
var evs = require('../EVENTS')

function BuyAccount (match) {

    return function buyAccount (props) {
        var { emit } = props

        return <form className="buy-account-form"
            onSubmit={emit(evs.buyAccount.submit)}
        >
            <label for="payment">payment stuff</label>
            <input name="payment" id="payment" />
            <div className="buttons">
                <button tyoe="submit">submit</button>
            </div>
        </form>
    }
}

module.exports = BuyAccount