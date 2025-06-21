import React, { useState } from 'react';
import Header from '../Header';
import Hero from './Hero';
import Location from '../Location';
import Footer from '../Footer';
import Loader from '../Loader';

function Lander(props) {
    const [loading, setLoading] = useState(true);
    const loader = setInterval(() => {
        setLoading(false);
        clearInterval(loader);
    }, 2000);
    return (
        <div>
            {
                loading ? <Loader/> : 
                <>
                    <Header/>
                    <Hero/>
                    <Location/>
                    <Footer/>
                </>
            }
        </div>
    );
}

export default Lander;