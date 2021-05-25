import React, { Fragment } from 'react'
import img from '../assets/911761.jpg';

const About = () => {
    return (
        <Fragment>
        <div className="row">
        <div class="col s6">
            <h5>From this Website You can Get all details about favourite superhero</h5>
            <p>Just select from Superhero or Villain from Navbar and You can See every
            little Details about your favourite character from their full name to publisher</p>

            <p>This website is developed by <span>Tej Pratap</span></p>
            <hr/>
            <h5>Technologies used:</h5>
            <ul>
                <li>React</li>
                <li>Material UI</li>
                <li>Super Hero API</li>
            </ul>
            <hr/>
        </div>

        <div class="col s6">
        <img src={img}  style={{"width":"500px","height":"600px"}}/>
        </div>
        </div>
        </Fragment>
    )
}

export default About
