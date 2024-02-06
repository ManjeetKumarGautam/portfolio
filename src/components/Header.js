import React from 'react'
import './style/Header.css'
import Photo from '../images/photo.jpg'

function Header() {
    return (
        <div className="header container my-5">

            <div className="content">
                <div className="image">
                    <img src={Photo} alt="" />
                </div>
                <p>Hi! I'm <span>Manjeet Kumar Gautam</span></p>
                <h2>Java Full Stack Web Developer</h2>
                <small>I have expertise in technologies like Java, Spring Boot, Python, and HTML/CSS. I am a certified web developer and have a strong understanding of data structures and algorithms. </small>

                <ul className="d-flex social-links">
                    <li><a href="/">Linkedin</a></li>
                    <li>|</li>
                    <li><a href="/">GitHub</a></li>
                    <li>|</li>
                    <li><a href="/">Instagram</a></li>
                </ul>

            </div>
        </div>
    )
}

export default Header