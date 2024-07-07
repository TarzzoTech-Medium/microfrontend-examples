import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductsCategory = dynamic(() => import('shop_app/category'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function index() {
  return (
    <main className='flex flex-col bg-white'>
      <Navbar />
      <ProductsCategory />
      <Footer />
    </main>
  );
}
