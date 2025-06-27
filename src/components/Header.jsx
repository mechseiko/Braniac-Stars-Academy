import React from 'react';
import {motion} from 'framer-motion'
import mech from '../assets/mech.jpg'

const Header = () => {
    return(
        <motion.header
            className='header flex'
        >
            <h1 title ="Braniac Stars Academy" className='headerh1'>Braniac Stars Academy</h1>
            <img style={{width: "100px",height: "50px",marginTop: "15px"}} src={mech} alt="" />
        </motion.header>
    )
}

export default Header;