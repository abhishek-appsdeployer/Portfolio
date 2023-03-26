import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function formsubmit(e) {
    e.preventDefault();
    alert('submit');
  }

  return (
    <>
      <div className="ml-auto">
        <form onSubmit={formsubmit}>
          <input className='mt-2 rounded-2 p-2' type="text" placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <input className='mt-2 rounded-2 p-2' type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <textarea className='mt-2 rounded-2 p-2' id="w3review" name="w3review" rows="4" cols="40" placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <br />
          <button type="submit" className="mt-2 btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
