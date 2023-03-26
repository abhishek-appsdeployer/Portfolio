import React from 'react'
import { AiFillPhone ,AiOutlineMail} from "react-icons/ai";

import { MdLocationOn} from "react-icons/md";
import "./contact.css"
import ContactForm from './ContactForm';
import Header from './Header';
const Contact = () => {
  return (
   <>
   <Header/>
    <h1 className='text-center p-4'>Contact </h1>
    <div className="container p-5">
        <div className="d-flex flex-column flex-md-row gap-5 ">
        <div className=''>
        <div className="card p-5 car">
            <h3><h2>Contact informatiorn</h2></h3>
            <p>Fill up the form i will get back to you within 24 hours</p>

            <div className="d-flex gap-3">
            <p><AiFillPhone/></p>
            <p>+917992317171</p>

            </div>

            <div className="d-flex gap-3">
            <p><AiOutlineMail/></p>
            <p>abhishek2019kr@gmail.com</p>

            </div>

            <div className="d-flex gap-3">
            <p><MdLocationOn/></p>
            <p>Indore, Madhya Pradesh</p>

            </div>
        </div>
            
        </div>
        <div>
            <ContactForm/>
            
        </div>

        </div>
    </div>
   </>
  )
}

export default Contact
