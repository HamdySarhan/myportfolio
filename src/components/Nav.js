import React from 'react';
import logo from '../assets/Frame 360.png';
export const Nav = (props) => {
  const h = '<Hamdy';
  const s = 'Sarhan/>';
  return (
    <React.Fragment>
      <nav id='navbar'>
        <div className='nav-wrapper'>
          <img src={logo}></img>
          <a
            onClick={props.toggleMenu}
            className={
              props.showMenu === 'active' ? 'menu-button active' : 'menu-button'
            }
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};
