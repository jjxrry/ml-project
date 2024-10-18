import '../ASCIIArtDisplay.css'

/**
 * @typedef {Object} ASCIIArtDisplayProps
 * @property {string} asciiArt - The ASCII art string to display.
 */

/**
 * Displays the ASCII art in a styled textarea.
 *
 * @param {ASCIIArtDisplayProps} props - The props object.
 * @param {string} props.asciiArt - The ASCII art string to display.
 * @returns {JSX.Element} The rendered component.
 */

export const ASCIIArtDisplay = ({ asciiArt }) => {
    return (
        <div className="ascii-art-container">
            <textarea
                value={asciiArt}
                readOnly
                className="ascii-art-textarea"
            />
        </div>
    )
}
