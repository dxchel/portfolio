import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.svg'
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
                    <img src={logo} alt="logo" />
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
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/david-xchel-morales-hurtado"><img src={socialLI} alt="LinkedIn"/></a>
                            <a href="https://www.github.com/dxchel"><img src={socialGH} alt="GitHub"/></a>
                            <a href="mailto:davidxchelmh@gmail.com"><img src={socialGM} alt="Mail"/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log("Connect")}><span>Let's connect!</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
