import React from 'react'
import courseData from '../../assets/courses.json'
import {motion} from 'framer-motion'
import Header from '../Header'
import Footer from '../Footer'
import Course from './Course'

const Courses = () => {
    return(
        <>
            <Header />
            <motion.main
    	        
            >
            {
                courseData.map((course, index) => {
                    return <Course key={index} course = {course.course} level={course.level} semester={course.semester}/>
                })
            }
            </motion.main>
            <Footer />
        </>
    )
}

export default Courses;