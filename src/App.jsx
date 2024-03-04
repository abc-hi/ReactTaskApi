import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Edit from './components/Edit';
import Create from './components/Create';

const App = () => {
  const[id,setId]=useState(0)
  return (
    
      <BrowserRouter>
      <div>
      <Navbar />
      </div>
      
      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/product' element={<Product setId={setId}/>} />
  <Route path='/edit/:id' element={<Edit id={id} />}  />
  <Route path='/Create'  element={<Create />}/>
</Routes>
      </BrowserRouter>
    
  );
};

export default App;