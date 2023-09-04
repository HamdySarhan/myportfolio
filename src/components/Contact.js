import React from 'react';
import { SocialLinks } from './SocialLinks';
import facebook from '../assets/icons8-facebook-50 (2).png';
import whats from '../assets/icons8-whatsapp-50.png';
import insta from '../assets/icons8-instagram-50.png';
import linked from '../assets/icons8-linkedin-50.png';
import github from '../assets/icons8-github-50.png';
export const Contact = (props) => {
  return (
    <section id='contact'>
      <div className='container'>
        <div className='heading-wrapper'>
          <div className='heading'>
            <p className='title'>
              Want to <br />
              contact me?
            </p>
          </div>
        </div>

        <section className='contact-icons'>
          <a>
            <img src={linked}></img>
          </a>
          <a>
            <img src={github}></img>
          </a>
          <a>
            <img src={facebook}></img>
          </a>
          <a>
            <img src={whats}></img>
          </a>
          <a>
            <img src={insta}></img>
          </a>
        </section>
      </div>
    </section>
  );
};
