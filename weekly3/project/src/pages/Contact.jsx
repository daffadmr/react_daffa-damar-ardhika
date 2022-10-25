import React from "react";
import { useState } from "react";

const dataForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const Contact = () => {
  const [data, setData] = useState(dataForm);

  const handleChange = (e) =>{
      const {name, value} = e.target;

      setData({
          ...data,
          [name]: value
      })
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      alert(`
          Data Terkirim!
          
          Name: ${data.name}
          Email: ${data.email}
          Number Phone: ${data.phone}
          Message: ${data.message}
          `)
      setData(dataForm)
  }

  return (
    <>
      <div className="container contact mb-5">
    <div className="contact-section row justify-content-center py-5">
      <div className="contact-text col-12 col-lg-6 d-flex flex-column justify-content-center">
        <h1 className="text-center text-lg-start">Contact Us</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique earum vel vitae architecto
          numquam molestiae, ducimus, magnam ab debitis quo beatae cupiditate non, placeat at pariatur
          illo aperiam maiores autem!</p>
      </div>
      <div className="contact-form col-12 col-lg-6 py-5 py-lg-0 align-items-center">
        <form id="iniForm" name="iniForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Your Name</label>
            <input onChange={handleChange} value={data.name} type="text" name='name' className="form-control" id="nama" placeholder="Your name..." />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input onChange={handleChange} value={data.email} type="email" name='email' className="form-control" id="email" placeholder="Your email..." />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input onChange={handleChange} value={data.phone} type="number" name='phone' className="form-control" id="phone" placeholder="Your phone..." />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea onChange={handleChange} value={data.message} name='message' className="form-control" id="message" rows="3"
              placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="w-100">Send a Message</button>
        </form>
      </div>
    </div>
  </div>
    </>
  );
};

export default Contact;
