import React, { useState } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState("false");

  const cartsData = useSelector((state) => state.cartReducers.carts);

  

  return (
    <div className={`container fs-5  ${open ? "open" : ""} ms-auto`}>
      <i
        className="fa-solid fa-bars me-5 fs-2"
        onClick={() => setOpen(!open)}
      ></i>
      <div className="sidebar">
        <div className="top-section">
          <div className="logo">
            <h1 className="text-white">CONFIRM BOOKING</h1>
          </div>
          <div className="col-xl-8 mt-5 mx-auto">
            {cartsData.map((ele) => (
              <div className=" shadow-lg mb-3 ">
                <div className="card-body">
                  <div className="card" >
                    <div className="card-body">
                      <h5 className="card-title" >
                        <img src={ele.img}
                        height={200}
                        width={200}
                        />


                      </h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {ele.title}
                      </h6>
                      <p className="card-text">
                      </p>
                      <a href="#" class="card-link">
                        Card link
                      </a>
                      <a href="#" class="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className=" d-flex justify-content-center">
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
                                <td className="total-amount animate__animated animate__rubberBand fw-bolder"><h5 className="me-5"></h5></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            {/* <div className="row my-4 ">
                <div className="col-sm-6">
                  <div className="text-sm-end mt-2 mt-sm-0">
                    <a  className="checkbtn  btn btn-success">
                      <i className="mdi mdi-cart-outline" /> Checkout
                    </a>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>

    //     <div id="wrapper" className="wrapper-content">
    //   <div id="sidebar-wrapper">
    //     <ul className="sidebar-nav">
    //       <li className="sidebar-brand">
    //         <a href="#">
    //           Bootdey.com
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#">Dashboard</a>
    //       </li>
    //       <li>
    //         <a href="#">Shortcuts</a>
    //       </li>
    //       <li>
    //         <a href="#">Overview</a>
    //       </li>
    //       <li>
    //         <a href="#">Events</a>
    //       </li>
    //       <li className="active">
    //         <a href="#">About</a>
    //       </li>
    //       <li>
    //         <a href="#">Services</a>
    //       </li>
    //       <li>
    //         <a href="#">Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div id="page-content-wrapper">
    //     <nav className="navbar navbar-default">
    //       <div className="container-fluid">
    //         <div className="navbar-header">
    //           <button className="btn-menu btn btn-success btn-toggle-menu" type="button">
    //             <i className="fa fa-bars" />
    //           </button>
    //         </div>
    //         <div className="collapse navbar-collapse">
    //           <ul className="nav navbar-nav navbar-right">
    //             <li>
    //               <a href="#" className="dropdown-toggle" data-toggle="dropdown">
    //                 <i className="ti-panel" />
    //                 <p>Stats</p>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#">
    //                 <i className="ti-settings" />
    //                 <p>Settings</p>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-lg-12">
    //           <h1>Sidebar Menu</h1>
    //           <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens,
    //             and will appear non-collapsed on larger screens.</p>
    //           <p>Make sure to keep your content here</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SideBar;
