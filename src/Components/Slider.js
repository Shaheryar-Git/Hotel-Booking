import React from 'react'

const Slider = () => {
  return (
    <div >
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/Assets/1.jpg" height={700} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/Assets/istockphoto-538828557-612x612.jpg" height={700} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/Assets/m-278956.webp" height={700} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* <button className='slider-btn '>ROOM</button>
<button className='slider-btn '>LETS CONNECT</button> */}

    </div>
  )
}

export default Slider
