import React from 'react'
import cer from "../Images/AbhiNptel.jpeg"
import Header from './Header'

const Certificate = () => {
  return (
    <>
    <Header/>
        <h1 className="text-center mt-5 pt-1">Certificate</h1>
        <h3 className='text-center p-3'>Programming, Data Structre and Algorithms Using Python</h3>
       <div className="container">
       <img src={cer} alt="" className='img-fluid border border-dark rounded-5 cerimg pt-5' />
       </div>
    </>
  )
}

export default Certificate
