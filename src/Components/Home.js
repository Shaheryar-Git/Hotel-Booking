import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./Slider";
import AboutUs from "./AboutUs";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <AboutUs/>
      <br/>
      <h1 className="h1 fw-bolder me-auto text-secondary" >Rooms overview</h1>
      <div className="container">
        <div className="row">
          <div className="featured col-lg-4 col-md-6 col-sm-12" id="rooms">
            <div className="mb-4">
              <img
                className="imgs"
                src="/Assets/24trending-shophotels1-superJumbo.jpg"
                height={300}
              />
            </div>
            <div className="titles">
              <h1 className="mt-5">Economy Rooms</h1>
              <h3>Per day : 10,000</h3>
              <Link to="/economy"><button className="btn btn-primary fw-bold mt-4" >Visit Now</button></Link>
            </div>
          </div>

          <div className=" featured col-lg-4 col-md-6 col-sm-12">
            <div className=" mb-4">
              <img
                className="imgs"
                src="/Assets/download (2).jpeg"
                height={300}
              />
            </div>
            <div className="titles">
              <h1  className="mt-5">Business Rooms</h1>
              <h3>Per day : 14,000</h3>
              <Link to="/business"><button className="btn btn-primary fw-bold mt-4" >Visit Now</button></Link>
            </div>
          </div>
          <div className=" featured col-lg-4 col-md-6 col-sm-12">
            <div className=" mb-4">
              <img
                className="imgs"
                src="/Assets/70a8ab5aa285df3fa6c8b95d497dadcd.jpg"
                width="100%"
                height="100%"
              />
            </div>
            <div className="titles">
              <h1 className="mt-5">Luxury Rooms</h1>
              <h3>Per day : 18,000</h3>
              <Link to="/luxury"><button className="btn btn-primary fw-bold mt-4" >Visit Now</button></Link>
            </div>
          </div>

          <div className="About us" id="aboutUs">
            <div className="container-fluid  text-center mt-2">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col-12 my-4" data-aos="fade-out">
                      <video
                        src="/Assets/istockphoto-1361610900-640_adpp_is.mp4"
                        autoPlay
                        muted
                        width="100%"
                      />
                    </div>
                    <div className="col-12 my-4" data-aos="fade-out">
                      <video
                        src="/Assets/istockphoto-1468218410-640_adpp_is.mp4"
                        autoPlay
                        muted
                        width="100%"
                      />
                    </div>
                    <div className="col-12 my-4" data-aos="fade-out">
                      <video
                        src="/Assets/istockphoto-1332775773-640_adpp_is.mp4"
                        autoPlay
                        muted
                        width="100%"
                      />
                    </div>
                    <div className="col-12 my-4" data-aos="fade-out">
                      <video
                        src="/Assets/istockphoto-1468470023-640_adpp_is.mp4"
                        autoPlay
                        muted
                        width="100%"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 ">
                  <div className="row ">
                    <div className="col-12 mt-2" data-aos="fade-out">
                      <p className="paragraph  fs-4">
                        Hotels offer a sanctuary for travelers, providing a home
                        away from home in bustling cities and tranquil retreats
                        alike. From boutique hideaways to grand resorts, each
                        hotel is a unique blend of comfort, style, and
                        hospitality. Impeccably designed rooms, world-class
                        amenities, and attentive service create an ambiance of
                        relaxation and indulgence. Whether for business or
                        leisure, hotels cater to every need, offering culinary
                        delights, wellness facilities, and unforgettable
                        experiences. With a rich tapestry of cultures and
                        destinations, hotels are not just places to stay but
                        gateways to exploration, discovery, and cherished
                        memories.Hotels stand as beacons of comfort and
                        sophistication, welcoming weary travelers with open
                        arms. Each hotel tells a story, a narrative woven with
                        elegance and charm, offering a haven amidst the chaos of
                        the world. From the moment guests step through the lobby
                        doors, they are enveloped in an atmosphere of luxury and
                        warmth. Impeccably appointed rooms beckon with plush
                        furnishings and breathtaking views, while gourmet dining
                        options tantalize the taste buds with culinary delights
                        from around the globe. With attentive staff anticipating
                        every need, hotels become more than just temporary
                        abodes; they become cherished memories, etched in the
                        hearts of all who pass through their doors.From boutique
                        hideaways to grand resorts, each hotel is a unique blend
                        of comfort, style, and hospitality. Impeccably designed
                        rooms, world-class amenities, and attentive service
                        create an ambiance of relaxation and indulgence.Hotels
                        embody the art of hospitality, orchestrating seamless
                        experiences that transcend mere accommodation. Each
                        hotel, a masterpiece of architecture and design, offers
                        a symphony of comfort, convenience, and luxury. From
                        intimate boutique hotels nestled in historic quarters to
                        sprawling resorts gracing pristine shores, every
                        establishment paints a unique canvas of indulgence and
                        relaxation. Within their walls, guests embark on
                        journeys of discovery, immersing themselves in local
                        culture and embracing new adventures. Whether unwinding
                        by sparkling pools, rejuvenating in tranquil spas, or
                        savoring gourmet cuisine crafted with local flavors,
                        hotels curate moments of joy and connection, leaving an
                        indelible mark on the traveler's soul.
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
               
              </div>
            </div>
          </div>
        </div>
      </div>

<Footer/>

      
    </div>
  );
};

export default Home;
