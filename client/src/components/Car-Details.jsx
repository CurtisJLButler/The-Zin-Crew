import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
  const { id } = useParams();
  const [car, setcar] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cars/${id}`)
      .then((response) => {
        console.log(response.data);
        setcar(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const allImages = [car.Car_Thumbnail, ...(car.Car_Images || [])];
  const currentImage = allImages[currentImageIndex] || car.Car_Thumbnail;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <div className="row" style={{ paddingLeft: '30%', paddingRight: '30%' }}>
        <div>
          <img
            className="card-img-top"
            alt="Car Thumbnail"
            style={{ height: 225, width: 'auto', display: 'block' }}
            src={`http://localhost:5000/api/image/${currentImage}`}
          />
          <button className="btn btn-secondary" onClick={prevImage}>⟵ Previous</button>
          <button className="btn btn-secondary" onClick={nextImage}>Next ⟶</button>
        </div>

        <div className="card-body mt-3">
          <div className="d-flex justify-content-between">
            <p className="card-text"><strong>{car.Car_Name}</strong></p>
            <p className="card-text"><strong>${car.Price}</strong></p>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="card-text">{car.Brand}</p>
            <button
              className='btn btn-secondary'
              onClick={() => {
                window.location.href = `http://localhost:8080/test-drive/${car.VIN}`;
              }}
            >
              Book a test drive
            </button>
          </div>

          <div className="card-text">
            <p><strong>Make:</strong> {car.make}</p>
            <p><strong>Year:</strong> {car.Year}</p>
            <p><strong>Tire Type:</strong> {car.Tire_Type}</p>
            <p><strong>Transmission:</strong> {car.Transmission}</p>
            <p><strong>Fuel Type:</strong> {car.Fuel_Type}</p>
            <p><strong>Engine:</strong> {car.Engine}</p>
            <p><strong>Seating Capacity:</strong> {car.Seating_Capacity}</p>
            <p><strong>Colors:</strong> {(car.Colors || []).join(', ')}</p>
            <p><strong>Interior Colors:</strong> {(car.Interior_Colors || []).join(', ')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
