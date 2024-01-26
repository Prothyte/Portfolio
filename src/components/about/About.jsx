// About.js
import React from 'react';
import './About.css';


const About = () => {
    return (
        <section id="about" className="bg-indigo-800 p-[4rem]">
            <div className="grid grid-cols-3 justify-center justify-items-center content-evenly items-center">
                <div className="project-box">
                    <div className="image-container">

                        <div className="overlay-text">Pizza delivery system</div>
                    </div>
                </div>
                <div className="project-box">
                    <div className="image-container">

                        <div className="overlay-text">Chatbox</div>
                    </div>
                </div>
                <div className="project-box">
                    <div className="image-container">
                        <div className="overlay-text">Internal parking system</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;