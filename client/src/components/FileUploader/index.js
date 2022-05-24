import { useState } from 'react';
import './styles.css';
import axios from 'axios';

export const FileUploader = ({}) => {

    const [file, setFile] = useState(null);

    const onInputChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('file', file)

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