var { h } = require('preact')
var evs = require('../EVENTS')

function Home (match) {
    return function HomeView (props) {
        return <div>
            home route... hello {props.hello}

            {props.files[0] ?
                <ul>
                    <li>{props.files[0].name}</li>
                </ul> :
                null
            }

            <form onSubmit={props.emit(evs.hello.world)}>
                <input type="file" name="file"
                    onChange={props.emit(evs.chooseFile.choose)} />

                <input type="text" name="example" />
                <button>Click</button>
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

module.exports = Home

