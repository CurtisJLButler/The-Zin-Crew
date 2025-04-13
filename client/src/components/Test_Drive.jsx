import React, { useState } from 'react';
import '../css/forms.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 

const Test_Drive = props => {

const [serverMessage, setServerMessage] = useState(null)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const newTestDrive = (test) => {
        const upload = {
            First_Name: test.First_Name,
            Last_Name: test.Last_Name,
            City: test.City,
            Email_Address: test.Email_Address,
            Phone: test.Phone,
            testDate: test.testDate,
            testTime: test.testTime,
            Comments: test.Comments,
        };

        axios.post('http://localhost:5000/api/drive', upload) 
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                setServerMessage(error.response?.data?.message || 'An error occurred.');
            });
    };

    //a today varriable so people can't book a test drive in the past
    const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"


    return (
        <div>
            <h2>Book a test drive</h2>

            <form className='form-signin' onSubmit={handleSubmit(newTestDrive)}>
                <p>First Name:</p>
                <label htmlFor="first_Name" className="sr-only">First Name</label>
                <input {...register('First_Name')} type="text" id="First_Name" className="form-control" required autoFocus />

                <p>Last Name:</p>
                <label htmlFor="last_Name" className="sr-only">Last Name</label>
                <input {...register('Last_Name')} type="text" id="Last_Name" className="form-control" required />

                <p>City:</p>
                <label htmlFor="City" className="sr-only">City</label>
                <input {...register('City')} type="text" id="City" className="form-control" />

                <p>Email Address:</p>
                <label htmlFor="Email_Address" className="sr-only">Email Address</label>
                <input {...register('Email_Address')} type="email" id="Email_Address" className="form-control" required />

                <p>Phone:</p>
                <label htmlFor="Phone" className="sr-only">Phone</label>
                <input {...register('Phone')} type="tel" id="Phone" className="form-control" required />

                <p>Date:</p>
                <label htmlFor="Date" className="sr-only">Date</label>
                <input {...register('testDate')} type="date" id="Date" className="form-control" min={today} required />

                <p>Time:</p>
                <label htmlFor="Time" className="sr-only">Time</label>
                <input {...register('testTime')} type="time" id="Time" className="form-control" required />

                <p>Comments:</p>
                <label htmlFor="Comments" className="sr-only">Comments</label>
                <textarea {...register('Comments')} id="Comments" className="form-control" required />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Test_Drive;