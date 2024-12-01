"use client";
import { useState } from "react";
import { toast } from "react-toastify";
// Assuming you have react-hot-toast installed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/questions", {
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

      toast.success('Email sent successfully'); // Show success toast

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Show error toast
      toast.error("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-style-one" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required="required"
                data-error="Name is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="email"
                placeholder="Email Address*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required="required"
                data-error="Valid email is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Your message*"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required="required"
                data-error="Please, leave us a message."
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <button
              className="btn-twentyOne fw-500 tran3s d-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
