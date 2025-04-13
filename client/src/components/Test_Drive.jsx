import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/forms.css'
//import 'font-awesome/css/font-awesome.min.css';


const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
const Test_Drive = props => {
    const { VIN } = useParams();
    return (
        <div>
            <h2>Contact us</h2>

            <form className='form-signin'>
            <p>Have any questions? message us about any questions you have.</p>

                <p>First Name:</p>
                <label htmlFor="first_Name" className="sr-only">First Name</label>
                <input type="text" id="First_Name" className="form-control" required autoFocus />

                <p>Last Name:</p>
                <label htmlFor="last_Name" className="sr-only">Last Name</label>
                <input type="text" id="Last_Name" className="form-control" required />

                <p>City:</p>
                <label htmlFor="City" className="sr-only">City</label>
                <input type="text" id="City" className="form-control" />

                <p>Email Address:</p>
                <label htmlFor="Email_Address" className="sr-only">Email Address</label>
                <input type="email" id="Email_Address" className="form-control" required />

                <p>Phone:</p>
                <label htmlFor="Phone" className="sr-only">Phone</label>
                <input type="tel" id="Phone" className="form-control" required />

                <p>Date:</p>
                <label htmlFor="Date" className="sr-only">Date</label>
                <input type="Date" id="Date" className="form-control" min={today} required />

                <p>Time:</p>
                <label htmlFor="Time" className="sr-only">Time</label>
                <input type="Time" id="Time" className="form-control" required />

                <p>Comments:</p>
                <label htmlFor="Comments" className="sr-only">Comments</label>
                <textarea id="Comments" className="form-control" required />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Test_Drive;