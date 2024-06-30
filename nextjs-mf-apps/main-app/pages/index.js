import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className='flex flex-col bg-white'>
      <Navbar />
      <div className='h-[75vh] py-4'>
        <h1 className='text-3xl font-bold font-mono h-[100%] flex justify-center items-center text-black'>
          Welcome to Main Application
        </h1>
      </div>
      <Footer />
    </main>
  );
}
