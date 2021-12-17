import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavigationData } from './NavigationData.jsx';
import './Navigation.css';
import axios from 'axios'

const NavigationMenu = ({ setView }) => {
  const [sidebar, setSidebar] = useState(false);
  const [profilePic, setProfilePic] = useState();

  const toggleSideBar = () => setSidebar(!sidebar);

  const changeView = (e) => {
    let view = e.currentTarget.id.toLowerCase();
    if (view) {
      setView(view);
    }
    toggleSideBar();
  }
  useEffect(() => {
    axios.get('http://cultiveight.net/api/user')
      .then((response => setProfilePic(response.data.profile_photo_url)))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <div className='navbar sticky-top'>
        <Link to='#' className='menu-bar' title="Menu">
          <FaIcons.FaBars onClick={toggleSideBar} />
        </Link>
        <div>
          <p className='logoBanner'>Cultivate</p>

        </div>
        <div className="img">
          <img className="profilePic" src={profilePic} aria-label="user profile photo" />
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' >
          <li className='navbar-toggle' onClick={toggleSideBar}>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {NavigationData.map((item, index) => {
            return (
              <li key={index} className={item.className} id={item.title} onClick={changeView.bind(this)}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default NavigationMenu;