import React from 'react'
import './navbar.css'

const navbar = () => {
    return (
        <div class="main">
            <div class="header">
                <div class="logo">
                    <div class="logopic">
                        <div id="titleOver">AiVantage</div>
                    </div>
                </div>
                <div class="home">
                    <a href="">Home</a>
                </div>
                <div class="services">
                    <a href="">Services</a>
                </div>
                <div class="about">
                    <a href="">About</a>
                </div>
                <div class="ourDoc">
                    <a href="">Our Doctor</a>
                </div>
                <div class="contact">
                    <a href="">Contact</a>
                </div>
                <div class="appoint">
                    <a href="">Book an appointment</a>
                </div>
                <div class="metamask">
                    <button type="button" class="btn btn-primary btn-sm" id="connect">
                        Connect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default navbar