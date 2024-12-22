import React from 'react';
import Header from '@/components/HeaderModule/Header';
import Footer from "@/components/Footer/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen m-0">
      <Header />
      <h1>Contact Us</h1>
      <p>Get in touch with us through the following methods.</p>
      <Footer/>
    </div>
  );
};

export default Contact;
