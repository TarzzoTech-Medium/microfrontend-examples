import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className='flex flex-col bg-white'>
      <Navbar />
      <div className='h-[75vh] py-4'>
        <h1 className='text-3xl font-bold flex justify-center'>
          Welcome to E-commerce Application
        </h1>
      </div>
      <Footer />
    </main>
  );
}
