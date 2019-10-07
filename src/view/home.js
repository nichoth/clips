var { h } = require('preact')
// var path = require('path')
var evs = require('../EVENTS')
// var extname = require('path').extname
// var concat = require('concat-stream')
var Preact = require('preact')

function Home (match) {
    return function HomeView (props) {
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
                            // if (torrent.file.name.emdsWith('.mp4')) {
                            //     return <Download torrent={torrent} />
                            //     return null
                                // torrent.file.appendTo('body')
                        })
                    }
                    {/* {props.files.downloading.map(function (torrent) {
                        return <Download torrent={torrent} />
                    })} */}
                </ul> :
                <div className="source-videos"><em>none</em></div>
            }
        </div>
    }
}

// class Download extends Preact.Component {
//     constructor(props) {
//       super(props);
//       this.myRef = Preact.createRef();
//     }

//     render() {
//       return <div ref={this.myRef} />;
//     }
//   }

  class Download extends Preact.Component {
    constructor (props) {
        super(props)
        this.myRef = Preact.createRef()
        this.append = this.append.bind(this)
    }

    append () {
        var { torrent } = this.props
        var file = torrent.files.find(function (file) {
            return file.name.endsWith ('.mp4')
        })
        var el = this.myRef
        file.appendTo(el)
    }

    componentDidMount () {
        this.append()
    }

    componentDidUpdate () {
        this.append()
    }

    render () {
        var { torrent } = this.props
        var file = torrent.files.find(function (file) {
            return file.name.endsWith ('.mp4')
        })
        return <li id={torrent.name} className="torrent" ref={c => this.myRef = c}>
            {torrent.name}
        </li>
    }
  }

module.exports = Home
