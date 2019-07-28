var { h } = require('preact')
var evs = require('../EVENTS')

function Foo (match) {
    return function foo (props) {
        return <div>
            foo route... foo {props.foo}

            <form onSubmit={props.emit(evs.foo)}>
                <input type="file" name="file"
                    onChange={props.emit(evs.chooseFile.choose)} />
            </form>

            <div>
                <pre>
                    <code>
                        {JSON.stringify(props, null, 2)}
                    </code>
                </pre>
            </div>
        </div>
    }
}

module.exports = Foo


