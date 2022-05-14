import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/services'  element={<Services/>}/>
      <Route path='/products'  element={<Products/>}/>
      <Route path='/sing-up'  element={<SignUp/>}/>
        </Routes>
      <Footer/>
          </BrowserRouter>
);

