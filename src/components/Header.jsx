import { useState } from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import ham from '../assets/ham.svg'
import music from '../assets/music.mp3'
import logo from '../assets/logo.png'
import toggleMusicBtn from '../assets/toggleMusic.png'
import HeroButton from './HeroButton';
import Footer from './Footer';

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [showNav, setShowNav] = useState(false)

    const openNav = () => {
        if(!showNav){ setShowNav(true);document.querySelector("main").style.opacity = "0.8"}
    }
    const closeNav = () => {
        if(showNav){setShowNav(false);document.querySelector("main").style.opacity = "1.0"}
    }
    const toggleMusic = () => {
        isPlaying ? setIsPlaying(false) : setIsPlaying(true)
    }

    return(
        <div style={{position: "fixed", top:"-15px",zIndex:"100",width:"100%",marginBottom:"200px",}}>
            <motion.header
                className='header flex'
            >
                {/* LOGO/TITLE */}
                <img title ="Braniac Stars Academy" src={logo} alt="logo" style={{width:"60px", borderRadius:"5px",}} />

                {/* DESKTOP NAV */}
                <nav className='desktop'>
                    <ul className='flex' style={{listStyleType:"none"}}>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/"}>Home</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/courses"}>Courses</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/about"}>About</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={"/contact"}>Contact</Link></motion.li>
                        <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>Developer</Link></motion.li>
                    </ul>
                </nav>

                {/* MOBILE NAV */}
                <div className='flex'>
                    <img src={ham} alt="ham" className='ham' onClick={openNav}/>
                    {/* MUSIC */}
                    <img onClick={toggleMusic} src={toggleMusicBtn} style={{width: "50px"}} alt="toggleMusicBtn" />
                </div>
                
                {
                    isPlaying && 
                    <audio style={{display:"none"}} autoPlay loop>
                        <source src={music} type="audio/mp3"></source>
                    </audio>
                }
            </motion.header>
            {
                showNav && 
                <aside
                >
                    <motion.nav
                        className='mobile'
                        initial={{ x: 150 }}
                        animate={{ x: 0 }}
                        transition={{ duration: .75, delay: 0, ease: "linear" }}
                        style={{textAlign:"left", position: "fixed", top:"0px", right:"0px", backgroundColor:"blanchedalmond", height:"100vh",width:"75%",padding: "20px"}}
                    >
                        <ul 
                            style={{listStyleType:"none",marginRight:"30px"}}
                            >
                            <img src={ham} alt="closeNav" onClick={closeNav} style={{position: "fixed", top:"5px", right:"0px",}}/>
                            <img src={logo} alt="logo" style={{width:"100%", borderRadius:"10px",margin: "15px",marginTop:"35px",}} />
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={"/"}>Home</Link></motion.li>
                            <hr />
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={"/courses"}>Courses</Link></motion.li>
                            <hr />
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={"/about"}>About</Link></motion.li>
                            <hr />
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={"/contact"}>Contact</Link></motion.li>
                            <hr />
                            <motion.li whileHover={{ scale: 1.1 }}><Link to={""}>Developer</Link></motion.li>
                        </ul>
                        <HeroButton />
                        <Footer />
                    </motion.nav>
                </aside>
            }
        </div>
    )
}

export default Header;