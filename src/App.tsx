import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
