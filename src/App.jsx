import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Subitem from './Subcategoryitempage/Subcategoryitem';
import Category from './Categorypage/Category'
import Sub from './Subcategorypage/Subcategory'
import ProfilePages from './Profilepage/Profilepage'
import Enquiry from './Enquirespage/Enquiry';

const App =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Category />}></Route>
        <Route path='/subcategory' element={<Sub />}></Route>
        <Route path='/subitems' element={<Subitem />}></Route>
        <Route path='/profileinfo' element={<ProfilePages />}></Route>
        <Route path='/enquiries' element={<Enquiry/>}></Route>
      </Routes>
  </BrowserRouter>
 
  )
}

export default App
