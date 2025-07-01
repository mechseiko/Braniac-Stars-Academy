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
            <motion.section
                
            >
            {
                courseData.map((course, index) => {
                    return <Course course = {course.course} level={course.level} semester={course.semester}/>
                })
            }
            </motion.section>
            <Footer />
        </>
    )
}

export default Courses;