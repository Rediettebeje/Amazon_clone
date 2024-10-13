import React from 'react'
import "./newproduct.css"
import { Link } from 'react-router-dom';


function NewProduct({title, image1, image2, image3, image4 }) {
    return (

       <div className='newproduct'>
        <p>{title}</p>
      <div className='top-section'>
        <Link to="/seeall" className='header_clearLink'>
          <img className='one' src={image1} alt="" />
        </Link>
        <Link to="/seeall" className='header_clearLink'>
          <img className='one' src={image2} alt="" />
        </Link>
      </div>
      <div className='bottom-section' >
        <Link to="/seeall" className='header_clearLink'>
          <img className='one' src={image3} alt="" />
        </Link>
        <Link to="/seeall" className='header_clearLink'>
          <img className='one' src={image4} alt="" />
        </Link>
            </div>
              <Link to="/seeall" className='header_clearLink'><p className='seeall'>see all deals</p></Link>   
            
    </div>
  
  )
}

export default NewProduct