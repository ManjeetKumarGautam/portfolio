import React from 'react'
import './style/Contact.css'
function Contact() {
    return (

        <div className="container py-5 my-5">
            <h2 className="text-center text-shadow">Contact Me</h2>
            <div className="row justify-content-center p-3 mt-4">
                <div className="col-sm-9 card contact-box box-shadow  p-4">
                    <form action="">
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label for="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" />
                        </div>
                        <div className="mb-3">
                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact