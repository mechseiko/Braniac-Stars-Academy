import React from 'react'

const Course = ({course, level, semester, diff}) => {
    return(
        <div>
            <article>
                <h1>{course}</h1>
                <button className='filter'>{level}</button>
                <button className='filter'>{semester}</button>
                <button className='filter'>{diff}</button>
                <button className='filter'>{diff}</button>
            </article>
        </div>
    )
}


export default Course;