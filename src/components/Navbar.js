import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar flex-center'>
       <Link className="link" to ="/"><h1 className='webname'>MovieMingle</h1></Link>
    </nav>
  )
}

export default Navbar