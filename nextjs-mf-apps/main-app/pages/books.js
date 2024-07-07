import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Books = dynamic(() => import('shop_app/books'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

function Page({ books }) {
  return (
    <main className='flex flex-col bg-white'>
      <Navbar />
      <Books books={books} />
      <Footer />
    </main>
  );
}

Page.getInitialProps = async (ctx) => {
  const books = await fetch(
    'https://www.googleapis.com/books/v1/volumes?q=crime'
  ).then((res) => res.json());

  return {
    books: books.items ?? [],
  };
};

export default Page;
