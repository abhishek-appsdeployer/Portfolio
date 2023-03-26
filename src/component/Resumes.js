import React from 'react'
import Resume from "../Images/Resume.jpg"
const Resumes = () => {
  return (
    <>
       <div className="container">
       <h1 className='text-center'>Resumes</h1>
        <img className='img-fluid cerimg rounded-2 border border-black border-2' src={Resume} alt="" />
       </div>

    </>
  )
}

export default Resumes
