import React from 'react'
import { Link } from 'react-router-dom'
import "./Header_CSS.css"

const Header = () => {
  return (
    <header className='container__header'>
        <h1><Link className='Link' to='/' >Ecomerce</Link></h1>
        <nav>
            <ul className='menu'>
                <li><Link to='/' >Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/'>Purchase</Link></li>
                <li><Link to='/' >Cart</Link></li>
            </ul>


        </nav>
    </header>
  )
}

export default Header