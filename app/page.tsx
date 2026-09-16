'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import {
  Phone, Mail, MapPin, Clock, Home, Heart, Moon, Wind,
  Droplet, Activity, HeartPulse, ArrowRight, Star, ShieldCheck,
  Stethoscope, Truck, BadgeCheck, Headset, Calendar,
  CheckCircle2, Quote, ChevronRight, Ambulance, Users,
  Award, Sparkles
} from 'lucide-react';

export default function HomePage() {
  const { cartCount } = useCart();

  const services = [
    {
      id: 1,
      title: 'Sleep Care & Sleep Study',
      description: 'Advanced home sleep study & sleep apnea diagnosis with expert consultation.',
      icon: <Moon className="w-7 h-7" />,
      href: '/services/sleep-care',
      accent: 'bg-indigo-50 text-indigo-600',
    },
    {
      id: 2,
      title: 'CPAP / BiPAP Therapy',
      description: 'Latest CPAP & BiPAP machines with mask fitting and ongoing therapy support.',
      icon: <Wind className="w-7 h-7" />,
      href: '/services/sleep-care',
      accent: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 3,
      title: 'Oxygen Therapy',
      description: 'Oxygen concentrators & cylinders for home and hospital use, delivered fast.',
      icon: <Droplet className="w-7 h-7" />,
      href: '/services/oxygen-therapy',
      accent: 'bg-sky-50 text-sky-600',
    },
    {
      id: 4,
      title: 'Patient Monitoring',
      description: 'Advanced patient monitors and health tracking devices with installation support.',
      icon: <Activity className="w-7 h-7" />,
      href: '/services/patient-monitoring',
      accent: 'bg-purple-50 text-purple-600',
    },
    {
      id: 5,
      title: 'Ventilator / ICU at Home',
      description: 'Complete ICU setup at home — ventilators, trained staff & 24x7 monitoring.',
      icon: <HeartPulse className="w-7 h-7" />,
      href: '/services/patient-monitoring',
      accent: 'bg-rose-50 text-rose-600',
    },
    {
      id: 6,
      title: 'Homecare Services',
      description: 'Nursing care, doctor visits, physiotherapy and elder care at your doorstep.',
      icon: <Heart className="w-7 h-7" />,
      href: '/services/homecare',
      accent: 'bg-amber-50 text-amber-600',
    },
  ];

  const whyUs = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Certified Equipment', desc: 'Genuine, medically certified devices from top brands.' },
    { icon: <Headset className="w-6 h-6" />, title: '24x7 Expert Support', desc: 'Round-the-clock technical and clinical assistance.' },
    { icon: <Truck className="w-6 h-6" />, title: 'Same-Day Delivery', desc: 'Fast delivery and professional installation at home.' },
    { icon: <Stethoscope className="w-6 h-6" />, title: 'Doctor Supervised', desc: 'Treatment plans reviewed by qualified physicians.' },
    { icon: <BadgeCheck className="w-6 h-6" />, title: 'Affordable Rental Plans', desc: 'Flexible monthly rental and purchase options.' },
    { icon: <Users className="w-6 h-6" />, title: 'Trained Professionals', desc: 'Certified nurses and technicians for home care.' },
  ];

  const steps = [
    { step: '01', title: 'Book Consultation', desc: 'Call us or book online — our experts understand your needs.' },
    { step: '02', title: 'Get Assessment', desc: 'Doctor evaluation and sleep study at your home if needed.' },
    { step: '03', title: 'Equipment Delivered', desc: 'Device delivered, installed and set up by our technicians.' },
    { step: '04', title: 'Ongoing Care', desc: '24x7 support, follow-ups and therapy monitoring.' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CPAP Patient, Delhi',
      quote: 'The team delivered my CPAP machine the same day and guided me through everything. My sleep quality has improved dramatically.',
      rating: 5,
    },
    {
      name: 'Sunita Sharma',
      role: 'Home ICU Care',
      quote: 'They set up a complete ICU at home for my father. The nurses were caring and the support team was available 24x7. Forever grateful.',
      rating: 5,
    },
    {
      name: 'Amit Verma',
      role: 'Oxygen Therapy Patient',
      quote: 'Very professional service. Oxygen concentrator arrived within hours and the rental plan was very affordable.',
      rating: 5,
    },
  ];

  const stats = [
    { value: '5000+', label: 'Patients Served' },
    { value: '24x7', label: 'Support Available' },
    { value: '50+', label: 'Healthcare Solutions' },
    { value: '3+', label: 'Years of Experience' },
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

      <main className="min-h-screen bg-white">

        {/* ===== TOP INFO STRIP ===== */}
        <div className="bg-slate-900 text-slate-300 text-sm">
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                +91 96538 50035
              </span>
              <span className="hidden md:flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                info@geetanjalihealthcare.com
              </span>
              <span className="hidden lg:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Available 24x7
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Serving jaipur, all Rajasthan &amp; nearby areas
            </span>
          </div>
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/60">
          <div className="absolute top-20 -right-32 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-10 -left-32 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Left Content */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 text-emerald-700 font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  Respiratory &amp; Home Healthcare Specialists
                </span>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900 tracking-tight">
                  Quality Healthcare,{' '}
                  <span className="text-emerald-600">Delivered to Your Doorstep</span>
                </h1>

                <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
                  From sleep studies to ICU at home — trusted medical equipment,
                  certified professionals and compassionate care for your family, 24x7.
                </p>

                <div className="flex flex-wrap gap-4 mt-9">
                  <Link
                    href="/assessment"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
                  >
                    Book Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/products"
                    className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-600 transition"
                  >
                    Browse Equipment
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-9 text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" /> ISO Certified Equipment
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" /> 4.9 Patient Rating
                  </span>
                  <span className="flex items-center gap-2">
                    <Ambulance className="w-5 h-5 text-emerald-600" /> Same-Day Delivery
                  </span>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200/60 to-indigo-100/60 rounded-[2.5rem] rotate-2" />
                <Image
                  src="/images/hero-healthcare.jpg"
                  alt="Healthcare professional at home"
                  width={700}
                  height={700}
                  className="relative rounded-[2rem] shadow-2xl w-full h-auto object-cover"
                  priority
                />

                <div className="absolute -bottom-7 -left-4 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Emergency? Call us</p>
                    <p className="font-bold text-slate-900">+91 96538 50035</p>
                  </div>
                </div>

                <div className="absolute -top-5 -right-3 sm:-right-6 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Trusted by 500+ families</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section className="max-w-7xl mx-auto px-6 -mt-2 mb-12">
          <div className="bg-slate-900 text-white rounded-3xl shadow-2xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="relative">
                <h3 className="text-3xl lg:text-4xl font-bold text-emerald-400">{stat.value}</h3>
                <p className="text-slate-400 mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 tracking-tight">
              Complete <span className="text-emerald-600">Home Healthcare</span> Services
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
              Everything your family needs — from diagnosis to equipment to ongoing care — all at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative bg-white p-7 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-50 transition" />
                <div className={`relative w-14 h-14 rounded-2xl ${service.accent} flex items-center justify-center group-hover:scale-110 transition`}>
                  {service.icon}
                </div>
                <h3 className="relative text-lg font-bold text-slate-900 mt-5">{service.title}</h3>
                <p className="relative text-slate-500 text-sm mt-2 leading-relaxed">{service.description}</p>
                <span className="relative inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-sm mt-5 group-hover:gap-3 transition-all">
                  Explore Service <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="bg-slate-50 py-14 mt-4">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
                  Why Geetanjali
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
                  Care You Can <span className="text-emerald-600">Trust</span>, Support You Can Rely On
                </h2>
                <p className="text-slate-500 mt-4 leading-relaxed">
                  We combine medical-grade equipment with compassionate service, so your loved ones
                  receive hospital-quality care in the comfort of home.
                </p>
                <div className="mt-8">
                  <Link
                    href="/assessment"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition"
                  >
                    Talk to an Expert <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
                {whyUs.map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 hover:shadow-lg transition flex gap-4">
                    <div className="shrink-0 w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
              Getting Care at Home is <span className="text-emerald-600">Easy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <div key={i} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-emerald-300 to-emerald-100" />
                )}
                <div className="relative w-16 h-16 mx-auto bg-white border-2 border-emerald-200 rounded-2xl rotate-45 flex items-center justify-center shadow-sm">
                  <span className="-rotate-45 font-bold text-emerald-600 text-lg">{item.step}</span>
                </div>
                <h3 className="font-bold text-slate-900 mt-6">{item.title}</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="bg-slate-900 py-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold">
                Patient Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">
                Families Who <span className="text-emerald-400">Trust Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-7 hover:border-emerald-500/40 transition">
                  <Quote className="w-8 h-8 text-emerald-500/60" />
                  <p className="text-slate-300 mt-4 leading-relaxed text-sm">"{t.quote}"</p>
                  <div className="flex items-center gap-1 mt-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700/60">
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section className="max-w-7xl mx-auto px-6 py-14">
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-white/10 rounded-full blur-2xl" />

            <div className="relative">
              <div className="w-16 h-16 mx-auto bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Not Sure Which Equipment You Need?
              </h2>
              <p className="text-emerald-100 mt-4 max-w-2xl mx-auto text-lg">
                Book a free consultation — our healthcare experts will assess your needs and
                recommend the right solution for you or your loved ones.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-9">
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 transition shadow-lg"
                >
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="tel:+919653850035"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500/80 text-white rounded-xl font-semibold hover:bg-emerald-500 transition border border-emerald-300/40"
                >
                  <Phone className="w-4 h-4" /> +91 96538 50035
                </Link>
              </div>
              <p className="flex items-center justify-center gap-2 text-emerald-100/80 text-sm mt-6">
                <CheckCircle2 className="w-4 h-4" /> No consultation fee &nbsp;•&nbsp;
                <CheckCircle2 className="w-4 h-4" /> Response within 30 minutes
              </p>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

              <div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Geetanjali <span className="text-emerald-400">Health Care</span>
                  </h3>
                </div>
                <p className="text-sm mt-4 leading-relaxed max-w-xs">
                  Quality healthcare services delivered to your home with compassion,
                  professionalism and trust — 24 hours a day, 7 days a week.
                </p>
                <div className="flex items-center gap-2 mt-5 text-amber-400 text-sm">
                  <Award className="w-4 h-4" /> Trusted since 2025
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-5">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm hover:text-emerald-400 transition flex items-center gap-2 group">
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 transition" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-5">Our Services</h4>
                <ul className="space-y-3 text-sm">
                  {[
                    { label: 'Sleep Study & Sleep Care', href: '/services/sleep-care' },
                    { label: 'CPAP / BiPAP Therapy', href: '/services/sleep-care' },
                    { label: 'Oxygen Therapy', href: '/services/oxygen-therapy' },
                    { label: 'Patient Monitoring', href: '/services/patient-monitoring' },
                    { label: 'ICU Setup at Home', href: '/services/patient-monitoring' },
                    { label: 'Homecare & Nursing', href: '/services/homecare' },
                  ].map((s) => (
                    <li key={s.label}>
                      <Link href={s.href} className="hover:text-emerald-400 transition flex items-center gap-2 group">
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 transition" />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-5">Contact Us</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white font-medium">+91 96538 50035</p>
                      <p className="text-xs mt-0.5">Emergency &amp; booking line</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    info@geetanjalihealthcare.com
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    Open 24x7 — All days
                  </li>
                  <li className="flex items-start gap-3">
                    <Home className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    Jaipur &amp; all Rajasthan &amp; nearby areas
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <span>© {new Date().getFullYear()} Geetanjali Health Care. All Rights Reserved.</span>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-emerald-400 transition">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-emerald-400 transition">Terms &amp; Conditions</Link>
                <Link href="/refund" className="hover:text-emerald-400 transition">Refund Policy</Link>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}