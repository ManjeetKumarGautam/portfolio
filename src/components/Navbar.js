import React from 'react'
import shadowLogo from '../images/shadow_logo.png'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container text-shadow ">
                <a className="navbar-brand " href="/"><img src={shadowLogo} alt="img" width={70} className='shadow-logo' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto  mb-2 mx-3 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button type="button" class="btn btn-outline-success box-shadow">Download CV</button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar