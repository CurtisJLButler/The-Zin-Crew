
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
            <img src={carHome} style={{width: "100%", height: "300px"}} />
            <p> hello</p>
            {/* <img src="http://localhost:5000/api/image/1.jpg" style={{height: "300px"}} /> */}
            {
                cars.map(car => 
                  <Card key={car.id} car={car} />
                )
              }
        </div>
    )
}

export default Main;