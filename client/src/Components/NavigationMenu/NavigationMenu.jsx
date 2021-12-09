import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavigationData } from './NavigationData.jsx';
import './Navigation.css';

const NavigationMenu = ({ setView }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSideBar = () => setSidebar(!sidebar);

  const changeView = (e) => {
    let view = e.currentTarget.id.toLowerCase();
    if ( view ) {
      setView(view);
    }
    toggleSideBar();
  }
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bar'>
          <FaIcons.FaBars onClick={toggleSideBar} />
        </Link>
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