import React from 'react'
import './style/Header.css'
import Photo from '../images/photo.jpg'

function Header() {
    return (
        <div className="header mt-3 mb-5">
            <div className="container">
                <div className="content text-center">
                    <div className="image">
                        <img src={Photo} alt="" />
                    </div>
                    <p className="greet-name text-shadow">Hi! I'm <span className='my-name'>Manjeet Kumar Gautam</span></p>
                    <h2 className='name-title'>Full Stack Web Developer (Java) </h2>
                    <small className='small-about'>I have expertise in technologies like Java, Spring Boot, Python, and HTML/CSS. I am a certified web developer and have a strong understanding of data structures and algorithms. </small>

                    <div className="d-flex justify-content-center mt-3 social-links">

                        <a className="btn btn-outline-success box-shadow" href="/">Linkedin</a>

                        <a className="btn btn-outline-success box-shadow" href="https://github.com/ManjeetKumarGautam" target='_new'>GitHub</a>

                        <a className="btn btn-outline-success box-shadow" href="/">Instagram</a>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Header