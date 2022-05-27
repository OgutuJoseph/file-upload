import { useState } from 'react';
import './styles.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export const FileUploader = ({ onSuccess }) => {

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
                .then((response) => { 
                    console.log('Success!')
                    toast.success('File Uploaded Successfully!')
                    onSuccess(response.data)
                })
                .catch((e) => { 
                    console.log('Error!') 
                    toast.success('File Upload Error!')
                })
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