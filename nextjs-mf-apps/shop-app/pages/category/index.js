import React, { useState, useEffect } from 'react';

export default function page() {
  const [data, setData] = useState([]);
  async function getData() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='bg-white h-[100vh]'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Product categories:
        </h2>
        <div className='mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {data.map((cat) => (
            <h3
              key={cat}
              className='mt-4 text-gray-800 flex justify-center border-2 border-red-950 w-[100%]'
            >
              {cat}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}
