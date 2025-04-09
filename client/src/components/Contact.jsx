import React from 'react';
import '../css/forms.css'
//import 'font-awesome/css/font-awesome.min.css';

const Contact = props => {
    return (
        <div>
            <h2>Contact us</h2>

            <form className='form-signin'>
            <p>Have any questions? message us about any questions you have.</p>

                <p>First Name:</p>
                <label htmlFor="first_Name" className="sr-only">First Name</label>
                <input type="first_Name" id="First_Name" className="form-control" required autoFocus />

                <p>Last Name:</p>
                <label htmlFor="last_Name" className="sr-only">Last Name</label>
                <input type="last_Name" id="Last_Name" className="form-control" required />

                <p>Province:</p>
                <label htmlFor="City" className="sr-only">City</label>
                <input type="city" id="City" className="form-control" />

                <p>Email Address:</p>
                <label htmlFor="City" className="sr-only">Email Address</label>
                <input type="email_Address" id="Email_Address" className="form-control" required />

                <p>Phone:</p>
                <label htmlFor="Phone" className="sr-only">Phone</label>
                <input type="phone" id="Phone" className="form-control" required />

                <p>Comments:</p>
                <label htmlFor="Comments" className="sr-only">Comments</label>
                <input type="comments" id="Comments" className="form-control" required />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Contact;