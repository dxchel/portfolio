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
