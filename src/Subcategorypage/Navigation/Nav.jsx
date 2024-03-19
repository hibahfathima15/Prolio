import React from 'react'
import './Nav.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';

const Nav = () => {
  return (
    <div className='navv'>
        <div className="nav11">
            <div className='arroww'>
                <ArrowBackIcon/>
            </div>
            <div className="nav-itemm">Fashion Accessories and Footwear</div>
        </div>
        <div className="nav-searchh">
            <div className="searchh">
                <SearchIcon/>
                <input  type="textt" placeholder="Search" />
            </div>
            <button className="btnn" type="submit">Search</button>
        </div>
    </div>
  )
}

export default Nav;
