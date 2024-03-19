import React from 'react'
import './Nav.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';

const Nav = () => {
  return (
    <div className='navigation'>
        <div className="nav3">
            <div className='arrow3'>
                <ArrowBackIcon/>
            </div>
            <div className="nav-item3">Fashion Apparel and Garments</div>
        </div>
        <div className="nav-search3">
            <div className="search3">
                <SearchIcon/>
                <input  type="text3" placeholder="Search" />
            </div>
            <button className="btn3" type="submit">Search</button>
        </div>
    </div>
  )
}

export default Nav
