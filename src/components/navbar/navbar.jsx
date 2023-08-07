import React from 'react'
import './navbar.css'

const navbar = () => {
    return (
        <nav>
            <div className="left">
                <h2 id='Title'>AIvantage</h2>
                <div className="logo">
                    {/* gif */}
                </div>
                <a href="">Emergency</a>
            </div>
            <div className="right">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Medicines</a>
                <a href="">Doctors</a>
                <a href="">Playments</a>
                <a href="">Signin</a>
            </div>
        </nav>
    )
}

export default navbar