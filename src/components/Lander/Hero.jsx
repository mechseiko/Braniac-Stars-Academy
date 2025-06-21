import React, { useState, useEffect }  from 'react';
import { motion } from 'framer-motion';
import heroimg from '../../assets/heroimg.jpg'

const Hero = () => {
    const [text, setText] = useState("Success")
    const spans = ["Excellence", "Breakthrough", "Comeback", "Success"]
    let key = 0;
    useEffect(() => {
        const timer = setInterval(() => {
            key += 1
            key = Number(key.toFixed())
            key <= spans.length - 1 ? setText(spans[key - 1]):(key = key/2,setText(spans[key/2]))
        }, 2000)
        return () => clearInterval(timer);
    }, [])
    return (
        <motion.div className='flex hero'
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{duration:1.0, ease:'easeInOut'}}
            >
            <div className='heroleft'> 
                <h1>Unlock Academic {" "}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className='herospan'
                    >
                        {text}
                    </motion.span>{" "}
                with Braniac Stars Academy</h1>
                <p
                >Explore step-by-step guides and resources to master subjects like Math and boost your grades today!</p>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='herobutton'
                >GET IN TOUCH &gt;&gt;</motion.button>
            </div>
            <img src={heroimg} className='heroimg' alt="hero" />
        </motion.div>
    );
}

export default Hero;