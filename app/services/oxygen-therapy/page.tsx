'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { 
  ArrowRight, CheckCircle, Wind, Phone, 
  MessageCircle, Calendar, Package, Building,
  HeartPulse, Droplet, Sparkles, Leaf,
  Moon, ShoppingBag, ChevronRight,
  Shield, Clock, Users, Award
} from 'lucide-react';

export default function OxygenTherapyPage() {
  const { cartCount } = useCart();
  const [activeTab, setActiveTab] = useState<'rent' | 'buy'>('rent');

  // Oxygen Rental Plans
  const rentalPlans = [
    {
      id: 1,
      name: '5 LPM Oxygen Concentrator',
      description: 'Suitable for most home oxygen therapy patients',
      features: ['Home Delivery & Installation', '24x7 Technical Support', 'Free Demonstration'],
      daily: '₹300',
      weekly: '₹1,800',
      monthly: '₹4,500',
      image: '/images/services/5_ltr_oxygen_concentrator.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book 5 LPM Oxygen Concentrator on Rental.'
    },
    {
      id: 2,
      name: '10 LPM Oxygen Concentrator',
      description: 'High Flow Oxygen Support for severe conditions',
      features: ['Installation included', '24x7 Support', 'Heavy duty compressor'],
      daily: '₹500',
      weekly: '₹3,000',
      monthly: '₹7,500',
      image: '/images/services/oxygen-concentrator-10ltr.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book 10 LPM Oxygen Concentrator on Rental.'
    },
    {
      id: 3,
      name: 'CPAP Machine (Auto)',
      description: 'Automatic CPAP for Sleep Apnea treatment',
      features: ['Mask & accessories included', 'Free setup', '24x7 Support'],
      daily: '₹250',
      weekly: '₹1,500',
      monthly: '₹3,500',
      image: '/images/services/auto_cpap.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book Auto CPAP Machine on Rental.'
    },
    {
      id: 4,
      name: 'BiPAP Machine (ST Mode)',
      description: 'BiPAP ST for respiratory insufficiency',
      features: ['Mask & accessories included', '24x7 Support', 'Ideal for COPD'],
      daily: '₹400',
      weekly: '₹2,400',
      monthly: '₹6,000',
      image: '/images/services/auto_bipap.jpg',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book BiPAP ST Machine on Rental.'
    }
  ];

  // Buy Products
  const buyProducts = [
    {
      id: 1,
      name: '5 LPM Oxygen Concentrator',
      description: 'High purity oxygen (93% ± 3%)',
      features: ['Low noise operation', '1 Year Warranty', 'Low maintenance'],
      price: '₹48,000',
      emi: '₹2,199/month',
      image: '/images/services/5_ltr_oxygen_concentrator.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy 5 LPM Oxygen Concentrator.\n\nPrice: ₹48,000'
    },
    {
      id: 2,
      name: '10 LPM Oxygen Concentrator',
      description: 'Suitable for ICU & home use',
      features: ['Continuous oxygen support', '1 Year Warranty', 'High reliability'],
      price: '₹75,000',
      emi: '₹3,500/month',
      image: '/images/services/oxygen-concentrator-10ltr.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy 10 LPM Oxygen Concentrator.\n\nPrice: ₹75,000'
    },
    {
      id: 3,
      name: 'Portable Oxygen Concentrator',
      description: 'Lightweight & Portable',
      features: ['Travel Friendly', 'Rechargeable Battery', '1 Year Warranty'],
      price: '₹1,20,000',
      emi: '₹5,500/month',
      image: '/images/services/portable_oxygen_concentrator.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy Portable Oxygen Concentrator.\n\nPrice: ₹1,20,000'
    },
    {
      id: 4,
      name: 'CPAP Machine (Auto)',
      description: 'Smart Auto CPAP with humidifier',
      features: ['Auto pressure adjustment', '2 Year Warranty', 'App connectivity'],
      price: '₹45,000',
      emi: '₹2,050/month',
      image: '/images/services/auto_cpap.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy Auto CPAP Machine.\n\nPrice: ₹45,000'
    },
    {
      id: 5,
      name: 'BiPAP ST Machine',
      description: 'For COPD & Neuromuscular disorders',
      features: ['ST Mode support', '2 Year Warranty', 'Advanced monitoring'],
      price: '₹85,000',
      emi: '₹3,900/month',
      image: '/images/services/auto_bipap.jpg',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy BiPAP ST Machine.\n\nPrice: ₹85,000'
    },
    {
      id: 6,
      name: 'BiPAP AVAPS Machine',
      description: 'Advanced BiPAP for complex conditions',
      features: ['AVAPS technology', '2 Year Warranty', 'Hospital grade'],
      price: '₹1,25,000',
      emi: '₹5,700/month',
      image: '/images/services/auto_bipap.jpg',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy BiPAP AVAPS Machine.\n\nPrice: ₹1,25,000'
    }
  ];

  const openWhatsApp = (message: string) => {
    const phone = '919553850035';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="min-h-screen bg-slate-50">

        {/* ===== BREADCRUMB ===== */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <Link href="/" className="hover:text-emerald-600">Home</Link>
              <span className="text-slate-300">›</span>
              <Link href="/services" className="hover:text-emerald-600">Services</Link>
              <span className="text-slate-300">›</span>
              <span className="text-slate-900 font-semibold">Oxygen Therapy</span>
            </div>
          </div>
        </div>

        {/* ===== COMPACT HERO ===== */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold">
                <HeartPulse className="w-3.5 h-3.5" />
                Oxygen Therapy
              </span>
              <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Breathe Better. <span className="text-emerald-600">Live Better.</span>
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
                Rent or buy oxygen concentrators, CPAP & BiPAP machines with complete support.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-xs sm:text-sm text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-600" /> Certified Equipment
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600" /> 24x7 Support
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-600" /> 5000+ Customers
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SMALL RENT/BUY TOGGLE ===== */}
        <section className="sticky top-0 z-30 bg-white border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex justify-center">
              <div className="inline-flex bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('rent')}
                  className={`flex items-center gap-2 px-5 sm:px-8 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    activeTab === 'rent'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Package className="w-4 h-4" />
                  Rental
                </button>
                <button
                  onClick={() => setActiveTab('buy')}
                  className={`flex items-center gap-2 px-5 sm:px-8 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    activeTab === 'buy'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building className="w-4 h-4" />
                  Buy
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRODUCTS GRID ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {activeTab === 'rent' ? 'Rental Plans' : 'Buy Equipment'}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {activeTab === 'rent' 
                ? 'Flexible daily, weekly & monthly rental options with home delivery'
                : 'Own high-quality equipment with warranty & EMI options'
              }
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {(activeTab === 'rent' ? rentalPlans : buyProducts).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-48 bg-slate-50 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-contain p-6"
                  />
                  {/* Tag */}
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
                    activeTab === 'rent' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {activeTab === 'rent' ? 'RENTAL' : 'BUY'}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-3 space-y-1.5">
                    {item.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price Section */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    {activeTab === 'rent' ? (
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-center">
                          <p className="text-[10px] uppercase text-slate-400 font-semibold">Daily</p>
                          <p className="text-sm font-bold text-slate-900">{(item as any).daily}</p>
                        </div>
                        <div className="text-center border-x border-slate-100">
                          <p className="text-[10px] uppercase text-slate-400 font-semibold">Weekly</p>
                          <p className="text-sm font-bold text-slate-900">{(item as any).weekly}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] uppercase text-slate-400 font-semibold">Monthly</p>
                          <p className="text-sm font-bold text-emerald-600">{(item as any).monthly}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-bold text-emerald-600">{(item as any).price}</p>
                          <p className="text-[10px] text-slate-400">EMI: {(item as any).emi}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Button */}
                  <button
                    onClick={() => openWhatsApp(item.whatsappMessage)}
                    className="w-full mt-3 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white py-2.5 rounded-xl font-semibold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SIMPLE CTA ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center text-white shadow-xl">
            <div className="relative">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Need Help Choosing?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-emerald-100 max-w-xl mx-auto">
                Our experts will guide you to the right equipment for your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5">
                <a
                  href="tel:+919553850035"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 transition shadow-lg text-sm"
                >
                  <Phone className="w-4 h-4" /> +91 95538 50035
                </a>
                <a
                  href="https://wa.me/919553850035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500/80 text-white rounded-xl font-semibold hover:bg-emerald-500 transition border border-emerald-300/40 text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SIMPLE FOOTER ===== */}
        <footer className="bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <HeartPulse className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-slate-900">
                  Geetanjali <span className="text-emerald-600">Health Care</span>
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm">
                <Link href="/" className="hover:text-emerald-600">Home</Link>
                <Link href="/about" className="hover:text-emerald-600">About</Link>
                <Link href="/services" className="hover:text-emerald-600">Services</Link>
                <Link href="/products" className="hover:text-emerald-600">Products</Link>
                <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
              <span>© {new Date().getFullYear()} Geetanjali Health Care. All Rights Reserved.</span>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-emerald-600">Privacy</Link>
                <Link href="/terms" className="hover:text-emerald-600">Terms</Link>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}