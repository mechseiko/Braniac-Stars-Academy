import React from 'react';
import {motion} from 'framer-motion'
import Header from '../Header';
import Footer from '../Footer';

function About(props) {
    return (
        <>
            <Header />
            <motion.main>
                About Page
            </motion.main>
            <Footer />
        </>
    );
}

export default About;