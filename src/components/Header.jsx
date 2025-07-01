import { useState } from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import ham from '../assets/ham.svg'
import music from '../assets/music.mp3'
import logo from '../assets/mech.jpg'
import toggleMusicBtn from '../assets/toggleMusic.svg'
import Footer from './Footer';

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
        <div style={{position: "fixed", top:"-15px",zIndex:"200",width:"100%",marginBottom:"200px",}}>
            <motion.header
                className='header flex'
            >
                {/* LOGO/TITLE */}
                <h1 style={{fontSize:"25px"}} title ="Braniac Stars Academy" autoFocus>Braniac Stars Academy</h1>

                {/* DESKTOP NAV */}
                <nav className='desktop'>
                    <ul className='flex' style={{listStyleType:"none"}}>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/courses"}>Courses</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>Tutors</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/about"}>About</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/contact"}>Contact</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/developer"}>Developer/&gt;</Link></motion.li>
                    </ul>
                </nav>

                {/* MOBILE NAV */}
                <img src={ham} alt="ham_icon" className='ham' onClick={toggleNav}/>
                

                {/* MUSIC */}
                <img onClick={toggleMusic} src={toggleMusicBtn} alt="toggleMusicBtn" />
                {
                    isPlaying && 
                    <audio style={{display:"none"}} autoPlay loop>
                        <source src={music} type="audio/mp3"></source>
                    </audio>
                }
            </motion.header>
            {
                showNav && 
                <motion.aside
                >
                    <motion.nav 
                        className='mobile'
                        initial={{ x: -120 }}
                        animate={{ x: 0 }}
                        transition={{ duration: .75, delay: 0, ease: "linear" }}
                        style={{textAlign:"center", backgroundColor:"gray", height:"100vh", width:"65%"}}
                    >
                        <ul 
                            style={{listStyleType:"none",marginRight:"30px"}}
                            >
                            <img src={logo} alt="logo" style={{width:"100%", borderRadius:"10px",margin: "15px",}} />
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={"/courses"}>Courses</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>Tutors</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={"/about"}>About</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={"/contact"}>Contact</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={"/developer"}>Developer/&gt;</Link></motion.li>
                            <Footer />
                        </ul>
                    </motion.nav>
                </motion.aside>
            }
        </div>
    )
}

export default Header;