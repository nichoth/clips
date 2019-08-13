var { h } = require('preact')
var evs = require('../EVENTS')

function Home (match) {
    return function HomeView (props) {
        console.log('props', props)
        return <div>
            home route... hello {props.hello}

            {props.files.seeding[0] ?
                ["seeding:",
                <ul className="source-videos">
                    <li className="video">
                        <video controls>
                            <source src={URL.createObjectURL(props.files.seeding[0])} type="video/mp4"></source>
                        </video>
                        <div>
                            {props.files.seeding[0].name}
                        </div>
                    </li>
                </ul>] :
                null
            }

            <form onSubmit={props.emit(evs.hello.world)}>
                <input type="file" name="file"
                    onChange={props.emit(evs.file.choose)} />

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

