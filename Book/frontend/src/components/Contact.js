// Contactus.js
import React, { useState } from "react";
import "./Contactus.css";
import { Modal } from 'react-bootstrap'; 

function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear form fields
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      message: "",
    });

    // Display submission message
    // setSubmissionMessage("Check your submitted email soon for a feedback from us!");

    // Show the modal
    setShowModal(true);
  };

    // Handler for closing the modal
    const handleCloseModal = () => {
      setShowModal(false);
    };

  return (
    <div className="contact-container">
      <h2> Contact Us</h2>
      <div className="contact-info">
        <h2> Partnership? </h2>
        <p>
          Want your products to be featured on our website?          
          Don’t hesitate to reach us through  <br />
           the following information below!
        </p>
        <p>
          <strong>Email:</strong> 
          <br />
          stjohnspharmassist@gmail.com
        </p>
        <p>
          <strong>Contact Numbers:</strong>
          <br />
          Landline: 8870-1021 <br />
          Mobile: 0998-015-1021
        </p>
      </div>


      <div className="contact-form">
        <h2> Questions? </h2>
        <p>
          Got a question? We got you covered! Fill up the information below and we’ll be sure  <br />
          to get back at you!
        </p>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </td>
              </tr>

              <tr>
                <td>Email:</td>
                <td>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
                </td>
              </tr>

              <tr>
                <td>Contact Number:</td>
                <td>
                  <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
                </td>
              </tr>

              <tr>
                <td>Message:</td>
                <td>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      {/* )} */}
      </div>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Thanks for your question!</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          {/* <p>{submissionMessage}</p> */}
          <p> Keep an eye on submitted email soon <br />
            for a feedback from us!
          </p>



        </Modal.Body>
      
        <Modal.Footer>
          <button onClick={handleCloseModal} className="modal-button">Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;