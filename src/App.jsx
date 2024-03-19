import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Subitem from './Subcategoryitempage/Subcategoryitem';
import Category from './Categorypage/Category'
import Sub from './Subcategorypage/Subcategory'
import ProfilePages from './Profilepage/Profilepage'

const App =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Category />}></Route>
        <Route path='/subcategory' element={<Sub />}></Route>
        <Route path='/subitems' element={<Subitem />}></Route>
        <Route path='/profileinfo' element={<ProfilePages />}></Route>
      </Routes>
  </BrowserRouter>
 
  )
}

export default App
