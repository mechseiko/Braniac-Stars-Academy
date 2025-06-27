import React, { useState } from 'react';
import Header from '../Header';
import Hero from './Hero';
import Location from '../Location';
import Footer from '../Footer';
import Loader from '../Loader';
import { Link } from 'react-router-dom';

function Lander(props) {
    const [loading, setLoading] = useState(true);
    const loader = setInterval(() => {
        setLoading(false);
        clearInterval(loader);
    }, 3000);
    return (
        <div>
            {
                loading ? <Loader/> : 
                <main>
                    <Header/>
                    <Hero/>
                    <Link to={"/courses"}>Proceed to courses</Link>
                    <Location/>
                    <Footer/>
                </main>
            }
        </div>
    );
}

export default Lander;