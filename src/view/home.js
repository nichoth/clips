var { h } = require('preact')
var evs = require('../EVENTS')

function Home (match) {
    return function HomeView (props) {
        console.log('props', props)
        return <div>
            <form>
                <input type="file" name="file"
                    onChange={props.emit(evs.file.choose)} />
            </form>

        <div className="seed-videos">sharing:</div>
            {props.files.seeding[0] ?
                <ul className="source-videos">
                    <li className="video">
                        <video controls>
                            <source src={URL.createObjectURL(props.files.seeding[0])} type="video/mp4"></source>
                        </video>
                        <div>
                            {props.files.seeding[0].name}
                        </div>
                        </li>
                </ul> :
                <div className="source-videos"><em>none</em></div>
            }

        <form onSubmit={props.emit(evs.download.start)}>
            <input type="text" name="magnet-uri" />
            <button type="submit" value="download">
                Download
            </button>
        </form>

           <div className='download-videos'>downloading:</div>
            {props.files.seeding[0] ?
                <ul className="source-videos">
                    <li className="video">
                        <video controls>
                            <source src={URL.createObjectURL(props.files.seeding[0])} type="video/mp4"></source>
                        </video>
                        <div>
                            {props.files.seeding[0].name}
                        </div>
                        </li>
                </ul> :
                <div className="source-videos"><em>none</em></div>
            }

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

