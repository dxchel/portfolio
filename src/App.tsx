import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { API } from './components/API';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Background from https://www.wallpaperbat.com/
// Project Images from https://www.pngwing.com/
// Social Icons from https://www.svgrepo.com/
// Banner icon from https://www.reshot.com/
// Contact image from https://www.freepik.com/
// Base project from https://www.github.com/judygab/web-dev-projects/
const root = () => {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

// @dxchel: Custom font not working
// @dxchel: Need to find a way for social buttons to be on another row as connect and resume in navBar
// @dxchel: Need to find a way to add '/api' route in the future, not currently working on gh-pages
// @dxchel: Need to find a way to make projects change size on smaller screens
function App () {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' Component={root}/>
                <Route path='/api' Component={API}/>
            </Routes>
        </Router>
    );
}

export default App;
