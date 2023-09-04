import React, { useState } from 'react';

import { Menu } from './Menu';
import { Nav } from './Nav';
import { Header } from './Header';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

export default function Home() {
  const [menu, setMenu] = useState('deactive');
  const toggleMenu = () => {
    if (menu == 'deactive') setMenu('active');
    else setMenu('deactive');
  };
  return (
    <React.Fragment>
      <Menu toggleMenu={toggleMenu} showMenu={menu} />
      <Nav toggleMenu={toggleMenu} showMenu={menu} />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
