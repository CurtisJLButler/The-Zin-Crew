import { Link } from 'react-router-dom';

const Card = ({car}) => {
    const {id, Car_Name, Car_Thumbnail, Price} = car

    return (
        <>
          <Link className="nav-link" to={`/car/${id}`}>
          <div key={car._id} className="col-md-4">
              <div className="card mb-4 box-shadow">
                  <img 
                  className="card-img-top" 
                  data-src="http://localhost:5000/api/image/&amp;text=Thumbnail" 
                  alt="Thumbnail [100%x225]" 
                  style={{height: 225, width: '100%', display: 'block'}}
                  src={`http://localhost:5000/api/image/${Car_Thumbnail}`}
                  data-holder-rendered="true" />

                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="card-text"> {Car_Name}</p>
                        <p className="card-text"> ${Price} </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        </div>
                        {/* <small className="text-muted">{ series.sub_series_VN}</small> */}
                      </div>
                    </div>  
                  </div>
                </div>
          </Link>
        </>
    )
}

export default Card