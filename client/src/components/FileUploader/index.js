import { useState } from 'react';
import './styles.css';
import axios from 'axios';

export const FileUploader = ({}) => {

    const [userInput, setUser] = useState({
        customer_email: '',
        customer_names: '',
        reference: ''
    })
    const [file, setFile] = useState(null);

    const onInputChange = (e) => {
        e.persist();
        setUser({ ...userInput, [e.target.name]:e.target.value });
        setFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('file', file)
        data.append('customer_email', userInput.customer_email);
        data.append('customer_names', userInput.customer_names);
        data.append('reference', userInput.reference);

        axios.post('http://localhost:8000/upload', data)
                .then((e) => { console.log('Success!') })
                .catch((e) => { console.log('Error!') })
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Customer Email: </label>
                <input type="text" name="customer_email" value={userInput.customer_email} onChange={onInputChange} />
            </div>
            <br />
            <div className="form-group">
                <label>Customer Names: </label>
                <input type="text" name="customer_names" value={userInput.customer_names} onChange={onInputChange} />
            </div>
            <br />
            <div className="form-group">
                <label>Reference: </label>
                <input type="text" name="reference" value={userInput.reference} onChange={onInputChange} />
            </div>
            <br /> 
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