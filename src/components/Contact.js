import React from 'react'

function Contact() {
    return (

        <div className="container py-5">
            <h2 className="text-center">Contact Me</h2>
            <div className="row justify-content-center mt-4">
                <div className="col-sm-9 card p-5">
                    <form action="">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact