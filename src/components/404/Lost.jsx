import React from 'react';
import {motion} from 'framer-motion'
import Header from '../Header';
import Footer from '../Footer';

const Lost = () => {
    return (
        <>
            <Header />
            <motion.main>
                404 Page
            </motion.main>
            <Footer />
        </>
    );
}

export default Lost;