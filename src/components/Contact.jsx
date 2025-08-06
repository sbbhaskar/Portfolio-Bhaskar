import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://your-backend-url.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.error) {
        alert(`❌ ${data.error}`);
      } else {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-br from-blue-900 via-purple-800 to-red-600 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-white to-green-300 animate-pulse">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="mb-10 space-y-4 text-lg">
          <p className="flex justify-center items-center gap-3">
            <FaPhone className="text-yellow-300" />
            <span>+91 8130639920</span>
          </p>
          <p className="flex justify-center items-center gap-3">
            <FaEnvelope className="text-yellow-300" />
            <a
              href="mailto:bhaskar.sb@outlook.com"
              className="underline hover:text-yellow-400 transition"
            >
              bhaskar.sb@outlook.com
            </a>
          </p>
          <p className="flex justify-center items-center gap-3">
            <FaLinkedin className="text-yellow-300" />
            <a
              href="https://www.linkedin.com/in/bhaskarbanerjee-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-400 transition"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray bg-opacity-10 p-6 rounded-lg shadow-lg max-w-xl mx-auto backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-blue-700  bg-opacity-20 text-white placeholder-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-blue-700 bg-opacity-20 text-white placeholder-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-md bg-blue-700 bg-opacity-20 text-white placeholder-white focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500"
              } text-black font-semibold transition`}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
