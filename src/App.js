import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import './App.css';

import Header from './Components/layout/Header';
import Nav from './Components/layout/Nav';
import Footer from './Components/layout/Footer';

import ContactoPage from './Pages/ContactoPage';
import HomePage from './Pages/HomePage';
import GaleriaPage from './Pages/Galeria';
import NosotrosPage from './Pages/NosotrosPage';
import NovedadesPage from './Pages/Novedades';
import ServiciosPage from './Pages/Servicios';

function App() {
  return (
    <div className="App">
       <Header/>
       
       <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/nosotros' element={<NosotrosPage />} />
        <Route path='/servicios' element={<ServiciosPage />} />
        <Route path='/galeria' element={<GaleriaPage />} />
        <Route path='/nosotros' element={<NosotrosPage />} />
        <Route path='/novedades' element={<NovedadesPage />} />
        <Route path='/contacto' element={<ContactoPage />} />
       </Routes>
       </BrowserRouter>

       <Footer/>
    </div>
  );
}

export default App;