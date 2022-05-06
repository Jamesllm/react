import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Inicio from "./components/pages/Inicio";
import Series from "./components/pages/Series";
import { Soporte } from "./components/pages/Soporte";
import Footer from "./components/footer/Footer";


import { Tonikaku } from "./components/SeriesViews/Tonikaku/Tonikaku";


function App() {
    return (
        <>
            <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Inicio />} />
                <Route path='/series' element={<Series />} />
                <Route path='/soporte' element={<Soporte />} />
                
                <Route path='/tonikaku' element={<Tonikaku />} />

            </Routes>
            </Router>

            <Footer />
        </>

    )
}

export default App;