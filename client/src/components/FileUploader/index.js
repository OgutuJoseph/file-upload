import { useState } from 'react';
import './styles.css';
import axios from 'axios';

export const FileUploader = ({}) => {

    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for (let i = 0; i < files.length; i++) {
            data.append('file', files[i])
        }

        axios.post('http://localhost:8000/upload', data)
                .then((e) => { console.log('Success!') })
                .catch((e) => { console.log('Error!') })
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className="form-group files"> 
                <label>Upload your flle</label>
                <input 
                    type="file" 
                    className="form-control"  
                    onChange={onInputChange}
                    multiple               
                />
            </div>
            <button>Submit</button>
        </form>
    )
}