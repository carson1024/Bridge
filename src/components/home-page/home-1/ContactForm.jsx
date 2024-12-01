"use client";

import { useState } from "react";
import { toast } from 'react-toastify'; // Ensure you import the toast notification if you're using it

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    studyDestination: "",
    studyPlan: "",
    counselingMode: "",
    funding: "",
    studyLevel: "",
    additionalNotes: "",
  });
  
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when form is submitting

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      toast.success(data.message); // Show success toast

      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        studyDestination: "",
        studyPlan: "",
        counselingMode: "",
        funding: "",
        studyLevel: "",
        additionalNotes: "",
      });
    } catch (error) {
      toast.error("There was an error sending your message!"); // Show error toast
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fs-16 text-center mt-25">
        <span className="opacity-75"></span>{" "}
        <a href="#" className="tx-dark fw-500"></a>
      </div>
      <div className="messages" />
      <div className="row controls">
        <div className="col-6">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="First Name*"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-6">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Last Name*"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="email"
              placeholder="Email Address*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Mobile Number*"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Preferred Study Destination*"
              name="studyDestination"
              value={formData.studyDestination}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="When Do You Plan to Study?"
              name="studyPlan"
              value={formData.studyPlan}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Preferred Mode of Counseling"
              name="counselingMode"
              value={formData.counselingMode}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="How Would You Fund Your Education?"
              name="funding"
              value={formData.funding}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Preferred Study Level*"
              name="studyLevel"
              value={formData.studyLevel}
              onChange={handleChange}
              required
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <textarea
              placeholder="Additional Notes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button
            type="submit"
            className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Sending..." : "SEND MESSAGE"} {/* Change button text based on loading state */}
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      <div className="fs-16 text-center mt-25">
        <span className="opacity-75"></span>{" "}
        <a href="#" className="tx-dark fw-500"></a>
      </div>
    </form>
  );
};

export default ContactForm;
