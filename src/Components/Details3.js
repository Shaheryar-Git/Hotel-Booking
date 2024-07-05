import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/action'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import LuxuryRoom from '../Datas/Luxury'


const Detail3 = () => {

  let {roomId3} = useParams();

  // console.log(params , "ROOM ID");

  let room = LuxuryRoom.find((ele) => ele.id.toString() === roomId3);



  console.log(room,"room");
 const dispatch = useDispatch()


  const bookRoom = (e) =>{
    dispatch(addToCart(e))
  }
 

  return (
    <div>
      {/* <Navbar/> */}
      <div className="container mt-5  ms-5">
        {/* product */}
        <div className="product-content product-wrap clearfix product-deatil">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="product-image">
                <div id="myCarousel-2" className="carousel slide">
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel-2"
                      data-slide-to={0}
                      className
                    />
                    <li
                      data-target="#myCarousel-2"
                      data-slide-to={1}
                      className="active"
                    />
                    <li
                      data-target="#myCarousel-2"
                      data-slide-to={2}
                      className
                    />
                  </ol>
                  <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="item active">
                      <img
                        src={room.image}
                        height={500}
                        className="img-responsive"
                        alt
                      />
                    </div>
                  </div>
                  <a
                    className="left carousel-control"
                    href="#myCarousel-2"
                    data-slide="prev"
                  >
                    {" "}
                    <span className="glyphicon glyphicon-chevron-left" />{" "}
                  </a>
                  <a
                    className="right carousel-control"
                    href="#myCarousel-2"
                    data-slide="next"
                  >
                    {" "}
                    <span className="glyphicon glyphicon-chevron-right" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
              <h2 className="name">
              Luxury  Room
                <small>
                  Product by <a>Luxury Hotel</a>
                </small>
                <i className="fa fa-star fa-2x text-primary" />
                <i className="fa fa-star fa-2x text-primary" />
                <i className="fa fa-star fa-2x text-primary" />
                <i className="fa fa-star fa-2x text-primary" />
                <i className="fa fa-star fa-2x text-muted" />
                <span className="fa fa-2x">
                  <h5>(109) Votes</h5>
                </span>
                <h4 href="javascript:void(0);">109 customer reviews</h4>
              </h2>
              <hr />

              <div className="description description-tabs">
                <ul id="myTab" className="nav nav-pills">
                  <li className="active">
                    <h6
                      href="#more-information"
                      data-toggle="tab"
                      className="fs-5 fw-bold ms-5 mt-3"
                    >
                      Luxury rooms at our hotel offer a comfortable and
                      affordable accommodation option for budget-conscious
                      travelers. Designed with simplicity and functionality in
                      mind, our economy rooms provide all the essential
                      amenities for a pleasant stay without compromising on
                      quality. Whether you're traveling for business or leisure,
                      our economy rooms offer a cozy retreat after a day of
                      exploration or work. With a focus on value and comfort,
                      our economy rooms provide the perfect balance for those
                      seeking affordability without sacrificing convenience.
                    </h6>
                  </li>
                </ul>
                
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <button
                    href="javascript:void(0);"
                    className="btn btn-dark btn-lg"
                    onClick={bookRoom}
                  >
                    Book Now (Rs :18,000)
                  </button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="btn-group pull-right">
                    <button className="btn btn-white btn-default fw-bolder">
                      <i className="fa fa-phone" /> Complain Number : 042
                      747897080
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail3
