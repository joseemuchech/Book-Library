import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="container-fluid navbar" style={{ backgroundImage:"URL('./images/banner1.jpeg')"}}>
        <div className="col-md-12">
          <h4 className="text-center text-white">DIGITAL LIBRARY</h4>
        </div>
    </div>
  )
}

export default Navbar