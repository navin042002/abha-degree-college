// ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <div className="py-2 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">
        Contact Us
      </h2>
      <p className="mb-4 font-light text-left my-10 text-gray-500 sm:text-xl">
        Fill out the form below to get in touch with us:
      </p>
      {/* Your form fields go here */}
      {/* Example: */}
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium">
            Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            className="my-1 h-36 outline-none w-full border rounded-md"
            placeholder="Enter your name"
          />
        </div>
        {/* Add other form fields (email, phone, message, etc.) */}
        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 my-10 w-full text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
