import React from 'react';
import devnet from '../assets/devnet.png';
import vidona from '../assets/vidona.png';
import client from '../assets/client.png';
import xml from '../assets/xml.png';
import imgcropper from '../assets/imgcropper.png';

import { Project } from './Project';

export const Projects = (props) => {
  return (
    <section id='projects'>
      <div className='projects-container'>
        <div className='heading'>
          <h3 className='title'>My Works</h3>
          <p className='separator' />
          <p className='subtitle'>
            Here's a list of <u>most</u> of the projects I've been working on
            lately. I built all the projects to get the Full-Stack Developer
            experience.
          </p>
        </div>
        <div className='projects-wrapper'>
          <Project
            title='DevNet'
            img={devnet}
            tech='js css react node'
            link='https://dev-net-56285.herokuapp.com/'
            repo='https://github.com/HamdySarhan/DevNet'
          >
            <small>
              Built using Node, Express, MongoDB, CSS, React.js and React
              Router.
            </small>
            <p>
              This is a full-stack website that I made which lets the users
              creat their own portfolio and comunicate with other users via
              posts and comments.
            </p>
          </Project>
          <Project
            title='Vidona'
            img={vidona}
            tech='js node css'
            link='https://vidona.net/'
            repo='https://vidona.net/'
          >
            <small>
              Built using Node, Express, MongoDB, JS + React + Axios, CSS.
            </small>
            <p>
              Another full-stack website that uses AI to detect keywords in
              videos and suggest free stock photos and videos + animation. It
              also detects silence parts in videos and suggest trimming.
            </p>
          </Project>
          <Project
            title='Client portfolio'
            img={client}
            tech='js node css'
            link='https://64f3b3fb3dd92a397bfcfa6d--sensational-speculoos-da41db.netlify.app/'
            repo='https://github.com/HamdySarhan/client-portfolio'
          >
            <small>
              Built using Node, Express, MongoDB, JS + CSS + Bootstrap and Pug.
            </small>
            <p>A full-stack portfolio website for a legal consulting office.</p>
          </Project>
          <Project
            title='Automated Image Cropper.'
            img={imgcropper}
            tech='c++ qt opencv'
            link='https://github.com/HamdySarhan/ImgCropper/tree/main/ImgCropper'
            repo='https://github.com/HamdySarhan/ImgCropper/tree/main/ImgCropper'
          >
            <small>Built using C++, Qt,and OpenCV.</small>
            <p>
              An automated image cropper that allows user to crop a huge amount
              of image with the same ratios in seconds to prepare for AI model
              training.
            </p>
          </Project>
          <Project
            title='XML Modifire.'
            img={xml}
            tech='c++ qt'
            link='https://github.com/HamdySarhan/XMLModiC-Version'
            repo='https://github.com/HamdySarhan/XMLModiC-Version'
          >
            <small>Built using C++, Qt and CMake.</small>
            <p>
              Automated XML modifire that allows direct access and modifiction
              to xml files using keys to spare time.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};
