import React, { useState } from 'react';
import '../css/forms.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 

const CreateForm = () => {
    const [serverMessage, setServerMessage] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const newItem = (items) => {
        const upload = {
            First_Name: items.First_Name,
            Last_Name: items.Last_Name,
            City: items.City,
            Email_Address: items.Email_Address,
            Phone: items.Phone,
            Comments: items.Comments,
        };

        axios.post('http://localhost:5000/api/contact', upload) 
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                setServerMessage(error.response?.data?.message || 'An error occurred.');
            });
    };

    return (
        <div>
            <h2>Contact us</h2>

            <form className='form-signin' onSubmit={handleSubmit(newItem)}>
                <p>Have any questions? Message us below.</p>

                <p>First Name:</p>
                <label htmlFor="First_Name" className="sr-only">First Name</label>
                <input {...register('First_Name')} type="text" id="First_Name" className="form-control" required autoFocus />

                <p>Last Name:</p>
                <label htmlFor="Last_Name" className="sr-only">Last Name</label>
                <input {...register('Last_Name')} type="text" id="Last_Name" className="form-control" required />

                <p>Province:</p>
                <label htmlFor="City" className="sr-only">City</label>
                <input {...register('City')} type="text" id="City" className="form-control" />

                <p>Email Address:</p>
                <label htmlFor="Email_Address" className="sr-only">Email Address</label>
                <input {...register('Email_Address')} type="email" id="Email_Address" className="form-control" required />

                <p>Phone:</p>
                <label htmlFor="Phone" className="sr-only">Phone</label>
                <input {...register('Phone')} type="tel" id="Phone" className="form-control" required />

                <p>Comments:</p>
                <label htmlFor="Comments" className="sr-only">Comments</label>
                <textarea {...register('Comments')} id="Comments" className="form-control" required />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>

                {serverMessage && <p className="error-message">{serverMessage}</p>}
            </form>
        </div>
    );
};

export default CreateForm;
