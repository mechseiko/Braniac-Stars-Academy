import React from 'react';
import Header from '../Header';
import Hero from './Hero';
import Location from '../Location';
import Footer from '../Footer';
import {motion} from 'framer-motion'

function Lander(props) {
    return (
        <div>
            <Header/>
            <Hero/>
            <Location/>
            <Footer/>
        </div>
    );
}

export default Lander;