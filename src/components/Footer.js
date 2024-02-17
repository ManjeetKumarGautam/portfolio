import React from 'react'
import nameLogo from '../images/name_logo.png'

function Footer() {
    return (
        <footer className="bg-dark">
            <div className="container p-4  text-light">
                <div className="row g-3">
                    <div className="col-sm-4 text-center">
                        <img src={nameLogo} alt="" width={200} />
                    </div>
                    <div className="col-md-4 col-6 text-center">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
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
                    </div>
                    <div className="col-md-4 col-6 text-center">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">

                                <a className="nav-link" href="/">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Linkedin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" row col-12 mt-5">
                <p className='disabled text-center '>copyright &copy; All Rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer