import React from 'react';
import {motion} from 'framer-motion'

const HeroButton = () => { 
    return (
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='herobutton'
        >GET INVOLVED</motion.button>
    );
}

export default HeroButton;