import React, { useState } from 'react';

const Loader = () => {
    const [text, setText] = useState("Fetching data...")
    const textChange = setTimeout(() => {
        setText("Almost There...")
    }, 1500)
    const loadStyle = {
        width: "40px",
        height: "40px",
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