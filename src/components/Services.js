import React from 'react'
import './style/Services.css'
import FrontendPic from '../images/front.png';
import BackendPic from '../images/back.jpg';
import FullStackPic from '../images/full_stack.png';
function Services() {
    return (
        <div className="service py-5">
            <div className="container pb-3">
                <h2 className='text-center  text-shadow'>Services</h2>
                <div className="row mt-4 g-3">

                    <div className=" col-md-4">
                        <div className="card bg-dark text-white box-shadow">
                            <img src={FrontendPic} className="card-img bg-img" alt="..." />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                <h1 className="card-title text-center service-text">Frontend Devloper</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card bg-dark text-white box-shadow">
                            <img src={FullStackPic} className="card-img bg-img" alt="..." />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                <h1 className="card-title text-center service-text">Full Stack Web Developer</h1>

                            </div>
                        </div>
                    </div>
                    <div className=" col-md-4">
                        <div className="card bg-dark text-white box-shadow">
                            <img src={BackendPic} className="card-img bg-img" alt="..." />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center">
                                <h1 className="card-title text-center service-text">Backend Developer</h1>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Services