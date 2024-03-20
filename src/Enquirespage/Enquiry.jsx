import React from 'react'
import CommonNavbar from './Navigation/CommonNavbar'
import Sidebar from './Navigation/Sidebar'
import FqPage from './Navigation/Faqs'

const Enquiry = () => {
  return (
    <>
    <CommonNavbar/>
      <div className="mt-16 flex ">
        <div className="w-[230px] ">
          <Sidebar/>
        </div>
        <div className="w-full h-screen">
          <FqPage/>
        </div>
    </div>
    </>
  )
}

export default Enquiry
