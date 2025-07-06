import React from 'react';
import {motion} from 'framer-motion'
import Header from '../Header';
import Footer from '../Footer';
import lost from '../../assets/404.png'

const Lost = () => {
    return (
        <>
            <Header />
            <motion.main>
                <img src={lost} alt="lost" width="100%" height="100%" />
            </motion.main>
            <Footer />
        </>
    );
}

export default Lost;