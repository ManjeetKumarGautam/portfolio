import React from 'react';
import './style/About.css';
import Photo from '../images/86048496.jpeg'
function About() {
    return (
        // <div>I am Manjeet Kumar Gautam, and I have completed my Master of Computer Applications (MCA) at Baba Saheb Bhimrao Ambedkar Central University in Lucknow in 2023. I'm a dedicated computer professional with a passion for my field. My academic journey began with a Bachelor of Computer Applications (BCA) from The Study Hall College, where I gained a solid foundation in computer science, graduating in 2021.
        //     In terms of skills, I am proficient in HTML, have intermediate skills in CSS, Java, Spring MVC, MySQL, and Git. My GitHub profile (https://github.com/ManjeetKumarGautam) serves as a platform where I actively contribute to collaborative development and showcase my continuous learning journey.
        //     I am a motivated and skilled individual with a strong educational background and a passion for software development. My projects demonstrate my ability to apply theoretical knowledge to real-world scenarios, and I am excited about the opportunities that lie ahead in the field of computer applications.
        // </div>
        <div className="container p-3">
            <h2 className='text-center mb-4'>About</h2>
            <div className="row py-5">
                <div className="col-md-4">
                    <img src={Photo} alt="" className='img-fluid' />
                </div>
                <div className="col-md-8 ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">About Me</h4>
                            <hr />
                            <p className="card-text about-text">
                                I am Manjeet Kumar Gautam, and I have completed my Master of Computer Applications (MCA) at Baba Saheb Bhimrao Ambedkar Central University in Lucknow in 2023. I'm a dedicated computer professional with a passion for my field. My academic journey began with a Bachelor of Computer Applications (BCA) from The Study Hall College, where I gained a solid foundation in computer science, graduating in 2021.
                                <br />
                                In terms of skills, I am proficient in HTML, have intermediate skills in CSS, Java, Spring MVC, MySQL, and Git. My GitHub profile (https://github.com/ManjeetKumarGautam) serves as a platform where I actively contribute to collaborative development and showcase my continuous learning journey.
                                <br />
                                I am a motivated and skilled individual with a strong educational background and a passion for software development. My projects demonstrate my ability to apply theoretical knowledge to real-world scenarios, and I am excited about the opportunities that lie ahead in the field of computer applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About