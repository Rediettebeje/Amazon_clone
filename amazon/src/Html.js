import React from 'react'
import './Html.css'
import { Link } from 'react-router-dom'

function Html({ title, image1, image2, image3, image4, imageDescription }) {
  return (
    <div className="card-product-container">
      <div className="card-product">
        <p>{title}</p>
        <div className="card-product-nested-card">
          <div className="card-nested">
            <img src={image1} alt="" />
            <p>Dresses</p>
          </div>
          <div className="card-nested">
            <img src={image2} alt="" />
            <p>Swim</p>
          </div>
          <div className="card-nested">
            <img src={image3} alt="" />
            <p>Sandals</p>
          </div>
          <div className="card-nested">
            <img src={image4} alt="" />
            <p>All deals</p>
          </div>
        </div>
      </div>
      <Link to="/seeall" className="header_clearLink">
        <p className="seeall">see all deals</p>
      </Link>
    </div>
  )
}

export default Html
