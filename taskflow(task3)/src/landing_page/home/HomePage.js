import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';

import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <>
            <Hero/>
            <Stats/>
            <Pricing/>
            <OpenAccount/>
        </>
    );
}

export default HomePage;