import { useState } from 'react';

export
 default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
     
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if(data.errors){
            setError(data.errors);
            
        }else{
            console.log(data);

        }

        

        
    };

    return(
        <>
        <h1 className="title">Register New account</h1>
        <form onSubmit={handleSubmit} className="w-1/2 mx-auto space-y-4">
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name"/>
            </div>
            <div className="form-control">
                <label htmlFor="email" >Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"/>
            </div>
            <div className="form-control">
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleChange} placeholder="Enter your Confirm Password" />
            </div>
            <button type="submit" className="primary-btn">Register</button>

        </form>
        </>
    );
}