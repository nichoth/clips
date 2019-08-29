var { h } = require('preact')
var path = require('path')
var evs = require('../EVENTS')
var extname = require('path').extname
var concat = require('concat-stream')

function Home (match) {
    return function HomeView (props) {
        console.log('props', props)
        return <div>
            <form>
                <input type="fie" name="file"
                    onChange={props.emit(evs.file.choose)} />
            </form>

        {console.log('seed', props.files.seeding[0])}

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
            <input type="text" name="magnet-uri" placeholder="magnet uri" />
            <button type="submit" value="download">
                Download
            </button>
        </form>

           <div className='download-videos'>downloading:</div>
            {console.log('downloading', props.files.downloading[0])}

            {props.files.downloading[0] ?
                <ul className="source-videos">
                    {props.files.downloading.map(function (torrent) {
                        console.log('torrent', torrent)
                        return <li className="video">
                            <video controls>
                                <source src={URL.createObjectURL(props.files.downloading[0].files[5])} type="video/mp4"></source>
                            </video>
                            <div>{torrent.name}</div>
                        </li>
                    })}
                </ul> :
                <div className="source-videos"><em>none</em></div>
            }
        </div>
    }
}

module.exports = Home

