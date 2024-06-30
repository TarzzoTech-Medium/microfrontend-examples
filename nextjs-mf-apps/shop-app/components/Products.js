import React, { useEffect, useState } from 'react';

export default function Products() {
  const [data, setData] = useState([]);
  async function getData() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Products list:
        </h2>
        <div className='mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {data.map((product) => (
            <div className='group relative' key={product.id}>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm text-gray-700'>
                    <a>
                      <span
                        aria-hidden='true'
                        className='absolute inset-0'
                      ></span>
                      {product.title}
                    </a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    <span className='font-medium'>⭐</span>{' '}
                    <span className='font-bold'>{product.rating.rate}</span> (
                    {product.rating.count})
                  </p>
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
