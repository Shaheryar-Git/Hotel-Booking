import React from "react";

const Footer = () => {
  return (
    <div>
      <div style={{backgroundColor:"#85766F"}}
        className="icons container-fluid  text-white p-3"
      >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5" id="contacts">
            <h2 className="text-warning">HMG HOSPITALITY</h2>
            <br />
            <br />
            <span className="fs-5 text-dark">
              Thank you for visiting in Hotel HMG website. Connect with me over
              socials. Keep Rising.At our company, we pride ourselves on
              delivering the highest quality services tailored to meet your
              specific needs. Our commitment to excellence ensures that every
              project is executed with precision and care. We stand behind our
              work and take full responsibility for any mismanagement, promising
              prompt resolution and continuous improvement. Trust us to exceed
              your expectations and foster a lasting partnership built on
              reliability and integrity.
            </span>
          </div>

          <div className="footerlinks col-12 col-md-6 col-lg-3 fw-bolder fs-4">
            {" "}
            <h1 className="text-warning">BRANCHES</h1>
          
              <li>Lahore</li>
          
              <li>Hunza</li>
              <li>Islamabad</li>
            <li>Murree</li>
            <li>Swat</li>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h2 className="text-warning">- LET'S CONNECT</h2>
            <h4 class="contact__title">
              <i class="fa-regular fa-envelope  me-2  fs-3 mt-3"></i>Mail
            </h4>
           
            <h4 class="contact__title">
              <i class="fa-brands fa-instagram  me-2 fs-5 mt-3"></i>instagram
            </h4>
           
            <h4 class="contact__title">
              <i class="fa-brands fa-facebook  fs-5 me-2 mt-3"></i>facebook
            </h4>
            

            <h6 className="contacts ms-5">
              {" "}
              Email : HMDManagement@gmail.com
            </h6>
            <h6 className=" contacts ms-5"> Contact No : 031141467543</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
