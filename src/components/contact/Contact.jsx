import React from "react";
import "./contact.css";
import { CiMail } from "react-icons/ci";
import { FaFacebookMessenger, FaLinkedin } from "react-icons/fa";
import { TbBrandWhatsapp } from "react-icons/tb";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value || value.trim() === "") {
          error = "Please enter your full name";
        }
        break;
      case "email":
        if (!value || value.trim() === "") {
          error = "Please enter your email address";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please include '@' in the email address";
        }
        break;
      case "message":
        if (!value || value.trim() === "") {
          error = "Please enter your message";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const nameValid = validateField("name", name);
    const emailValid = validateField("email", email);
    const messageValid = validateField("message", message);

    return nameValid && emailValid && messageValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_3j7vl7h",
        "template_29vcnxx",
        form.current,
        "Wgf1T4hd0N8KPj6eG"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Message sent successfully! I will get back to you soon.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          e.target.reset();
          setErrors({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again later.", {
            position: "top-right",
            autoClose: 5000,
          });
          setLoading(false);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <CiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>awiral1234@gmail.com</h5>
            <a
              href="mailto:awiral1234@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Mail
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Awiral Chand</h5>
            <a
              href="https://www.linkedin.com/in/awiral-chand"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Awiral Chand</h5>
            <a
              href="https://m.me/awiral.chand.9"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <TbBrandWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+61 422 559107</h5>
            <a
              href="https://api.whatsapp.com/send?phone=61422559107"
              target="_blank"
              rel="noreferrer"
            >
              Send a WhatsApp
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={errors.name || "Your Full Name"}
              className={errors.name ? "error" : ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={errors.email || "Your Email Address"}
              className={errors.email ? "error" : ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder={errors.message || "Your Message"}
              cols="30"
              rows="10"
              className={errors.message ? "error" : ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
            ></textarea>
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
      <ToastContainer theme="dark" />
    </section>
  );
};

export default Contact;
