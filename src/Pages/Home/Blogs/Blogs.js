import React from 'react';
import './Blogs.css';
import Table from 'react-bootstrap/Table'

const Blogs = () => {
    return (
        <div>
            <div className='blog mt-2 ms-2 fs-5'>
                <h2>Difference between javascript and nodejs</h2>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='gap-4'>
                                <th>Comparison</th>
                                <th>Nodejs</th>
                                <th>Javascript</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. Environment</td>
                                <td>It is a runtime environment for Javascript.</td>
                                <td>On the other hand, Javascript is a programming language for creating website scripts.</td>
                            </tr>
                            <tr>
                                <td>2. Used In</td>
                                <td>Nodejs primarily used on the server-side.</td>
                                <td>Javascript generally used on the client-side.</td>
                            </tr>
                            <tr>
                                <td>3. Employed</td>
                                <td>In server-side development, Nodejs is employed.</td>
                                <td>On the other hand, Javascript is employed in frontend development.</td>
                            </tr>
                            <tr>
                                <td>4. FrameWork</td>
                                <td>Lodash, express are the example of Nodejs modules.</td>
                                <td>RamdaJS, TypedJS are  the javascript frameworks</td>
                            </tr>
                            <tr>
                                <td>5. Written In</td>
                                <td>It is written in C++, Javascript, and C</td>
                                <td>The upgraded version of ECMA script that runs on Chrome's C++-based V8 engine.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className='blog mt-2 ms-2 fs-5'>
                <h2>When should you use nodejs and when should you use mongodb</h2>
                <p>
                    I should used nodejs - <br />
                    Node. js is best suited for non-blocking, event-driven servers because to its single-threaded nature. It was designed for real-time, push-based architectures and is used to power typical web sites and back-end API applications.
                    <br /><br />
                    I should used mongodb - <br />
                    Using MongoDB can provide numerous benefits to a software development team. Its adaptable schema makes it simple to evolve and store data in an understandable format for programmers. MongoDB is also built to scale quickly and includes all of the necessary features of modern databases, such as transactions.
                </p>
            </div>
            <div className='blog mt-2 ms-2 fs-5'>
                <h2>Differences between sql and nosql databases.</h2>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='gap-4'>
                                <th>Comparison</th>
                                <th>sql</th>
                                <th>nosql</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1. Meaning</td>
                                <td>SQL refers to Structure Query Language</td>
                                <td>On the other hand, nosql refers to Not Only Structure Query Language</td>
                            </tr>
                            <tr>
                                <td>2. Schema</td>
                                <td>The schema of these databases is fixed, static, or predefined. </td>
                                <td>nosql use a dynamic schema.</td>
                            </tr>
                            <tr>
                                <td>3. Scalability</td>
                                <td>sql isVertically Scalable</td>
                                <td>On the other hand, nosql is Horizontally scalable.</td>
                            </tr>
                            <tr>
                                <td>4. Data Storage</td>
                                <td>These databases are ideal for complex queries.</td>
                                <td>These databases are not well suited to complex queries.</td>
                            </tr>
                            <tr>
                                <td>5. Follows</td>
                                <td>It is follows ACID property</td>
                                <td>It is follows CAP that means consistency, availability, partition tolerance</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className='blog mt-2 ms-2 fs-5'>
                <h2>What is the purpose of jwt and how does it work</h2>
                <p>
                    JWT (JSON Web Token) is an open standard that allows two parties - a client and a server - to share security information. Each JWT contains a set of claims as well as JSON objects that have been encoded. JWTs employ a cryptographic mechanism to verify that the token's claims cannot be changed after it is issued.
                    <br /> <br />
                    It works <br />
                    JWTs are one of the few web tokens that incorporate a set of claims. Claims are a sort of communication that occurs between two people. The use case in question determines the character of these claims. A claim could include information such as who issued the token, how long it is valid, and what permissions the client has been granted.
                </p>
            </div>
        </div>
    );
};

export default Blogs;