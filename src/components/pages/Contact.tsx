import React from "react";

export default function Contact() {
  return (
    <div className="py-12 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10">
        Have questions or suggestions? We’d love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={4}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-700">Get in Touch</h2>
          <p className="text-gray-600">
            📍 KIIT Square, Patia, Bhubaneswar, Odisha - 751024
          </p>
          <p className="text-gray-600">📞 +91 9876543210</p>
          <p className="text-gray-600">📧 support@bhubaneswarguide.com</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.182944733915!2d85.81526231500001!3d20.35482698636843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a74e04e1e16d%3A0xa847ad3c51cf2d3a!2sKIIT%20Square%2C%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1675859052971"
            width="100%"
            height="250"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border"
          ></iframe>
        </div>
      </div>
    </div>
  );
}


