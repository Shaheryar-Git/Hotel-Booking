import React from 'react'
import { Link } from 'react-router-dom'
import businessRoom from '../Datas/Business'

const Business = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {businessRoom.map((room) => {
          console.log("room.....", room)
            return <div className='col-sm-12 col-md-6 col-lg-4' key={room.id}>
              <div className="card mt-5 ms-5" style={{width: '26rem',height:"490px" }}>
                <img src={room.image} style={{ width: '24rem', height: "350px", marginLeft: "10px", marginTop: "20px" }} className="card-img-top" alt="Room" />
                <div className="card-body">
                  <h5 className="card-title mt-3">{room.price}</h5>
                  <p className="card-text">{room.title}</p>
                  <Link to={`/Business/${room.id}`} className="btn btn-dark fw-bold fs-5">Details</Link>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Business;
