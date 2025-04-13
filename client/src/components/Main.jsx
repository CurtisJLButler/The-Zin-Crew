
import React, { useEffect, useState } from 'react';
import carHome from '../assets/carHome.jpeg'
import axios from 'axios';
import Card from './Card';
//import '../css/main.css'
//import 'font-awesome/css/font-awesome.min.css';



const Main = () => {
    const [cars, setcars] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/cars/")
        .then((response) => {
          console.log(response.data)
          setcars(response.data)
        })
        .catch(err => console.log(err))
      }, [])


      return (
        <div>
          <div style={{ position: "relative", textAlign: "center", color: "white" }}>
            <img 
              src={carHome} 
              style={{ width: "100%", height: "400px", objectFit: "cover" }} 
            />
            <div 
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "5rem",
                fontWeight: "bold",
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)"
              }}
            >
              Zin Wagon
            </div>
          </div>
          <h1>INVENTORY</h1>
          <div className="container">
            <div className="row">
              {cars.map(car => (
                <Card key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      );
}

export default Main;