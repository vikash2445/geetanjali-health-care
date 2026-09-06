'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { 
  ArrowRight, CheckCircle, Phone, 
  MessageCircle, Calendar, Clock, Users, 
  Shield, Home, Award, Truck, Star,
  ChevronRight, Heart, Activity, Zap,
  Headphones, Mail, MapPin, Download,
  FileText, Settings, HeartPulse,
  Stethoscope, Ambulance, Building,
  Bed, Microscope, Pill,
  User, UserPlus, Baby, HeartHandshake,
  Syringe, Clipboard, Hospital, UserCheck, Clock8,
} from 'lucide-react';

export default function HomecarePage() {
  const { cartCount } = useCart();

  const services = [
    {
      icon: <User className="w-5 h-5" />,
      title: 'Nursing Care',
      description: 'Skilled nursing care by experienced and trained nurses at home.',
      image: '/images/services/homecare/nursing-care.jpg',
      bg: 'bg-blue-50'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Elderly Care',
      description: 'Compassionate care for seniors to ensure comfort and well-being.',
      image: '/images/services/homecare/elderly-care.jpg',
      bg: 'bg-rose-50'
    },
    {
      icon: <UserPlus className="w-5 h-5" />,
      title: 'Patient Attendant',
      description: 'Trained attendants for patient support with daily activities and hygiene.',
      image: '/images/services/homecare/patient-attendant.jpg',
      bg: 'bg-purple-50'
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: 'Physiotherapy',
      description: 'At-home physiotherapy for pain relief, mobility & faster recovery.',
      image: '/images/services/homecare/physiotherapy.jpg',
      bg: 'bg-green-50'
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: 'Doctor Visit',
      description: 'Consult experienced doctors at home at your convenience.',
      image: '/images/services/homecare/doctor-visit.jpg',
      bg: 'bg-indigo-50'
    },
    {
      icon: <Hospital className="w-5 h-5" />,
      title: 'Post Discharge Care',
      description: 'Complete care and monitoring after hospital discharge for faster recovery.',
      image: '/images/services/homecare/post-discharge.jpg',
      bg: 'bg-cyan-50'
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: 'Palliative Care',
      description: 'Pain management and compassionate care for chronic illness patients.',
      image: '/images/services/homecare/palliative-care.jpg',
      bg: 'bg-amber-50'
    },
    {
      icon: <Syringe className="w-5 h-5" />,
      title: 'Lab Sample Collection',
      description: 'Hassle-free blood, urine and other sample collection at home.',
      image: '/images/services/homecare/lab-collection.jpg',
      bg: 'bg-teal-50'
    },
    {
      icon: <Clipboard className="w-5 h-5" />,
      title: 'Medication Management',
      description: 'Timely medicine management and reminders for better health compliance.',
      image: '/images/services/homecare/medication-management.jpg',
      bg: 'bg-orange-50'
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: 'Equipment Support',
      description: 'Medical equipment on rent or purchase with full installation support.',
      image: '/images/services/homecare/equipment-support.jpg',
      bg: 'bg-slate-50'
    }
  ];

  const equipment = [
    { 
      name: 'Oxygen Concentrator', 
      type: 'Rent / Buy',
      image: '/images/services/homecare/equipment-1.jpg'
    },
    { 
      name: 'Hospital Bed', 
      type: 'Rent / Buy',
      image: '/images/services/homecare/equipment-2.jpg'
    },
    { 
      name: 'Wheelchair', 
      type: 'Rent / Buy',
      image: '/images/services/homecare/equipment-3.jpg'
    },
    { 
      name: 'Patient Monitor', 
      type: 'Rent / Buy',
      image: '/images/services/homecare/equipment-4.jpg'
    },
    { 
      name: 'Suction Machine', 
      type: 'Rent / Buy',
      image: '/images/services/homecare/equipment-5.jpg'
    },
    { 
      name: 'Nebulizer', 
      type: 'Rent / Buy',
      image: '/images/services/homecare/equipment-6.jpg'
    }
  ];

  const benefits = [
    { icon: <User className="w-4 h-4" />, label: 'Personalized Care' },
    { icon: <Award className="w-4 h-4" />, label: 'Cost Effective' },
    { icon: <Zap className="w-4 h-4" />, label: 'Faster Recovery' },
    { icon: <Shield className="w-4 h-4" />, label: 'Reduced Infection Risk' },
    { icon: <Users className="w-4 h-4" />, label: 'Family Involvement' },
    { icon: <Headphones className="w-4 h-4" />, label: '24x7 Support' }
  ];

  const whyChoose = [
    'Qualified & Verified Caregivers',
    'Customized Care Plans',
    'Hygienic & Safe Practices',
    'Trusted by 5000+ Families',
    '24x7 Helpline & Emergency Support'
  ];

  const howItWorks = [
    { step: 'Contact Us', desc: 'Call or WhatsApp us with your requirement.' },
    { step: 'Assessment', desc: 'Our team will assess your needs.' },
    { step: 'Care Plan', desc: 'We create a personalized care plan for you.' },
    { step: 'Start Service', desc: 'Caregiver visits your home as per schedule.' },
    { step: 'Ongoing Support', desc: 'Continuous monitoring and support.' }
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
  ];

  const ourServices = [
    { label: 'Homecare Services', href: '/services/homecare' },
    { label: 'Nursing Care', href: '/services/nursing-care' },
    { label: 'Elderly Care', href: '/services/elderly-care' },
    { label: 'Physiotherapy', href: '/services/physiotherapy' },
    { label: 'Doctor Visit', href: '/services/doctor-visit' }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #f8fafc;
          color: #0d1b2a;
        }

        .homecare-page {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px 60px;
        }

        /* ===== BREADCRUMB ===== */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 24px 0 16px;
          font-size: 0.8rem;
          color: #6b7280;
        }
        .breadcrumb a {
          color: #0a6b4a;
          text-decoration: none;
        }
        .breadcrumb a:hover {
          text-decoration: underline;
        }
        .breadcrumb .separator {
          color: #d1d5db;
        }
        .breadcrumb .current {
          color: #0d1b2a;
          font-weight: 600;
        }

        /* ===== HERO ===== */
        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding: 32px 0 48px;
          align-items: center;
          background: #ffffff;
          border-radius: 24px;
          padding: 48px 56px;
          margin-bottom: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          position: relative;
          overflow: hidden;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          top: -40%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(10, 107, 74, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          color: #0d1b2a;
          line-height: 1.08;
          margin-bottom: 4px;
        }
        .hero-content h1 span {
          color: #0a6b4a;
        }
        .hero-content .subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0d1b2a;
          margin-bottom: 8px;
        }
        .hero-content .description {
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 20px;
          max-width: 520px;
        }
        .hero-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 24px;
          margin-bottom: 24px;
        }
        .hero-features .feature {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #0d1b2a;
        }
        .hero-features .feature .icon {
          color: #0a6b4a;
        }
        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0a6b4a;
          color: #fff;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: #085a3d;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(10, 107, 74, 0.25);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #0a6b4a;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          border: 2px solid #0a6b4a;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: #0a6b4a;
          color: #fff;
        }
        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .hero-image-wrapper .main-image {
          border-radius: 16px;
          width: 100%;
          max-width: 480px;
          height: auto;
          object-fit: cover;
        }
        .hero-image-wrapper .floating-badge {
          position: absolute;
          bottom: 20px;
          left: -10px;
          background: #ffffff;
          border-radius: 12px;
          padding: 12px 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #e8edf2;
        }
        .hero-image-wrapper .floating-badge .icon {
          width: 36px;
          height: 36px;
          background: #e8f5ee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a6b4a;
        }

        /* ===== SERVICES ===== */
        .services-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .services-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 24px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .service-card {
          background: #f8fafc;
          border: 1px solid #e8edf2;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
          border-color: #0a6b4a;
        }
        .service-card .card-image {
          width: 100%;
          height: 160px;
          overflow: hidden;
          position: relative;
        }
        .service-card .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .service-card:hover .card-image img {
          transform: scale(1.05);
        }
        .service-card .card-body {
          padding: 20px;
        }
        .service-card .card-body .icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          color: #0a6b4a;
        }
        .service-card .card-body h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 4px;
        }
        .service-card .card-body p {
          font-size: 0.8rem;
          color: #4a5568;
          line-height: 1.5;
          margin-bottom: 12px;
        }
        .service-card .card-body .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #0a6b4a;
          font-weight: 600;
          font-size: 0.8rem;
          text-decoration: none;
        }
        .service-card .card-body .learn-more:hover {
          gap: 8px;
        }

        /* ===== BENEFITS ===== */
        .benefits-section {
          background: #e8f5ee;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
        }
        .benefits-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          text-align: center;
          margin-bottom: 24px;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 700px;
          margin: 0 auto;
        }
        .benefit-item {
          background: #ffffff;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #0d1b2a;
          border: 1px solid #d1e8dc;
          transition: all 0.3s ease;
        }
        .benefit-item:hover {
          border-color: #0a6b4a;
          transform: translateY(-2px);
        }
        .benefit-item .icon {
          color: #0a6b4a;
          flex-shrink: 0;
        }

        /* ===== WHY CHOOSE ===== */
        .why-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .why-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          text-align: center;
          margin-bottom: 24px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 800px;
          margin: 0 auto;
        }
        .why-item {
          background: #f8fafc;
          border: 1px solid #e8edf2;
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #0d1b2a;
          transition: all 0.3s ease;
        }
        .why-item:hover {
          border-color: #0a6b4a;
          background: #e8f5ee;
        }
        .why-item .check {
          color: #0a6b4a;
          flex-shrink: 0;
        }

        /* ===== HOW IT WORKS ===== */
        .how-section {
          background: #f8fafc;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
        }
        .how-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          text-align: center;
          margin-bottom: 24px;
        }
        .how-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .how-step {
          background: #ffffff;
          border: 1px solid #e8edf2;
          border-radius: 12px;
          padding: 20px 16px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .how-step:hover {
          border-color: #0a6b4a;
          transform: translateY(-2px);
        }
        .how-step .step-num {
          width: 40px;
          height: 40px;
          background: #0a6b4a;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          margin: 0 auto 12px;
        }
        .how-step h4 {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 4px;
        }
        .how-step p {
          font-size: 0.72rem;
          color: #6b7280;
          line-height: 1.4;
        }

        /* ===== EQUIPMENT ===== */
        .equipment-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .equipment-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          text-align: center;
          margin-bottom: 24px;
        }
        .equipment-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 800px;
          margin: 0 auto;
        }
        .equipment-item {
          background: #f8fafc;
          border: 1px solid #e8edf2;
          border-radius: 12px;
          padding: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .equipment-item:hover {
          border-color: #0a6b4a;
          transform: translateY(-2px);
        }
        .equipment-item .eq-image {
          width: 100%;
          height: 120px;
          overflow: hidden;
          border-radius: 8px;
        }
        .equipment-item .eq-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .equipment-item .eq-info {
          padding: 12px 4px 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .equipment-item .eq-info .name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #0d1b2a;
        }
        .equipment-item .eq-info .type {
          font-size: 0.7rem;
          font-weight: 600;
          color: #0a6b4a;
          background: #e8f5ee;
          padding: 4px 12px;
          border-radius: 50px;
        }

        /* ===== CTA ===== */
        .cta-section {
          background: #0a6b4a;
          border-radius: 24px;
          padding: 48px 56px;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: center;
          margin: 32px 0;
        }
        .cta-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .cta-section p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 1rem;
        }
        .cta-section .contact-info {
          display: flex;
          gap: 24px;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        .cta-section .contact-info span {
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cta-section .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cta-section .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #0a6b4a;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          text-align: center;
          justify-content: center;
        }
        .cta-section .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        .cta-section .btn-outline-white {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #fff;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          text-align: center;
          justify-content: center;
        }
        .cta-section .btn-outline-white:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #fff;
        }

        /* ===== FOOTER ===== */
        .footer {
          padding: 40px 0 24px;
          border-top: 1px solid #e8edf2;
          margin-top: 32px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 32px;
        }
        .footer-brand h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #0d1b2a;
        }
        .footer-brand h3 span {
          color: #0a6b4a;
        }
        .footer-brand p {
          font-size: 0.82rem;
          color: #6b7280;
          line-height: 1.7;
          max-width: 280px;
        }
        .footer-col h4 {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .footer-col ul {
          list-style: none;
        }
        .footer-col ul li {
          margin-bottom: 10px;
        }
        .footer-col ul li a {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.82rem;
          transition: color 0.2s;
        }
        .footer-col ul li a:hover {
          color: #0a6b4a;
        }
        .footer-col .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #6b7280;
          margin-bottom: 10px;
        }
        .footer-col .contact-item .icon {
          color: #0a6b4a;
          flex-shrink: 0;
        }
        .footer-social {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }
        .footer-social a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d1b2a;
          transition: all 0.3s ease;
        }
        .footer-social a:hover {
          background: #0a6b4a;
          color: #fff;
        }
        .footer-bottom {
          border-top: 1px solid #e8edf2;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.75rem;
          color: #6b7280;
        }
        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }
        .footer-bottom-links a {
          color: #6b7280;
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .homecare-page { padding: 0 20px 40px; }
          .hero-section { grid-template-columns: 1fr; text-align: center; padding: 32px 24px; }
          .hero-content .description { margin: 0 auto 20px; }
          .hero-features { justify-content: center; }
          .hero-buttons { justify-content: center; }
          .services-grid { grid-template-columns: 1fr 1fr; }
          .benefits-grid { grid-template-columns: 1fr 1fr; }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .how-grid { grid-template-columns: 1fr 1fr; }
          .equipment-grid { grid-template-columns: 1fr 1fr; }
          .cta-section { grid-template-columns: 1fr; text-align: center; }
          .cta-section .contact-info { justify-content: center; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .homecare-page { padding: 0 16px 32px; }
          .hero-content h1 { font-size: 2rem; }
          .hero-section { padding: 24px 16px; }
          .hero-features { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
          .how-grid { grid-template-columns: 1fr; }
          .equipment-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .cta-section { padding: 32px 20px; }
          .cta-section h2 { font-size: 1.5rem; }
          .cta-section .cta-buttons { align-items: center; }
        }
      `}</style>

      <Navbar cartCount={cartCount} />

      <div className="homecare-page">
        {/* ===== BREADCRUMB ===== */}
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="separator">›</span>
          <Link href="/services">Services</Link>
          <span className="separator">›</span>
          <span className="current">Homecare Services</span>
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              HOMECARE <span>SERVICES</span>
            </h1>
            <p className="subtitle">Care at Home. Comfort at Heart.</p>
            <p className="description">
              Professional healthcare services at your doorstep. We provide compassionate care, 
              advanced medical equipment and expert support for you and your loved ones at home.
            </p>
            <div className="hero-features">
              <div className="feature"><Home className="w-4 h-4 icon" /> Comfort of Home</div>
              <div className="feature"><Users className="w-4 h-4 icon" /> Trained Professionals</div>
              <div className="feature"><Shield className="w-4 h-4 icon" /> Safe &amp; Reliable</div>
              <div className="feature"><Headphones className="w-4 h-4 icon" /> 24x7 Support</div>
            </div>
            <div className="hero-buttons">
              <Link href="/contact" className="btn-primary"><Phone className="w-4 h-4" /> Book Service</Link>
              <Link href="#services" className="btn-secondary">Explore Services <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="/images/services/homecare/hero-homecare.jpg"
              alt="Homecare Services"
              className="main-image"
            />
            <div className="floating-badge">
              <div className="icon"><Heart className="w-4 h-4" /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#0d1b2a' }}>Care at Home</div>
                <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>Comfort at Heart</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="services-section" id="services">
          <h2>Our Homecare Services</h2>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <div className="card-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="card-body">
                  <div className={`icon-wrap ${service.bg}`}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href="#" className="learn-more">Learn More <ArrowRight className="w-3 h-3" /></Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== BENEFITS ===== */}
        <section className="benefits-section">
          <h2>Benefits of Homecare</h2>
          <div className="benefits-grid">
            {benefits.map((item, i) => (
              <div key={i} className="benefit-item">
                <span className="icon">{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY CHOOSE ===== */}
        <section className="why-section">
          <h2>Why Choose Geetanjali Health Care?</h2>
          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <div key={i} className="why-item">
                <CheckCircle className="w-4 h-4 check" /> {item}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/about" className="btn-primary" style={{ display: 'inline-flex' }}>
              Know More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="how-section">
          <h2>How It Works</h2>
          <div className="how-grid">
            {howItWorks.map((item, i) => (
              <div key={i} className="how-step">
                <div className="step-num">{i + 1}</div>
                <h4>{item.step}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== EQUIPMENT ===== */}
        <section className="equipment-section">
          <h2>Equipment We Provide</h2>
          <div className="equipment-grid">
            {equipment.map((item, i) => (
              <div key={i} className="equipment-item">
                <div className="eq-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="eq-info">
                  <span className="name">{item.name}</span>
                  <span className="type">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta-section">
          <div>
            <h2>Need Homecare Service?</h2>
            <p>We are here to help you and your loved ones.</p>
            <div className="contact-info">
              <span><Phone className="w-4 h-4" /> +91 98765 43210</span>
              <span><MessageCircle className="w-4 h-4" /> WhatsApp Us</span>
            </div>
          </div>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-white"><Calendar className="w-4 h-4" /> Book Home Visit</Link>
            <Link href="tel:+919876543210" className="btn-outline-white"><Phone className="w-4 h-4" /> Call Now</Link>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Geetanjali <span>Health Care</span></h3>
              <p>Providing quality healthcare services and medical equipment with compassion and trust.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                {ourServices.map((link) => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <div className="contact-item"><Phone className="w-4 h-4 icon" /> +91 98765 43210</div>
              <div className="contact-item"><Mail className="w-4 h-4 icon" /> info@geetanjalihalthcare.com</div>
              <div className="contact-item"><MapPin className="w-4 h-4 icon" /> Chomu, Jaipur, Rajasthan</div>
              <div className="contact-item"><Clock className="w-4 h-4 icon" /> 24x7 Support Available</div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Geetanjali Health Care. All Rights Reserved.</span>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}