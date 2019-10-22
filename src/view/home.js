var { h } = require('preact')
var evs = require('../EVENTS')
var Preact = require('preact')

function Home (match) {
    return function HomeView (props) {
        return <div>
            <form>
                <input type="file" name="file"
                    onChange={props.emit(evs.file.choose)} />
            </form>
            {console.log(props.files.seeding[0] ? props.files.seeding[0][0] : null)}
            <div className="seed-videos">sharing:</div>

            {props.files.seeding[0] ?
                <ul className="source-videos">
                    <li className="video">
                        <video controls>
                            <source src={URL.createObjectURL(props.files.seeding[0][0])} type="video/mp4"></source>
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

            {props.files.downloading[0] ?
                <ul className="source-videos">
                    {
                        props.files.downloading.map(function (torrent) {
                            return <Download torrent={torrent} />
                        })
                    }
                </ul> :
                <div className="source-videos"><em>none</em></div>
            }
        </div>
    }
}

  class Download extends Preact.Component {
    constructor (props) {
        super(props)
        this.myRef = Preact.createRef()
        this.append = this.append.bind(this)
    }

    append () {
        console.log('props', this.props)
        var { torrent } = this.props
        var file = torrent.files.find(function (file) {
            return file.name.endsWith ('.mp4')
        })
        console.log('files', torrent.files)
        var el = this.myRef
        if (file) file.appendTo(el)
    }

    componentDidMount () {
        this.append()
    }

    componentDidUpdate () {
        this.append()
    }

    render () {
        var { torrent } = this.props
        // var file = torrent.files.find(function (file) {
        //     return file.name.endsWith ('.mp4')
        // })
        return <li id={torrent.name} className="torrent" ref={c => this.myRef = c}>
            {torrent.name}
        </li>
    }
  }

module.exports = Home
