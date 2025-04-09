import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Card = () => {
  const { id } = useParams();
  const [car, setcar] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:5000/api/cars/${id}`)
      .then((response) => {
        console.log(response.data)
        setcar(response.data)
      })
      .catch(err => console.log(err))
    }, [])

    return (
        <>
        <div key={car._id} className="col-md-4">
                <img 
                className="card-img-top" 
                data-src="http://localhost:5000/api/image/&amp;text=Thumbnail" 
                alt="Thumbnail [100%x225]" 
                style={{height: 225, width: '100%', display: 'block'}}
                src={`http://localhost:5000/api/image/${car.Car_Thumbnail}`}
                data-holder-rendered="true" />

                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="card-text"> {car.Car_Name}</p>
                      <p className="card-text"> ${car.Price} </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                      </div>
                      {/* <small className="text-muted">{ series.sub_series_VN}</small> */}
                    </div>
                  </div>  
              </div>
        </>
    )
}

export default Card