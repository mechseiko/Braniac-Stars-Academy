import React from 'react';
import {motion} from 'framer-motion'

const Footer = () => {
    return (
        <motion.footer style={{textAlign:"center", backgroundColor:"blanchedalmond", padding: "20px", fontWeight:700,}}>
            <h4>Copyright &copy; Brainiac Stars Academy 2022 - {new Date().getFullYear()}</h4>
            <h5>Developed by <a style={{textDecoration:"none",}} href="">MECHSEIKO</a></h5>
        </motion.footer>
    );
}

export default Footer;