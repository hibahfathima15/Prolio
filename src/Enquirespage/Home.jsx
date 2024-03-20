import React from 'react'
import CommonNavbar from './Navigation/CommonNavbar'
import Sidebar from './Navigation/Sidebar'
import Enquiry from './Enquiry'

const Home = () => {
  return (
    <>
    <CommonNavbar/>
      <div className="mt-16 flex ">
        <div className="w-[230px] ">
          <Sidebar/>
        </div>
        <div className="w-full h-screen">
          {/* <Routes>
            <Route path="/enquiry" element={<Enquiry/>}></Route >
          </Routes> */}
        </div>
    </div>
    </>
  )
}

export default Home
