import React from 'react'
function Footer() {
    return (
        <footer className="bg-dark">
            <div className="container p-4  text-light">
                <div className="row">
                    <div className="col-sm-4">
                        <h1>Manjeet</h1>
                    </div>
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
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
            <div className=" row col-12">
                <p className='disabled text-center '>copyright &copy; All Rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer