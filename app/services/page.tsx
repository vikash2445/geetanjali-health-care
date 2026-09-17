'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { 
  ArrowRight, CheckCircle, Wind, Moon, Activity, 
  Heart, Stethoscope, Phone, MessageCircle,
  Calendar, Clock, Users, Shield, Home, Award,
  ChevronRight, Sparkles
} from 'lucide-react';

export default function ServicesPage() {
  const { cartCount } = useCart();

  const services = [
    {
      id: 1,
      title: 'Oxygen Therapy',
      description: 'Oxygen concentrators and cylinders for home and hospital use.',
      icon: <Wind className="w-6 h-6" />,
      href: '/services/oxygen-therapy',
      image: '/images/services/oxygen-concentrator-10ltr.png',
      accent: 'bg-emerald-50 text-emerald-600'
    },
    {
      id: 2,
      title: 'Sleep Care',
      description: 'CPAP, BiPAP, Sleep Study and complete sleep apnea management.',
      icon: <Moon className="w-6 h-6" />,
      href: '/services/sleep-care',
      image: '/images/services/sleep-care.jpg',
      accent: 'bg-indigo-50 text-indigo-600'
    },
    {
      id: 3,
      title: 'Patient Monitoring',
      description: 'Advanced patient monitors for accurate health tracking.',
      icon: <Activity className="w-6 h-6" />,
      href: '/services/patient-monitoring',
      image: '/images/services/patient-monitor.jpg',
      accent: 'bg-blue-50 text-blue-600'
    },
    {
      id: 4,
      title: 'Homecare Services',
      description: 'Nursing care, doctor visits and physiotherapy at home.',
      icon: <Heart className="w-6 h-6" />,
      href: '/services/homecare',
      image: '/images/services/homecare.jpg',
      accent: 'bg-rose-50 text-rose-600'
    },
    {
      id: 5,
      title: 'Medical Equipment',
      description: 'High quality medical equipment and accessories.',
      icon: <Stethoscope className="w-6 h-6" />,
      href: '/products',
      image: '/images/services/medical-equipment.jpg',
      accent: 'bg-teal-50 text-teal-600'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="min-h-screen bg-slate-50">

        {/* ===== PAGE HEADER ===== */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Our Services
              </span>
              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Complete <span className="text-emerald-600">Healthcare</span> Solutions
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
                Professional healthcare services delivered to your home with compassion and trust.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SERVICES GRID ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-44 sm:h-48 bg-slate-50 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${service.accent} flex items-center justify-center shadow-sm`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* ===== CONSULTATION CTA ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-white/10 rounded-full blur-2xl" />

            <div className="relative">
              <div className="w-14 h-14 mx-auto bg-white/15 rounded-2xl flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Need Help Choosing the Right Service?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-xl mx-auto">
                Book a free consultation — our healthcare experts will help you find the right solution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 transition shadow-lg text-sm"
                >
                  <Calendar className="w-4 h-4" /> Book Consultation
                </Link>
                <a
                  href="tel:+919553850035"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500/80 text-white rounded-xl font-semibold hover:bg-emerald-500 transition border border-emerald-300/40 text-sm"
                >
                  <Phone className="w-4 h-4" /> +91 95538 50035
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SIMPLE FOOTER ===== */}
        <footer className="bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-slate-900">
                  Geetanjali <span className="text-emerald-600">Health Care</span>
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-slate-500">
                {quickLinks.slice(0, 4).map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-emerald-600 transition">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
              <span>© {new Date().getFullYear()} Geetanjali Health Care. All Rights Reserved.</span>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-emerald-600 transition">Privacy</Link>
                <Link href="/terms" className="hover:text-emerald-600 transition">Terms</Link>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}