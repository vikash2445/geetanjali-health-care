// app/services/page.tsx (Example)
'use client';

import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function ServicesPage() {
  const { cartCount } = useCart();

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-4">Complete healthcare solutions at your home.</p>
        {/* Add your services content here */}
      </div>
    </>
  );
}