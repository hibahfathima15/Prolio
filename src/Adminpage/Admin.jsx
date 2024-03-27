import React from 'react'
import Adminpage from './Adminpage'
import CommonNavbar from './NavigationBars/CommonNavbar';
import AdminSidebar from './NavigationBars/AdminSidebar';

const Admin = () => {
  return (
    <div>
        <CommonNavbar/>
        <div className="mt-16 flex ">
            <div className="">
                <AdminSidebar/>
            </div>
            <div className="w-full h-screen main-content">
            <Routes>
                <Route path='/admin' element={<Adminpage/>}></Route>
            </Routes>
            </div>
        </div>
    </div>
  )
}

export default Admin
