import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

function Nav() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          <p onClick={() => setSidebar(true)} className="menu">
            <MenuIcon />All
          </p>

          <Link to="/seeall">
            <p>Watchs</p>
          </Link>
          <Link to="/seeall">
            <p>Fashion</p>
          </Link>
          <Link to="/seeall">
            <p>Today's Deals</p>
          </Link>
          <Link to="/seeall">
            <p>Prime day is July 11-12</p>
          </Link>
          <Link to="/seeall">
            <p>Amazon Pay</p>
          </Link>
          <Link to="/seeall">
            <p>Home</p>
          </Link>
          <Link to="/seeall">
            <p>All</p>
          </Link>
        </div>
        <div></div>
        {sidebar && (
          <div className="sidebar">
            <div className="sidebar-o"> 
              <div className="sidebar-2">
                <div className="sidebar-th">
                  <AccountCircleIcon />
                  <h3 className="hello">Hello</h3>
                </div>
                <div>
                  <h3 className="title" >Trending</h3>
                  <ul className="ul">
                    <Link to= "/seeall" className='header_clearLink'> 
                      <li className="list">Best Sellers  </li>
                      </Link>
                  </ul>
                    <ul>
                <Link to= "/seeall" className='header_clearLink'> 
                      <li className="list">New Releases  </li>
                      </Link>
                  </ul>
                    <ul>
                 <Link to= "/seeall" className='header_clearLink'> 
                      <li className="list">Movers & Shakers </li>
                      </Link>
                  </ul>

                </div>
                                <div>
                  <h3 className="title" >Digital Content & Devices</h3>
                  <ul>
                    <li className="list">Amazon Luna- Cloud Gaming  <span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                    <ul>
                    <li className="list">Prime Video  <span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                    <ul>
                    <li className="list">Amazon Music  <span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                     <ul>
                    <li className="list">Echo & Alexa  <span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                     <ul>
                    <li className="list">Fire Table <span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                     <ul>
                    <li className="list">Fire TV<span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                     <ul>
                    <li className="list">Kindle E-readers & Books <span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                     <ul>
                    <li className="list">Audioble Books & Orginals<span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                     <ul>
                    <li className="list">Amazon Photos <span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                     <ul>
                    <li className="list">Amazon Music  <span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                     <ul>
                    <li className="list">Amazon Appstore  <span><KeyboardArrowRightIcon /></span></li>
                  </ul>
                  
                </div>
                </div>
                 <span onClick={() => setSidebar(false)}  className="cursor"><CloseIcon /></span>
            </div>
          </div>
        )}

      </div>
    </div>

    
  );
}

export default Nav;
