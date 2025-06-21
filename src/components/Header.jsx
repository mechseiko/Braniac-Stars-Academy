import React from 'react';
import {motion} from 'framer-motion'

const Header = () => {
    return(
        <motion.header
            className='header'
            // drag
            // dragConstraints={{top: 1, left: 1, right: 1, bottom: 1}}
        >
            <h1 title ="Braniac Stars Academy" className='headerh1'>Braniac Stars Academy</h1>
        </motion.header>
    )
}

export default Header;