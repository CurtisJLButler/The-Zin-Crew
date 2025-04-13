import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

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


            <div className="container">
            <div className="row">
              {cars.map(car => (
                <Card key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
    )
}

export default Main;