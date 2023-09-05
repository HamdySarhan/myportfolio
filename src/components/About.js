import React from 'react';
import { SocialLinks } from './SocialLinks';
import mypic from '../assets/mypic.jpg';

export const About = (props) => {
  return (
    <section id='about'>
      <div className='wrapper'>
        <article>
          <div className='title'>
            <h3>Who's this guy?</h3>
            <p className='separator' />
          </div>
          <div className='desc full'>
            <div className='about-img-wrapper'>
              <img className='about-img' src={mypic}></img>
            </div>

            <h4 className='subtitle'>My name is Hamdy.</h4>
            <p>
              I am a web developer and UX designer based in Berlin, Germany.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty
              and easy to use. I can't stop learning new things; the more, the
              better.
            </p>
          </div>
          <div className='title'>
            <h3>What does he do?</h3>
            <p className='separator' />
          </div>
          <div className='desc'>
            <h4 className='subtitle'>I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either
              standalone or including popular frameworks like ReactJS and VueJS.
              I also make the web pretty by using Sass, CSS and, whenever
              needed, any of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express,
              MongoDB, etc). But, of course, whenever the project requires PHP,
              I do PHP as well (Wordpress, Laravel, etc).
            </p>
          </div>
          <div className='desc'>
            <h4 className='subtitle'>Also a DevOps.</h4>
            <p>
              I have experience with deployment using a lot of platforms such as
              AWS, Google cloud, Heroku, Netlify, etc.
            </p>
            <p>I am also interessted in the field of cloud computing and AI.</p>
          </div>
        </article>
      </div>
    </section>
  );
};
