import React from 'react'
// import { NavLink } from 'react-router-dom'
import img from '../src/images/images-1.jpg'
import Common from './Common'
const About = () => {
    return (
        <div>
            <Common
                name='Welcome to About Page' imgsrc={img} visit='./contact' btname="Contact now"
            />
        </div>
    )
}

export default About;
