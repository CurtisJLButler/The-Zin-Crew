import React from 'react';
import '../css/AboutUs.css'
import AboutBan from '../assets/aboutban.jpg'
//import 'font-awesome/css/font-awesome.min.css';

const About = () => {
    return (
        <div>
            <img src={AboutBan} style={{width: "100%", height: "300px"}} />
            <h2>About ZinWagon</h2>
            <p>
            Welcome to ZinWagon, your trusted partner for reliable vehicles and exceptional customer service. 
            Founded with a passion for cars and a commitment to quality, ZinWagon is more than just a dealership—we’re a community of car lovers 
            dedicated to helping you find the perfect ride.
            </p>
            <p>
            Whether you're looking for a brand-new model, a certified pre-owned vehicle, or just some expert advice, our experienced team is here to help. 
            We believe buying a car should be exciting, transparent, and stress-free.
            </p>
            <p>
            Stop by ZinWagon today and experience the difference. From our friendly staff to our wide range of vehicles, we’ve got everything you need 
            to hit the road with confidence.
            </p>
        </div>
    )
}

export default About;