import React from 'react'
import {motion} from 'framer-motion'

const Course = ({course, level, semester, diff}) => {
    return(
        <motion.article>
            <h1>{course}</h1>
            <button className='filter'>{level}</button>
            <button className='filter'>{semester}</button>
        </motion.article>
    )
}


export default Course;