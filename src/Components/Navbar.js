import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
// import SideBar from "./SideBar";

const Navbar = () => {
  let cartsData = useSelector((state) => state.cartReducers.carts);
  console.log("AGIYA", cartsData);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Link to={"/home"} className="navbar-brand" href="#">
            <img
              className="ms-5"
              src="/Assets/hmg-header-logo-hor-v2.png"
              width={250}
              height={70}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4 fw-bolder ms-5">
              <li className="nav-item">
                <li className="nav-item">
                  <a
                    href="#home"
                    className="nav-link active  "
                    aria-current="page"
                  >
                    HOME{" "}
                  </a>
                </li>
              </li>
              <li className="nav-item">
                <a
                  href="#aboutUs"
                  className="nav-link active  "
                  aria-current="page"
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active  "
                  aria-current="page"
                  href="#teams"
                >
                  TEAMS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active  "
                  aria-current="page"
                  href="#contacts"
                >
                  CONTACTS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#rooms"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ROOMS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/economy">
                      ECONOMY
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/business">
                      BUSINESS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/luxury">
                      LUXURY
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
{
  /* <div className="container-fluid">
<a className="navbar-brand" href="#">Navbar</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<div className="collapse navbar-collapse " id="navbarNav">
<ul className="navbar-nav fs-4 fw-bolder ms-5 text-dark ">
<li className="nav-item">
<Link className="nav-link active  " aria-current="page" to="/home">HOME</Link>
</li>
<li className="nav-item">
<Link className="nav-link active  " aria-current="page" to="/home">ABOUT US</Link>
</li>
<li className="nav-item">
<Link className="nav-link active  " aria-current="page" to="/home">TEAMS</Link>
</li>
<li className="nav-item">
<Link className="nav-link active  " aria-current="page" to="/home">CONTACT</Link>
</li>
</ul>
<li className="nav-item dropdown mb-4">
<a className="nav-link dropdown-toggle text-dark fw-bolder fs-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
ROOMS
</a>
<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
<li><Link className="dropdown-item" to="/economy">ECONOMY</Link></li>
<li><Link className="dropdown-item" to="/business">BUSINESS</Link></li>
<li><Link className="dropdown-item" to="/luxury">LUXURY</Link></li>
</ul>
</li>
</div>
  
</div>
</div> */
}
