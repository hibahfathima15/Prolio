import React from 'react'
import ProfPage from './Navigation/Profile'
import CommonNavbar from './Navigation/CommonNavbar'
import Sidebar from './Navigation/Sidebar'
import { Route, Routes } from 'react-router'

const Profilepage = () => {
  return (
      <>
      <CommonNavbar />
      <div className="mt-16 flex ">
        <div className="w-[230px] ">
          <Sidebar />
        </div>
        <div className="w-full h-screen">
          {/* <Routes> */}
            {/* <Route path="/" element={<LandingPage />}></Route> */}
            {/* <Route path="/profile" element={<ProfPage />}></Route > */}
            {/* <Route path="/opportunities" element={<Opportunities />}></Route> */}
            {/* <Route path="/wishlist" element={<Wishlist />} /> */}
          {/* </Routes> */}

          <ProfPage />
          
        </div>

      {/* <ProfPage /> */}
    </div>
    </>
  )
}

export default Profilepage
