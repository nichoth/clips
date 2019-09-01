var { h } = require('preact')
var path = require('path')
var evs = require('../EVENTS')
var extname = require('path').extname
var concat = require('concat-stream')
var Preact = require('preact')

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

    }

    // append () {
    //     var el = this.myRef.current

    // }

    render () {
        var { torrent } = this.props
        var el = this.myRef.current
        var file = torrent.files.find(function (file) {
            return file.name.indexOf ('.mp4' > -1)
        })
        if (!file) return
        // ref={myRef => this.myRef = myRef}
        file.appendTo(el)
    // return <li className="video">
    //     <video controls>
    //         <source src={file.appendTo('body')} type="video/mp4"></source>
    //     </video>
    //     <div>{torrent.name}</div>
    // </li>
    }
  }

// function Download ({ torrent }) {
//     // console.log('torrent', torrent)
//     var file = torrent.files.find(function (file) {
//         return file.name.indexOf ('.mp4' > -1)
//     })
//     if (!file) return
//     file.appendTo('body')
//     // return <li className="video">
//     //     <video controls>
//     //         <source src={file.appendTo('body')} type="video/mp4"></source>
//     //     </video>
//     //     <div>{torrent.name}</div>
//     // </li>
// }

module.exports = Home

