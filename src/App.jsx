import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Subitem from './Subcategoryitempage/Subcategoryitem';
import Category from './Categorypage/Category'
import Sub from './Subcategorypage/Subcategory'
import ProfilePages from './Profilepage/Profilepage'
import Enquiry from './Enquirespage/Enquiry';
import Accesspage from './Accesspage/Accespage';
import Adminpage from './Adminpage/Adminpage';
import AdminHomePage from './Homepage/AdminHomePage';
import SendRequestPage from './SendRequestpage/Request'

const App =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Category />}></Route>
        <Route path='/subcategory' element={<Sub />}></Route>
        <Route path='/subitems' element={<Subitem />}></Route>
        <Route path='/profileinfo' element={<ProfilePages />}></Route>
        <Route path='/enquiries' element={<Enquiry/>}></Route>
        <Route path='/accesspage' element={<Accesspage/>}></Route>
        <Route path='/admin/*' element={<AdminHomePage/>}></Route>
        <Route path='/sendrequest' element={<SendRequestPage/>}></Route>
       
      </Routes>
  </BrowserRouter>
 
  )
}

export default App
