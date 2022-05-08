import React from 'react';
import myPic from '../../images/MD. AL AMIN HOSSAIN.PNG'

const About = () => {
    return (
        <div className='container border border-dark mt-2' >
            <h1 className='text-center bg-info'>About Me</h1>
            <h2>My Name: MD. AL AMIN HOSSAIN</h2>
            <div className='d-flex border border-success'>
                <img className='rounded' src={myPic} alt="" />
                <div className='mx-auto'>
                    <h2 className='text-center text-success'>Goals</h2>
                    <p className='ms-2 text-justify fs-5 '>My goal is to provide customer-centric, result-oriented, cost-effective, innovative, and functional IT solutions to my valued local and global clients. <br /><br />
                        To become a professional web development,  I have Experience at HTML5, CSS3, Bootstrap,MySQL Development, WordPress, JavaScript, Nodejs, Mongoose, React,MERN Stack,MongoDB.
                        <br /><br />
                        My vision is to expand my web design and software development business around the world by offering my clients customized and effective IT services to help them achieve their goals. My capabilities include the ability to provide high-quality IT services such as web design and development.
                    </p>
                </div>
            </div>
            <div>
                <h2>Development Skills & Tools</h2>
                • Back-end: Node JS, ES5, ES6, ES7 <br />
                • Front-end: React JS, Material UI, CSS3, HTML5, Bootstrap. <br />
                • Process Manager: pm2 <br />
                • Database: Mongo DB, MySQL, Postman, Firebase, <br />
                • Security Practice: Auth2.0, Passport Authentication, Jsonwebtoken <br />
                • Tooling & CI: Git, NPM, Yarn, <br />
                • Testing: Unit Testing: Mocha, Chai <br />
                • API Documentation Tools: Postman, curl

            </div>
        </div>
    );
};

export default About;