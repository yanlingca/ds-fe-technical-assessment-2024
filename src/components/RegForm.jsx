import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/regform.css'

function RegForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        project: ''
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert("Thank for for the submission.");
        {/* console.log('Form Submitted:', formData); */}
    };

    return (
      <Container fluid id="register" className="regform text-center">
        <div className="regform-title1 mt-5 mb-3">Register Now</div>
        <div className="regform-title2 ">Our sales team will be in touch with you shortly</div>
        <form className="m-5 w-50 mx-auto" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="my-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control custom-field"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            {/* Phone */}
            <div className="my-4">
                <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="form-control custom-field"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            {/* Email */}
            <div className="my-4">
                <input
                    type="email"
                    placeholder="Your Email Address"
                    className="form-control custom-field"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            {/* Project */}
            <div className="my-4">
                <select
                    className="form-control custom-field"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Choose Project</option>
                    <option value="Semi-Detached Homes">Semi-Detached Homes</option>
                    <option value="Waterfront Bungalow">Waterfront Bungalow</option>
                    <option value="2-storey Terrace Homes">2-storey Terrace Homes</option>
                </select>
            </div>

            <button type="submit" className="btn primary-btn mt-3 text-uppercase">
                Submit
            </button>
        </form>
    </Container>

    );
}
  
export default RegForm;