var { h } = require('preact')
var evs = require('../EVENTS')

function Home (match) {
    return function HomeView (props) {
        console.log('props', props)
        return <div>
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

            <form>
                <input type="file" name="file"
                    onChange={props.emit(evs.file.choose)} />
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

