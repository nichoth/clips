var { h } = require('preact')

function BuyAccount (match) {

    return function buyAccount (props) {
        var { emit } = props

        return <form className="buy-account-form">
            <label for="payment">label</label>
            <input name="payment" id="payment" />
        </form>
    }
}

module.exports = BuyAccount