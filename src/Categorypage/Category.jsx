import React from 'react'
import Navbar from './Navigation/Nav'
import Subcat from './Subs/Subs'
import './Category.css'

const Category = () => {
  return (
    <div className='categories'>
      <Navbar />
      <Subcat />
    </div>
  )
}

export default Category
