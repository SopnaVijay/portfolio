import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Initialize EmailJS
emailjs.init("Oo3_1ZGwVvNFIwxSx");

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "Email is invalid";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Using EmailJS to send emails
    emailjs
      .send(
        'service_rnz9jtj', // Your EmailJS service ID
        'template_yjnwkzp', // Your EmailJS template ID
        {
          from_name: form.name,
          to_name: "Sopna",
          from_email: form.email,
          to_email: "sopna10.tech@gmail.com",
          message: form.message,
        },
        'Oo3_1ZGwVvNFIwxSx' // Your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setSubmitStatus("success");

          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Clear success message after 5 seconds
          setTimeout(() => {
            setSubmitStatus(null);
          }, 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
          setSubmitStatus("error");

          // Clear error message after 5 seconds
          setTimeout(() => {
            setSubmitStatus(null);
          }, 5000);
        }
      );
  };

  return (
    <div
      className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium ${
                formErrors.name ? "border-red-500" : "border-transparent"
              }`}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium ${
                formErrors.email ? "border-red-500" : "border-transparent"
              }`}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium ${
                formErrors.message ? "border-red-500" : "border-transparent"
              }`}
            />
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
            )}
          </label>

          {submitStatus === "success" && (
            <div className="bg-green-900/50 text-green-300 p-3 rounded-lg">
              Thank you! Your message has been sent successfully. I will get back to you as soon as possible.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-900/50 text-red-300 p-3 rounded-lg">
              Something went wrong while sending your message. Please try again or contact me directly at sopna10.tech@gmail.com
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary transition-all duration-300 ${
              loading
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-[#915eff] hover:bg-[#7d4edb] text-white cursor-pointer"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <div className="h-full bg-black-100 p-8 rounded-2xl">
          <p className={styles.sectionSubText}>My contact information</p>
          <h3 className={styles.sectionHeadText}>Details.</h3>

          <div className="mt-12 flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="text-white font-medium mb-2">Email</span>
              <p className="text-secondary">sopna10.tech@gmail.com</p>
            </div>

            <div className="flex flex-col">
              <span className="text-white font-medium mb-2">Phone</span>
              <p className="text-secondary">+91-9489408720</p>
            </div>

            <div className="flex flex-col">
              <span className="text-white font-medium mb-2">Location</span>
              <p className="text-secondary">Chennai, India</p>
            </div>

            <div className="flex flex-col">
              <span className="text-white font-medium mb-2">GitHub</span>
              <a href="https://github.com/SopnaVijay" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">github.com/SopnaVijay</a>
            </div>

            <div className="flex flex-col">
              <span className="text-white font-medium mb-2">LinkedIn</span>
              <a href="https://www.linkedin.com/in/sopna-vijay-a26232250/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white">linkedin.com/in/sopna-vijay</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
