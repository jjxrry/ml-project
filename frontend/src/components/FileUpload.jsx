export const FileUpload = ({ onFileChange }) => {
    return (
        <div>
            <input type="file" accept="image/*" onChange={onFileChange} />
        </div>
    )
}
