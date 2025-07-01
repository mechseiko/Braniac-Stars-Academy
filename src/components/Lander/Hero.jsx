import React, { useState, useEffect }  from 'react';
import { motion } from 'framer-motion';
import heroimg from '../../assets/heroimg.jpg'
import HeroButton from '../HeroButton';

const Hero = () => {
    const [text, setText] = useState("  Success")
    const spans = ["Excellence", "Breakthrough", "Acheivements", "Greatness", "Eminence", ""]
    let key = 0;
    useEffect(() => {
        const timer = setInterval(() => {
            key += 1
            key = Number(key.toFixed())
            key <= spans.length - 1 ? setText(spans[key - 1]):(key = key/4,setText(spans[key]))
        }, 2000)
        return () => clearInterval(timer);
    }, [])
    return (
        <motion.section className='flex hero'
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1.0, ease:'easeInOut' }}
            >
            <div className='heroleft'> 
                <h1 style={{fontSize:"3em", textShadow:"1px 2px 1px #6a32da",}}>Unlock Academic {" "}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className='herospan'
                        style={{color: "purple"}}
                    >
                        {text?text:"  Success"}
                    </motion.span>{" "}
                with Braniac Stars Academy</h1>
                <p style={{fontSize:"20px", marginBottom:"35px",}}
                >Explore step-by-step guides and resources to master subjects like Math and boost your grades today!</p>
                <HeroButton />
            </div>
            <img src={heroimg} className='heroimg' alt="hero" />
        </motion.section>
    );
}

export default Hero;