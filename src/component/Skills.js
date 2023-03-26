import React from 'react'
import Header from './Header'
import "./Skill.css"
const Skills = () => {
  return (
    <>
    <Header></Header>
    <h1 className="text-center pt-5">Skills</h1>
        <h3 className="text-center">What can i do?</h3>
        {/* container */}

        <div className="container p-5">
            <div className="d-flex  justify-content-around flex-column flex-md-row gap-3">
                <div className="card p-3 ">
                    <h3>Web Developer</h3>
                    <h5>React js, JavaScript</h5>
                </div>
                <div className="card p-3">
                    <h3>Mobile Developer</h3>
                    <h5>React Native</h5>
                </div>
                <div className="card p-3">
                    <h3>Front End Developer</h3>
                    <h5>Html, Css ,JavaScript</h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills
