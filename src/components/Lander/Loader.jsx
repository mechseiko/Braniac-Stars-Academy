import React, { useState } from 'react';
import {motion} from 'framer-motion'

const Loader = () => {
    const [text, setText] = useState("Fetching data...")
    const textChange = setTimeout(() => {
        setText("Almost There...")
    }, 1) //1000
    const loadStyle = {
        width: "25px",
        height: "25px",
        borderRadius: "40%",
        backgroundColor: "purple",
    }
    return (
        <div className='parentCursor'>
            <div className="cursor" style={loadStyle}></div>
            <div className="cursor" style={loadStyle}></div>
            <h2>{text}</h2>
            <div className="cursor" style={loadStyle}></div>
            <div className="cursor" style={loadStyle}></div>
        </div>
    );
}

export default Loader;