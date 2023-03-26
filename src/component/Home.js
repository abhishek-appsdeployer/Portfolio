import React from 'react'
import "./Home.css"
import dev from "../Images/dev.jfif"
import Introduce from './Introduce'
import Header from './Header'
import Skills from './Skills'
import Certificate from './Certificate'
const Home = () => {
  return (
    <>
    <Header/>
    <div className='mt-5'>
<div className="container pt-5">
  <div className="d-flex flex-md-row flex-column-reverse ">
    <div className='w-50 m-auto'>
      <h1>Hi</h1>
      <h1>ABHISHEK KUMAR</h1>
      <h2>Developer</h2>
    </div>
    <div>
      <img className='devimg' src={dev} alt="" />
    </div>
  </div>
</div>
{/* introduction */}
<Introduce/>
{/* skill */}
<Skills/>
{/* certificate */}
<Certificate/>
    </div>
    </>
  )
}

export default Home
