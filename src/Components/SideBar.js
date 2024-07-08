import React, { useState } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";

const SideBar = () => {
  const [open, setOpen] = useState(false); // Changed initial state to boolean

  const cartsData = useSelector((state) => state.cartReducers.carts);

  return (
    <div className={`container fs-5 ${open ? "open" : ""} ms-auto`}>
      <div>
        <i
          className="fa-solid fa-bars ms-5 fs-2"
          style={{ marginRight: "1300px" }}
          onClick={() => setOpen(!open)}
        ></i>
      </div>
      <div className="sidebar">
        <div className="top-section">
          <div className="logo">
            <h1 className="text-white">CONFIRM BOOKING</h1>
          </div>
          <div className="container mx-auto">
          <div className="row1 row "> 
            <div className="col-xl-8 mt-5 mx-auto">
              {cartsData.map((ele,index) => (
                <div className="card shadow-lg mb-3 ">
                  <div className="card-body">
                    <div className="d-flex border-bottom pb-3" key={index}>
                      <div className="me-4">
                        {/* <img
                          src={ele.image}
                          height={180}
                          width={200}
                          className="avatar-lg rounded"
                        /> */}
                      </div>
                      <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                          <h5 className="text-truncate font-size-20 text-center">
                            <a href="#" className="text-dark">
                              {ele.title}
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="flex-shrink-0 my-4">
                        <ul className="list-inline mb-0 font-size-16">
                          <button className="btn">
                            <i
                              className="fa-sharp fa-solid fa-trash fs-3 "
                              // onClick={() => DELETE(ele.id)}
                            ></i>
                          </button>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2 ms-3">Price</p>
                            <h5 className="mb-0 mt-2">
                              <span className="text-muted me-2"></span>$ 
                              {ele.price}
                            </h5>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2">Quantity</p>
                            <button
                              className="btn fs-5"
                              // onClick={() => DecreaseP(ele.id)}
                            >
                              -
                            </button>
                            {/* {quantities[ele.id] || 1} */}
                            <button
                              className="btn fs-5"
                              // onClick={() => IncreaseP(ele.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mt-3">
                            <p className="fw-bolder mb-2">Total</p>
                            <h5>
                              {/* ${calculateTotalPrice(ele,quantities[ele.id] || 1)} */}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className=" d-flex justify-content-center">
                <div className="col-xl-4 mt-auto">
                  <div className="mt-5 mt-lg-0">
                    <div className="card border shadow-5">
                      <div className="card-header bg-transparent border-bottom py-3 px-4">
                        <h5 className="font-size-16 mb-0 text-center">
                          Order Summary
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <td className="fw-bolder"> Total Amount :</td>
                                {/* <td className="total-amount animate__animated animate__rubberBand fw-bolder"><h5 className="me-5">${subtotal}</h5></td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4 ">
                <div className="col-sm-6">
                  <div className="text-sm-end mt-2 mt-sm-0">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
