import { useState } from 'react'
import './App.css'
import { convertImageToASCII } from './api/api'
import { FileUpload } from './components/FileUpload'
import { Controls } from './components/Controls'
import { ASCIIArtDisplay } from './components/ASCIIArtDisplay'
import { UserGui } from './components/UserGui'

function App() {
    // const [file, setFile] = useState(null)
    // const [asciiArt, setAsciiArt] = useState('')
    // const [loading, setLoading] = useState(false)
    // const [width, setWidth] = useState(100)
    // const [height, setHeight] = useState(null)
    // const [charset, setCharset] = useState("@%#*+=-:. ")
    //
    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //         setFile(e.target.files[0])
    //         setAsciiArt('')
    //     }
    // }
    // const handleConvert = async () => {
    //     if (!file) {
    //         console.log("please upload file")
    //         return
    //     }
    //
    //     setLoading(true)
    //     setAsciiArt('')
    //
    //     try {
    //         const art = await convertImageToASCII(file, width, height, charset)
    //         setAsciiArt(art)
    //         console.log("successful conversion")
    //     } catch (e) {
    //         console.log(`Conversion failed: ${e.message}`)
    //     } finally {
    //         setLoading(false)
    //     }
    // }
    return (
        <div className="App">
            <UserGui />
            {/* <h1>ASCII Image</h1> */}
            {/**/}
            {/* <h2>Convert Image to ASCII</h2> */}
            {/* <FileUpload onFileChange={handleFileChange} /> */}
            {/* <Controls */}
            {/*     width={width} */}
            {/*     setWidth={setWidth} */}
            {/*     height={height} */}
            {/*     setHeight={setHeight} */}
            {/*     charset={charset} */}
            {/*     setCharset={setCharset} */}
            {/* /> */}
            {/* <button onClick={handleConvert} disabled={!file || loading} style={{ marginTop: '10px' }}> */}
            {/*     {loading ? 'Converting...' : 'Convert to ASCII'} */}
            {/* </button> */}
            {/* {loading && <p>Converting your image to ASCII art. Please wait...</p>} */}
            {/* {asciiArt && <ASCIIArtDisplay asciiArt={asciiArt} />} */}
        </div>
    )
}

export default App
