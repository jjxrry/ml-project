export const CopyButton = ({ asciiArt }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(asciiArt).then(() => {
            // render a tag with checkmark
            alert("copied!")
        }).catch(err => {
            console.log("copy error")
        })
    }

    return (
        <a onClick={handleCopy}>
            Copy Art
        </a>
    )
}
