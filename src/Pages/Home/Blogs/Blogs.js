import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mt-2 ms-2 fs-5'>
                <h2>Difference between `authorization` and `authentication`</h2>
                <p>
                    1. Authentication is the process of determining a user's identity. <br />
                    2. Authorization is the process of determining whether or not a user is permitted to do a specific action. <br />
                    3. Authentication ensures the account's legitimacy by verifying that the person accessing it is who he or she claims to be. <br />
                    4. The term "Authorization" refers to authorizing the right to utilize a resource to a user account configured on a computer system. <br />
                    5. Four-factor authentication refers to the employment of four different types of identity-verifying credentials, which are commonly classified as knowledge, possession, inherence, and location elements.
                </p>
            </div>
            <div className='mt-2 ms-2 fs-5'>
                <h2>Why are you using `firebase`? What other options do you have to implement authentication?</h2>
                <p>
                    Firebase is the way to go when my application just need a rudimentary amount of interaction with legacy systems or third-party services. When my application doesn't require a lot of data processing or any kind of complicated user authentication, Firebase is a great option.only need to get the user's login credentials and pass them to the Firebase Authentication SDK to authenticate them. An email address and password, a mobile phone number, or a token from an identity provider like Facebook, Google, Twitter, or GitHub could be used as credentials.
                    Yes, I have other options to implement authentication.
                </p>
            </div>
            <div className='mt-2 ms-2 fs-5'>
                <h2>What other services does `firebase` provide other than authentication</h2>
                <p>
                    • Parse - is a free and open-source backend platform. <br />
                    • Back4app - Parse Hosting Platform. <br />
                    • Kinvey - Enterprise Mobile Backend as a Service. <br />
                    • Kuzzle - is a backend for web, hybrid, and native mobile apps, as well as Internet of Things projects. <br />
                    •  Pubnub — Global Messaging and Real-Time APIs. <br />
                    • Game Sparks - Game Backend Platform. <br />
                    • Appwrite - Flutter developers can use Appwrite as an open-source backend. <br />
                    • Deployd — A simple core library for your application with a modular API. <br />
                    • NHost - Speeds up development and gives you complete control. <br />
                    • Amplify JS is a Javascript framework that is open-source. <br />
                    • Heroku is a Salesforce-backed platform as a service.
                </p>
            </div>
        </div>
    );
};

export default Blogs;