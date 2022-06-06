export const Preview = ({ files }) => {
    if(!files.length) {
        return null;
    };

    return files.map((file) => <img src={`//localhost:8000/${file.filename}`} alt={file.originalname} style={{ maxWidth: '200px', maxHeight: '200px' }} />)
};
