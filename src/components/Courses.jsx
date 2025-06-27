import React from 'react'
import courseData from '../assets/courses.json'
import Header from './Header'
import Footer from './Footer'
import Course from './Course'

const Courses = () => {
    return(
        <>
            <Header />
            {
                courseData.map((course, index) => {
                    return <Course course = {course.course} level={course.level} semester={course.semester} diff={course.diff} />
                })
            }
            <Footer />
        </>
    )
}

export default Courses;