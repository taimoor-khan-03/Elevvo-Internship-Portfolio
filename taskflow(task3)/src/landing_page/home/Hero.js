import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5">
            <div className='row text-center mb-5'>
                <img src='media/images/homeHero.png' alt='Hero image' className='mb-5'></img>
                <h1 className='mt-5 fs-2'>Organize your life, effortless.</h1>
                <p>TaskFlow is the simple, powerful tool to manage tasks, projects, and deadlines in one place.</p>
                <button className='fs-6 p-2 btn btn-primary' style={{width: "18%" , margin: "0 auto"}}>Start Your Free Trial</button>

            </div>
        </div>
    );
}

export default Hero;