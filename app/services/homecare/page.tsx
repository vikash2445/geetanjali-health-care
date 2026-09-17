'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { 
  ArrowRight, CheckCircle, Phone, 
  MessageCircle, Calendar, Clock, Users, 
  Shield, Home, Award, Heart,
  User, UserPlus, Activity, Stethoscope,
  Hospital, HeartHandshake, Syringe, Clipboard,
  Settings, Sparkles
} from 'lucide-react';

export default function HomecarePage() {
  const { cartCount } = useCart();

  const services = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'Nursing Care',
      description: 'Skilled nursing care by trained professionals at home.',
      image: '/images/services/homecare/nursing-care.jpg',
      accent: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Elderly Care',
      description: 'Compassionate care for seniors to ensure comfort.',
      image: '/images/services/homecare/elderly-care.jpg',
      accent: 'bg-rose-50 text-rose-600'
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: 'Patient Attendant',
      description: 'Trained attendants for daily activities and hygiene.',
      image: '/images/services/homecare/patient-attendant.jpg',
      accent: 'bg-purple-50 text-purple-600'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Physiotherapy',
      description: 'At-home physiotherapy for pain relief & recovery.',
      image: '/images/services/homecare/physiotherapy.jpg',
      accent: 'bg-green-50 text-green-600'
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Doctor Visit',
      description: 'Consult experienced doctors at your home.',
      image: '/images/services/homecare/doctor-visit.jpg',
      accent: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: <Hospital className="w-6 h-6" />,
      title: 'Post Discharge Care',
      description: 'Complete care and monitoring after hospital discharge.',
      image: '/images/services/homecare/post-discharge.jpg',
      accent: 'bg-cyan-50 text-cyan-600'
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Palliative Care',
      description: 'Pain management for chronic illness patients.',
      image: '/images/services/homecare/palliative-care.jpg',
      accent: 'bg-amber-50 text-amber-600'
    },
    {
      icon: <Syringe className="w-6 h-6" />,
      title: 'Lab Sample Collection',
      description: 'Hassle-free blood & urine sample collection at home.',
      image: '/images/services/homecare/lab-collection.jpg',
      accent: 'bg-teal-50 text-teal-600'
    }
  ];

  const benefits = [
    { icon: <User className="w-4 h-4" />, label: 'Personalized Care' },
    { icon: <Award className="w-4 h-4" />, label: 'Cost Effective' },
    { icon: <Activity className="w-4 h-4" />, label: 'Faster Recovery' },
    { icon: <Shield className="w-4 h-4" />, label: 'Safe & Hygienic' },
    { icon: <Users className="w-4 h-4" />, label: 'Family Involvement' },
    { icon: <Clock className="w-4 h-4" />, label: '24x7 Support' }
  ];

  const howItWorks = [
    { step: '01', title: 'Contact Us', desc: 'Call or WhatsApp with your requirement.' },
    { step: '02', title: 'Free Assessment', desc: 'Our team assesses your needs.' },
    { step: '03', title: 'Care Plan', desc: 'Personalized care plan created for you.' },
    { step: '04', title: 'Service Starts', desc: 'Caregiver visits as per schedule.' }
  ];

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="min-h-screen bg-slate-50">

        {/* ===== BREADCRUMB ===== */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
              <span className="text-slate-300">›</span>
              <Link href="/services" className="hover:text-emerald-600 transition">Services</Link>
              <span className="text-slate-300">›</span>
              <span className="text-slate-900 font-semibold">Homecare Services</span>
            </div>
          </div>
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Professional Homecare
                </span>

                <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                  Care at Home.{' '}
                  <span className="text-emerald-600">Comfort at Heart.</span>
                </h1>

                <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Professional healthcare services at your doorstep. Compassionate care and 
                  expert support for you and your loved ones.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-5">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Trained Professionals
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Safe &amp; Reliable
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> 24x7 Support
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 text-sm"
                  >
                    <Phone className="w-4 h-4" /> Book Service
                  </Link>
                  <a
                    href="https://wa.me/919553850035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition text-sm"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative order-1 lg:order-2">
                <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-200/60 to-blue-100/60 rounded-3xl rotate-2" />
                <Image
                  src="/images/services/home_care.png"
                  alt="Homecare Services"
                  width={600}
                  height={500}
                  className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                  priority
                />
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Trusted Care</p>
                    <p className="font-bold text-slate-900 text-xs sm:text-sm">5000+ Families</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              What We <span className="text-emerald-600">Offer</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
              Complete homecare solutions for your family's healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-40 bg-slate-50 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-3 left-3 w-10 h-10 rounded-xl ${service.accent} flex items-center justify-center shadow-md`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== BENEFITS SECTION ===== */}
        <section className="bg-white py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold">
                Benefits
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
                Why Choose <span className="text-emerald-600">Homecare?</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-3 sm:p-4 text-center border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition"
                >
                  <div className="w-10 h-10 mx-auto bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                    {item.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              How It <span className="text-emerald-600">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-200">
                  {item.step}
                </div>
                <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center text-white shadow-xl">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-white/10 rounded-full blur-2xl" />

            <div className="relative">
              <div className="w-14 h-14 mx-auto bg-white/15 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Need Homecare Service?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-xl mx-auto">
                We are here to help you and your loved ones. Call us for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
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
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-slate-900">
                  Geetanjali <span className="text-emerald-600">Health Care</span>
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm">
                <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
                <Link href="/about" className="hover:text-emerald-600 transition">About</Link>
                <Link href="/services" className="hover:text-emerald-600 transition">Services</Link>
                <Link href="/products" className="hover:text-emerald-600 transition">Products</Link>
                <Link href="/contact" className="hover:text-emerald-600 transition">Contact</Link>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
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