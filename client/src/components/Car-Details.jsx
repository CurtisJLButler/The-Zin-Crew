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
        console.log(response.data)
        setcar(response.data)
      })
      .catch(err => console.log(err))
    }, [])
    // setCurrentImageIndex(1)
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
                  data-src="http://localhost:5000/api/image/&amp;text=Thumbnail" 
                  alt="Thumbnail [100%]" 
                  style={{height: 225, width: 'auto', display: 'block'}}
                  src={`http://localhost:5000/api/image/${currentImage}`}
                  data-holder-rendered="true" />
                            <button className="btn btn-secondary" onClick={prevImage}>⟵ Previous</button>
                            <button className="btn btn-secondary" onClick={nextImage}>Next ⟶</button>
                </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="card-text"> {car.Car_Name}</p>
                      <p className="card-text"> ${car.Price} </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="card-text"> {car.Brand}</p>
                    </div>
                  </div>  
          </div>
        </>
    )
}

export default Card