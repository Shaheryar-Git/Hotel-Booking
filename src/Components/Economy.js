import React, { useState } from "react";
import { Link } from "react-router-dom";
import economyRoom from "../Datas/Economy";

const Economy = () => {
  return (
    <div>
       <>
          <div className="container" style={{ backgroundColor: "" }}>
            <div className="row">
              
              {economyRoom.map((ele) => {
                return (
                  <div className='col-sm-12 col-md-6 col-lg-4'>
                  <div className="card mt-5 ms-5 " style={{width: '23rem',height:"400px"}}>
                       <img src={ele.image} style={{width: '21rem',height:"390px",marginLeft:"10px",marginTop:"20px"}} className="card-img-top" alt="..." />
                       <div className="card-body">
                         <h5 className="card-title ">{ele.price}</h5>
                         <p className="card-text">{ele.title}</p>
                         <Link to={`/economy/:roomId`} className="btn btn-dark fw-bold fs-5">Details</Link>
                       </div>
                     </div>
                       </div>
                );
              })}
            </div>
          </div>
        </>

    </div>
  );
};

export default Economy;