import React from 'react'

export const Carousel = () => {
  return (
      <div><div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" >
          <div class="carousel-inner" id='carousal'>
              <div className='carousel-caption' style={{ "zIndex": "10" }}>
                  <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success text-whit bg-danger" type="submit">Search</button>
                  </form>
              </div>
              <div class="carousel-item active">
                  <img src="https://source.unsplash.com/random/700x900/?burger" class="d-block w-100" alt="..." style={{ maxWidth:"auto",maxHeight:"500px",objectFit: "contain !important" }} />
              </div>
              <div class="carousel-item">
                  <img src="https://source.unsplash.com/random/700x900?fries" class="d-block w-100" alt="..." style={{ maxWidth:"auto",maxHeight: "500px",objectFit: "contain !important" }} />
              </div>
              <div class="carousel-item">
                  <img src="https://source.unsplash.com/random/700x900/?pizza" class="d-block w-100" alt="..." style={{ maxWidth:"auto",maxHeight: "500px",objectFit: "contain !important" }} />
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div></div>
  )
}
