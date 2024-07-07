import React from 'react';

function Page({ books }) {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Books list:
        </h2>
        <div className='mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {books.map((book) => (
            <div className='group relative' key={book.id}>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <img
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  alt={book.title}
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
                      {book?.volumeInfo?.title}
                    </a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    {book?.volumeInfo?.publisher}
                  </p>
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  Pages: {book?.volumeInfo?.pageCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
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
