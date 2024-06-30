import Products from '@/components/Products';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('main_app/Navbar'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Footer = dynamic(() => import('main_app/Footer'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
}
