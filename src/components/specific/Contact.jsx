import React from 'react'

import ContactForm from '../shared/ContactForm';

const Contact = () => {
  return (
    <div>
        <Banner/>
        <ContactForm />
    </div>
  )
}
// Banner.js

const Banner = () => {
  return (
    <div className="h-24 w-full border-2 flex items-center justify-center bg-emerald-500 text-white">
      <p className="text-2xl">Welcome to Our College Contact Page!</p>
    </div>
  );
};




export default Contact