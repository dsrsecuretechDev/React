import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './page/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from './page/Login/Login.jsx';
import Register from './page/Register/Register.jsx';
import NotFound from './page/NotFound/NotFound.jsx';
import About from './page/About/About.jsx';
import Navbar from './page/Navbar/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
