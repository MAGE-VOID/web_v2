import React from 'react';
import Header from '@/components/HeaderModule/Header';
import Footer from "@/components/Footer/Footer";

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen m-0">
      <Header />
      <h1>Our Products</h1>
      <p>Check out our range of products here.</p>
      <Footer/>
    </div>
  );
};

export default Products;
