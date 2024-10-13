import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


function SliderImage() {

const sliderImages = [
      // {
      //    url: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
      // },
      // {
      //    url: "https://m.media-amazon.com/images/I/61wQaUUejqL._SX3000_.jpg",
      // },
      // {
      //    url: "https://m.media-amazon.com/images/I/71XhTkWAq6L._SX3000_.jpg",
      // },
      // {
      //    url: "https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg",
      // },
      // {
      //    url: "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg",
      // },
      // {
      //    url: "https://m.media-amazon.com/images/I/61UrRx+3LLL._SX3000_.jpg",
      // },
      // {
      //    url: "https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg",
      // },
   ];


  return (
    <div className="slider-container">
      <SimpleImageSlider
        width={1500}
        height={450}
        images={sliderImages}
        showBullets={true}
        autoPlay={true}
        autoPlayDelay={3}
      />
    </div>
  )
}

export default SliderImage