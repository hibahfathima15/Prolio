import React from 'react'
import './Nav.css'
import SearchIcon from '@mui/icons-material/Search';

const Nav = () => {
  return (
    <div className='nav'>
      <div className="nav1">
        <div className="nav-item">All Categories</div>
        <div className="nav-item">Products</div>
        <div className="nav-item">Solutions</div>
        <div className="nav-item">Services</div>
      </div>
      <div className="nav-search">
        <div className="search">
          <SearchIcon/>
          <input  type="text" placeholder="Search" />
        </div>
        <button className="btn" type="submit">Search</button>
      </div>
    </div>
  )
}

export default Nav;
