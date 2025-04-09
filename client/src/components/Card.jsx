const Card = ({car}) => {
    const {id, Car_Name, Car_Thumbnail} = car

    return (
        <>
        <div key={car._id} className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img 
                className="card-img-top" 
                data-src="http://localhost:5000/api/image/&amp;text=Thumbnail" 
                alt="Thumbnail [100%x225]" 
                style={{height: 225, width: '100%', display: 'block'}}
	            src={car.Car_Thumbnail}
                data-holder-rendered="true" />

                  <div className="card-body">
                    <p className="card-text">
                        series: {Car_Name}<br />

                        {/* where to buy this at: {where_to_buy.join(', ')} <br /> */}
                        </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                      </div>
                      {/* <small className="text-muted">{ series.sub_series_VN}</small> */}
                    </div>
                  </div>  
                </div>
              </div>
        </>
    )
}

export default Card