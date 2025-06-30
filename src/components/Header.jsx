import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import ham from '../assets/ham.svg'
import music from '../assets/music.mp3'
import svg from '../assets/svg.svg'

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [showNav, setShowNav] = useState(false)

    const toggleNav = () => {
        !showNav ? setShowNav(true) : setShowNav(false)
    }
    const toggleMusic = () => {
        isPlaying ? setIsPlaying(false) : setIsPlaying(true)
    }
    return(
        <>
            <motion.header
                className='header flex'
            >
                {/* LOGO/TITLE */}
                <h1 style={{fontSize:"25px"}} title ="Braniac Stars Academy">Braniac Stars Academy</h1>

                {/* DESKTOP NAV */}
                <nav className='desktop'>
                    <ul className='flex'>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/courses"}>Courses</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>Tutors</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>About</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>Contact</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>Developer/&gt;</Link></motion.li>
                    </ul>
                </nav>

                {/* MOBILE NAV */}
                <img src={ham} alt="ham_icon" className='ham' onClick={toggleNav}/>
                

                {/* MUSIC */}
                <button className='musicButton' onClick={toggleMusic}><img src={svg} alt="svg" /></button>
                {
                    isPlaying && 
                    <audio className='music' autoPlay loop>
                        <source src={music} type="audio/mp3"></source>
                    </audio>
                }
            </motion.header>
            {
                showNav && 
                <nav className='mobile' style={{}}>
                    <ul>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/courses"}>Courses</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>Tutors</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>About</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>Contact</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>&lt;Developer/&gt;</Link></motion.li>
                    </ul>
                </nav>
            }
        </>
    )
}

export default Header;