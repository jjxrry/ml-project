export const Controls = ({ width, setWidth, height, setHeight, charset, setCharset }) => {
    return (
        <div style={{ marginTop: '10px' }}>
            <div>
                <label>Width (chars): </label>
                <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(parseInt(e.target.value) || 100)}
                    min="10"
                    max="1000"
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <label>Height (optional): </label>
                <input
                    type="number"
                    value={height || ''}
                    onChange={(e) => setHeight(e.target.value ? parseInt(e.target.value) : null)}
                    min="10"
                    max="1000"
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <label>Charset: </label>
                <input
                    type="text"
                    value={charset}
                    onChange={(e) => setCharset(e.target.value)}
                />
            </div>
        </div>
    )
}
