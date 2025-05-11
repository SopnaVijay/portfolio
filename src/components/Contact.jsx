import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Note: You'll need to set up an EmailJS account and replace these with your actual credentials
    emailjs
      .send(
        'service_portfolio',
        'template_contact',
        {
          from_name: form.name,
          to_name: "Sopna",
          from_email: form.email,
          to_email: "sopna10.tech@gmail.com",
          message: form.message,
        },
        'your_emailjs_public_key'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
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
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
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
