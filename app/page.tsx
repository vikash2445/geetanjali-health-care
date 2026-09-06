'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { 
  Phone, Mail, MapPin, Clock, 
  CheckCircle, Shield, Home, Heart,
  Moon, Wind, Monitor, Bed, Droplet,
  ArrowRight, ChevronRight, Star,
  Calendar, MessageCircle, Users,
  Award, Truck, Headphones, Stethoscope,
  Activity, Sparkles, Leaf, HandHeart,
  Building2, UserCheck, Clock8, Headset, ThumbsUp,
  Brain, Thermometer, Pill,
  Microscope, HeartPulse, Ambulance,
  CircleCheck, Zap, BadgeCheck
} from 'lucide-react';

export default function HomePage() {
  const { cartCount } = useCart();

  const services = [
    {
      id: 1,
      title: 'Sleep Study',
      description: 'Advanced sleep study and sleep apnea diagnosis at home.',
      icon: <Moon className="w-6 h-6" />,
      href: '/services/sleep-study',
      bg: 'from-indigo-50 to-indigo-100/50'
    },
    {
      id: 2,
      title: 'CPAP / BiPAP',
      description: 'CPAP and BiPAP machines for effective sleep apnea treatment.',
      icon: <Wind className="w-6 h-6" />,
      href: '/services/cpap-bipap',
      bg: 'from-emerald-50 to-emerald-100/50'
    },
    {
      id: 3,
      title: 'Oxygen Therapy',
      description: 'Oxygen concentrators and cylinders for home and hospital use.',
      icon: <Droplet className="w-6 h-6" />,
      href: '/services/oxygen-therapy',
      bg: 'from-blue-50 to-blue-100/50'
    },
    {
      id: 4,
      title: 'Ventilator / ICU',
      description: 'ICU equipment rental and ventilator support at home.',
      icon: <HeartPulse className="w-6 h-6" />,
      href: '/services/icu',
      bg: 'from-rose-50 to-rose-100/50'
    },
    {
      id: 5,
      title: 'Patient Monitor',
      description: 'Advanced patient monitors for accurate health tracking.',
      icon: <Activity className="w-6 h-6" />,
      href: '/services/patient-monitoring',
      bg: 'from-purple-50 to-purple-100/50'
    },
    {
      id: 6,
      title: 'Homecare Services',
      description: 'Nursing care, doctor visits and physiotherapy at home.',
      icon: <Heart className="w-6 h-6" />,
      href: '/services/homecare',
      bg: 'from-amber-50 to-amber-100/50'
    }
  ];

  const features = [
    { icon: <Headset className="w-5 h-5" />, title: 'Expert Support' },
    { icon: <Clock className="w-5 h-5" />, title: '24x7 Available' },
    { icon: <Home className="w-5 h-5" />, title: 'Care at Home' },
    { icon: <BadgeCheck className="w-5 h-5" />, title: 'Trusted Quality' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Sleep Care', href: '/sleep-care' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        
        {/* ===== HERO SECTION ===== */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div>
                <span className="inline-flex px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm tracking-wide">
                  Respiratory & Home Healthcare Specialists
                </span>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
                  Advanced
                  <span className="text-emerald-600 block">
                    Home Healthcare
                  </span>
                  Solutions
                </h1>

                <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
                  Sleep Study, CPAP, BiPAP, Oxygen Concentrator,
                  Ventilator, ICU Equipment Rental and Complete
                  Homecare Services.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-slate-700 border border-slate-200">
                    Sleep Study
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-slate-700 border border-slate-200">
                    CPAP / BiPAP
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-slate-700 border border-slate-200">
                    Oxygen Therapy
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-slate-700 border border-slate-200">
                    ICU At Home
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <Link
                    href="/assessment"
                    className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 hover:shadow-emerald-300/50"
                  >
                    Book Consultation
                  </Link>

                  <Link
                    href="/products"
                    className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition"
                  >
                    View Products
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <Image
                  src="/images/hero-healthcare.jpg"
                  alt="Healthcare at home"
                  width={700}
                  height={700}
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-600 text-lg">24x7 Support</h3>
                      <p className="text-sm text-gray-500">Home Delivery &amp; Setup</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section className="max-w-7xl mx-auto px-6 -mt-4 mb-12">
          <div className="py-12 bg-slate-900 text-white rounded-3xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
              <div>
                <h3 className="text-4xl font-bold text-emerald-400">5000+</h3>
                <p className="text-slate-400 mt-1">Patients Served</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-emerald-400">24x7</h3>
                <p className="text-slate-400 mt-1">Support Available</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-emerald-400">50+</h3>
                <p className="text-slate-400 mt-1">Healthcare Solutions</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-emerald-400">100%</h3>
                <p className="text-slate-400 mt-1">Customer Focused</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES BAR ===== */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  {feature.icon}
                </div>
                <span className="font-medium text-slate-700">{feature.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold tracking-wide">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              Complete <span className="text-emerald-600">Healthcare</span> Solutions
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              From sleep study to ICU at home, we provide comprehensive healthcare solutions 
              with compassion and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-b ${service.bg} flex items-center justify-center text-emerald-700 group-hover:scale-110 transition`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">{service.title}</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-10 md:p-14 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Help Choosing the Right Equipment?
            </h2>
            <p className="text-emerald-100 mt-3 max-w-2xl mx-auto text-lg">
              Our experts will guide you to find the best healthcare solution for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/assessment"
                className="px-8 py-3.5 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-slate-50 transition shadow-lg"
              >
                Book Consultation
              </Link>
              <Link
                href="tel:+919653850035"
                className="px-8 py-3.5 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Call Now
              </Link>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-white border-t border-slate-200 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Geetanjali <span className="text-emerald-600">Health Care</span>
                </h3>
                <p className="text-slate-500 text-sm mt-3 max-w-xs">
                  Quality healthcare services delivered to your home with compassion and trust.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-slate-500 hover:text-emerald-600 text-sm transition">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Our Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/services/oxygen-therapy" className="text-slate-500 hover:text-emerald-600 text-sm transition">Oxygen Therapy</Link></li>
                  <li><Link href="/services/sleep-care" className="text-slate-500 hover:text-emerald-600 text-sm transition">Sleep Care</Link></li>
                  <li><Link href="/services/patient-monitoring" className="text-slate-500 hover:text-emerald-600 text-sm transition">Patient Monitoring</Link></li>
                  <li><Link href="/services/homecare" className="text-slate-500 hover:text-emerald-600 text-sm transition">Homecare Services</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600" /> +91 96538 50035
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-600" /> info@geetanjalihalthcare.com
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600" /> 24x7 Available
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
              <span>© {new Date().getFullYear()} Geetanjali Health Care. All Rights Reserved.</span>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-emerald-600 transition">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-emerald-600 transition">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}