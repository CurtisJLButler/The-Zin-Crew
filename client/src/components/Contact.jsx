import React from 'react';
//import '../css/main.css'
//import 'font-awesome/css/font-awesome.min.css';

const Contact = () => {
    return (
        <div>
            <h2>Contact us</h2>
            <p>Have any questions? message us about any questions you have.</p>

            <form className='form-signin'>
                <label htmlFor="first_Name" className="sr-only">First Name</label>
                <input type="First_Name" id="First_Name" className="form-control" placeholder="First Name" required autoFocus />
            </form>
        </div>
    )
}

export default Contact;