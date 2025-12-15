import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import socialLI from '../assets/img/socialLI.svg'
import socialGH from '../assets/img/socialGH.svg'
import socialGM from '../assets/img/socialGM.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] =  useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
}, [])


  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={''} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div class-name="social-icon">
              <a href="#"><img src={socialLI} alt="LinkedIn"/></a>
              <a href="#"><img src={socialGH} alt="GitHub"/></a>
              <a href="#"><img src={socialGM} alt="Mail"/></a>
            </div>
            <button className="vvd" onClick={() => console.log("Connect")}><span>Let's connect!</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
