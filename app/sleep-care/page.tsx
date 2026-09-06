'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { 
  ArrowRight, CheckCircle, Moon, Phone, 
  MessageCircle, Calendar, Clock, Users, 
  Shield, Home, Award, Truck, Star,
  ChevronRight, Heart, Brain, Activity,
  Zap, Sun, Cloud, Wind, Droplet,
  Sparkles, Leaf, HeartPulse, Bed,
  Microscope, Stethoscope, Pill, Thermometer,
  Headphones, Mail, MapPin, X,
  FileText, Clipboard, Monitor, UserCheck,
  AlertCircle, BarChart
} from 'lucide-react';

export default function SleepCarePage() {
  const { cartCount } = useCart();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Sleep Study (Home)',
      description: 'Home Sleep Test for diagnosis of Sleep Apnea and other sleep disorders.',
      icon: <Bed className="w-6 h-6 text-indigo-700" />,
      href: '/services/sleep-study',
      bg: 'bg-indigo-50',
      fullDescription: 'Our Home Sleep Test (HST) is a convenient way to diagnose sleep apnea from the comfort of your home. You\'ll receive a portable device that records your breathing, oxygen levels, and heart rate while you sleep. The data is then analyzed by our sleep specialists to provide an accurate diagnosis.',
      benefits: ['Convenient and comfortable', 'No need to stay overnight at a lab', 'Quick setup and easy to use', 'Accurate screening for Sleep Apnea'],
      process: ['Device setup at home', 'Overnight monitoring', 'Data upload and analysis', 'Report within 48 hours']
    },
    {
      id: 2,
      title: 'Polysomnography (PSG)',
      description: 'Advanced lab based sleep study for detailed sleep analysis.',
      icon: <Microscope className="w-6 h-6 text-blue-700" />,
      href: '/services/psg',
      bg: 'bg-blue-50',
      fullDescription: 'Polysomnography (PSG) is the gold standard for sleep disorder diagnosis. Conducted in our state-of-the-art sleep lab, it monitors brain waves, eye movements, muscle activity, heart rhythm, breathing patterns, and oxygen levels throughout the night. This comprehensive test helps identify conditions like sleep apnea, narcolepsy, and restless legs syndrome.',
      benefits: ['Comprehensive sleep analysis', 'Gold standard for diagnosis', 'Monitored by sleep technicians', 'Identifies complex sleep disorders'],
      process: ['Arrival at sleep lab', 'Sensor placement', 'Overnight monitoring', 'Detailed data analysis']
    },
    {
      id: 3,
      title: 'CPAP Therapy',
      description: 'CPAP machines for effective treatment of Sleep Apnea.',
      icon: <Moon className="w-6 h-6 text-teal-700" />,
      href: '/services/cpap-therapy',
      bg: 'bg-teal-50',
      fullDescription: 'CPAP (Continuous Positive Airway Pressure) therapy is the most common and effective treatment for obstructive sleep apnea. Our CPAP machines deliver a steady stream of air through a mask, keeping your airway open while you sleep. We offer a range of CPAP devices and masks to ensure comfort and compliance.',
      benefits: ['Reduces snoring', 'Improves sleep quality', 'Decreases daytime sleepiness', 'Lowers risk of related health issues'],
      process: ['Initial consultation', 'Device selection and fitting', 'Mask fitting and comfort adjustment', 'Ongoing support and follow-up']
    },
    {
      id: 4,
      title: 'BiPAP Therapy',
      description: 'BiPAP support for patients who need higher pressure support.',
      icon: <Wind className="w-6 h-6 text-purple-700" />,
      href: '/services/bipap-therapy',
      bg: 'bg-purple-50',
      fullDescription: 'BiPAP (Bilevel Positive Airway Pressure) therapy is designed for patients who require higher pressure support or have difficulty tolerating CPAP. It delivers two pressure levels: a higher pressure during inhalation and a lower pressure during exhalation, making breathing more comfortable.',
      benefits: ['Better comfort for high-pressure needs', 'Ideal for central sleep apnea', 'Improves therapy compliance', 'Supports patients with respiratory conditions'],
      process: ['Sleep study evaluation', 'Pressure prescription', 'Device setup and training', 'Regular therapy monitoring']
    },
    {
      id: 5,
      title: 'CPAP/BiPAP Titration',
      description: 'Titration study to find the right pressure for better therapy effectiveness.',
      icon: <Activity className="w-6 h-6 text-amber-700" />,
      href: '/services/titration',
      bg: 'bg-amber-50',
      fullDescription: 'Titration is a sleep study performed to determine the optimal pressure settings for CPAP or BiPAP therapy. During the study, pressure levels are adjusted to find the minimum pressure needed to keep your airway open. This ensures effective treatment with maximum comfort.',
      benefits: ['Optimal pressure settings', 'Improved therapy effectiveness', 'Reduced side effects', 'Better compliance and comfort'],
      process: ['Sleep study in lab', 'Pressure adjustments', 'Monitoring of response', 'Final pressure prescription']
    },
    {
      id: 6,
      title: 'Sleep Consultation',
      description: 'Consult our sleep experts for evaluation and right treatment plan.',
      icon: <Users className="w-6 h-6 text-rose-700" />,
      href: '/services/sleep-consultation',
      bg: 'bg-rose-50',
      fullDescription: 'Our sleep consultation service connects you with experienced sleep specialists. We evaluate your sleep patterns, medical history, and lifestyle to identify potential sleep disorders. Based on the assessment, we recommend the most appropriate diagnostic tests and treatment options.',
      benefits: ['Personalized evaluation', 'Expert medical advice', 'Comprehensive treatment plan', 'Ongoing support and guidance'],
      process: ['Initial consultation', 'Symptom assessment', 'Test recommendation', 'Follow-up and monitoring']
    }
  ];

  const benefits = [
    { icon: <Wind className="w-5 h-5" />, title: 'Better Breathing' },
    { icon: <Zap className="w-5 h-5" />, title: 'More Energy' },
    { icon: <Brain className="w-5 h-5" />, title: 'Better Focus' },
    { icon: <Heart className="w-5 h-5" />, title: 'Healthy Heart' },
    { icon: <Cloud className="w-5 h-5" />, title: 'Stress Relief' },
    { icon: <Sun className="w-5 h-5" />, title: 'Improved Mood' }
  ];

  const whoCanBenefit = [
    'Loud Snoring',
    'Daytime Sleepiness',
    'Sleep Apnea',
    'Insomnia',
    'Restless Sleep',
    'Post COVID Sleep Issues'
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Sleep Care', href: '/sleep-care' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const selected = selectedService !== null ? services.find(s => s.id === selectedService) : null;

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

        .sleep-page {
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
          color: #4f46e5;
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
          padding: 48px 56px;
          margin-bottom: 32px;
          background: #ffffff;
          border-radius: 24px;
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
          background: radial-gradient(circle, rgba(79, 70, 229, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          color: #0d1b2a;
          line-height: 1.08;
          margin-bottom: 8px;
        }
        .hero-content h1 span {
          color: #4f46e5;
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
          color: #4f46e5;
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
          background: #4f46e5;
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
          background: #4338ca;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(79, 70, 229, 0.25);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #4f46e5;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          border: 2px solid #4f46e5;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: #4f46e5;
          color: #fff;
        }
        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .hero-image-wrapper img {
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
          background: #eef2ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f46e5;
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
          padding: 24px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
          border-color: #4f46e5;
        }
        .service-card .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .service-card h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 6px;
        }
        .service-card p {
          font-size: 0.8rem;
          color: #4a5568;
          line-height: 1.5;
          margin-bottom: 12px;
        }
        .service-card .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #4f46e5;
          font-weight: 600;
          font-size: 0.8rem;
          text-decoration: none;
          cursor: pointer;
        }
        .service-card .learn-more:hover {
          gap: 8px;
        }

        /* ===== KNOW MORE OVERLAY / DETAIL ===== */
        .know-more-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        .know-more-modal {
          background: #ffffff;
          border-radius: 28px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px 48px;
          position: relative;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.3s ease;
        }
        .know-more-modal .close-btn {
          position: absolute;
          top: 20px;
          right: 24px;
          background: #f1f5f9;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          color: #1e293b;
        }
        .know-more-modal .close-btn:hover {
          background: #e2e8f0;
          transform: rotate(90deg);
        }
        .know-more-modal .modal-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .know-more-modal .modal-icon svg {
          width: 32px;
          height: 32px;
        }
        .know-more-modal h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 8px;
        }
        .know-more-modal .modal-sub {
          font-size: 0.9rem;
          color: #4a5568;
          margin-bottom: 16px;
        }
        .know-more-modal .modal-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 20px;
        }
        .know-more-modal .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin: 20px 0;
        }
        .know-more-modal .info-grid .col h4 {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #4f46e5;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .know-more-modal .info-grid .col ul {
          list-style: none;
          padding: 0;
        }
        .know-more-modal .info-grid .col ul li {
          padding: 6px 0;
          font-size: 0.85rem;
          color: #334155;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid #f1f5f9;
        }
        .know-more-modal .info-grid .col ul li:last-child {
          border-bottom: none;
        }
        .know-more-modal .info-grid .col ul li svg {
          color: #4f46e5;
          flex-shrink: 0;
        }
        .know-more-modal .modal-cta {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }
        .know-more-modal .modal-cta .btn-sm {
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        .know-more-modal .modal-cta .btn-sm-primary {
          background: #4f46e5;
          color: #fff;
        }
        .know-more-modal .modal-cta .btn-sm-primary:hover {
          background: #4338ca;
          transform: translateY(-2px);
        }
        .know-more-modal .modal-cta .btn-sm-outline {
          background: transparent;
          color: #4f46e5;
          border: 2px solid #4f46e5;
        }
        .know-more-modal .modal-cta .btn-sm-outline:hover {
          background: #4f46e5;
          color: #fff;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ===== BENEFITS ===== */
        .benefits-section {
          background: #eef2ff;
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
          gap: 16px;
        }
        .benefit-item {
          background: #ffffff;
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid #e8edf2;
          transition: all 0.3s ease;
        }
        .benefit-item:hover {
          border-color: #4f46e5;
          transform: translateY(-2px);
        }
        .benefit-item .icon {
          width: 40px;
          height: 40px;
          background: #eef2ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f46e5;
          flex-shrink: 0;
        }
        .benefit-item .title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #0d1b2a;
        }

        /* ===== WHO CAN BENEFIT ===== */
        .who-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .who-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          text-align: center;
          margin-bottom: 24px;
        }
        .who-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .who-item {
          background: #f8fafc;
          border: 1px solid #e8edf2;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #0d1b2a;
          transition: all 0.3s ease;
        }
        .who-item:hover {
          border-color: #4f46e5;
          background: #eef2ff;
        }
        .who-item .check {
          color: #4f46e5;
          flex-shrink: 0;
        }

        /* ===== CTA ===== */
        .cta-section {
          background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
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
        .cta-section .cta-features {
          display: flex;
          gap: 24px;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        .cta-section .cta-features span {
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cta-section .cta-features span .icon {
          opacity: 0.8;
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
          color: #4f46e5;
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
          color: #4f46e5;
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
          color: #4f46e5;
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
          .sleep-page { padding: 0 20px 40px; }
          .hero-section { grid-template-columns: 1fr; text-align: center; padding: 32px 24px; }
          .hero-content .description { margin: 0 auto 20px; }
          .hero-features { justify-content: center; }
          .hero-buttons { justify-content: center; }
          .services-grid { grid-template-columns: 1fr 1fr; }
          .benefits-grid { grid-template-columns: 1fr 1fr; }
          .who-grid { grid-template-columns: 1fr 1fr; }
          .cta-section { grid-template-columns: 1fr; text-align: center; }
          .cta-section .cta-features { justify-content: center; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .know-more-modal { padding: 30px 24px; }
          .know-more-modal .info-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .sleep-page { padding: 0 16px 32px; }
          .hero-content h1 { font-size: 2rem; }
          .hero-section { padding: 24px 16px; }
          .hero-features { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; }
          .who-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .cta-section { padding: 32px 20px; }
          .cta-section h2 { font-size: 1.5rem; }
          .cta-section .cta-buttons { align-items: center; }
          .hero-image-wrapper .floating-badge { left: 50%; transform: translateX(-50%); bottom: -10px; }
          .know-more-modal { padding: 24px 16px; }
        }
      `}</style>

      <Navbar cartCount={cartCount} />

      <div className="sleep-page">
        {/* ===== BREADCRUMB ===== */}
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="separator">›</span>
          <Link href="/services">Services</Link>
          <span className="separator">›</span>
          <span className="current">Sleep Care</span>
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              SLEEP CARE <span>SOLUTIONS</span>
            </h1>
            <p className="subtitle">Better Sleep. Better Life.</p>
            <p className="description">
              We provide complete sleep care solutions for diagnosis and treatment of sleep 
              disorders like Sleep Apnea, Snoring, Insomnia and other breathing related issues.
            </p>
            <div className="hero-features">
              <div className="feature">
                <Activity className="w-4 h-4 icon" /> Advanced Technology
              </div>
              <div className="feature">
                <Users className="w-4 h-4 icon" /> Expert Guidance
              </div>
              <div className="feature">
                <CheckCircle className="w-4 h-4 icon" /> Accurate Diagnosis
              </div>
              <div className="feature">
                <Heart className="w-4 h-4 icon" /> Complete Support
              </div>
            </div>
            <div className="hero-buttons">
              <Link href="/assessment" className="btn-primary">
                <Calendar className="w-4 h-4" /> Book Sleep Study
              </Link>
              <Link href="/contact" className="btn-secondary">
                <Users className="w-4 h-4" /> Consult Our Expert
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image
              src="/images/services/sleep-care.jpg"
              alt="Sleep Care Solutions - Geetanjali Health Care"
              width={480}
              height={400}
              className="rounded-2xl object-cover"
              priority
            />
            <div className="floating-badge">
              <div className="icon">
                <Moon className="w-4 h-4" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#0d1b2a' }}>Better Sleep</div>
                <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>Better Life</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="services-section">
          <h2>Our Sleep Care Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className={`icon-wrap ${service.bg}`}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span 
                  className="learn-more"
                  onClick={() => setSelectedService(service.id)}
                >
                  Know More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== KNOW MORE MODAL ===== */}
        {selected && (
          <div className="know-more-overlay" onClick={() => setSelectedService(null)}>
            <div className="know-more-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedService(null)}>
                <X className="w-5 h-5" />
              </button>
              
              <div className={`modal-icon ${selected.bg}`}>
                {selected.icon}
              </div>
              
              <h2>{selected.title}</h2>
              <p className="modal-sub">{selected.description}</p>
              <p className="modal-desc">{selected.fullDescription}</p>
              
              <div className="info-grid">
                <div className="col">
                  <h4><CheckCircle className="w-4 h-4" /> Key Benefits</h4>
                  <ul>
                    {selected.benefits.map((item, i) => (
                      <li key={i}>
                        <CheckCircle className="w-4 h-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col">
                  <h4><Clipboard className="w-4 h-4" /> Process</h4>
                  <ul>
                    {selected.process.map((item, i) => (
                      <li key={i}>
                        <ArrowRight className="w-4 h-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="modal-cta">
                <Link href="/assessment" className="btn-sm btn-sm-primary">
                  <Calendar className="w-4 h-4" /> Book This Service
                </Link>
                <Link href="/contact" className="btn-sm btn-sm-outline">
                  <Users className="w-4 h-4" /> Consult Expert
                </Link>
                <Link href="tel:+919876543210" className="btn-sm btn-sm-outline" style={{ borderColor: '#d1d5db', color: '#4a5568' }}>
                  <Phone className="w-4 h-4" /> Call Now
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ===== BENEFITS ===== */}
        <section className="benefits-section">
          <h2>Benefits of Better Sleep</h2>
          <div className="benefits-grid">
            {benefits.map((item, i) => (
              <div key={i} className="benefit-item">
                <div className="icon">{item.icon}</div>
                <span className="title">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHO CAN BENEFIT ===== */}
        <section className="who-section">
          <h2>Who Can Benefit?</h2>
          <div className="who-grid">
            {whoCanBenefit.map((item, i) => (
              <div key={i} className="who-item">
                <CheckCircle className="w-4 h-4 check" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta-section">
          <div>
            <h2>Need Help for Better Sleep?</h2>
            <p>Our experts are here to help you. Book your sleep study today.</p>
            <div className="cta-features">
              <span><Clock className="w-4 h-4 icon" /> 24x7 Support</span>
              <span><Home className="w-4 h-4 icon" /> Home Collection</span>
            </div>
          </div>
          <div className="cta-buttons">
            <Link href="/assessment" className="btn-white">
              <Calendar className="w-4 h-4" /> Book Sleep Study
            </Link>
            <Link href="tel:+919876543210" className="btn-outline-white">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </Link>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Geetanjali <span>Health Care</span></h3>
              <p>Caring Beyond Treatment. Geetanjali Health Care is committed to delivering advanced home healthcare solutions with compassion and trust.</p>
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
                <li><Link href="/services/oxygen-therapy">Oxygen Therapy</Link></li>
                <li><Link href="/services/sleep-care">Sleep Care</Link></li>
                <li><Link href="/services/homecare">Homecare Services</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Important Links</h4>
              <ul>
                <li><Link href="/services/patient-monitoring">Patient Monitoring</Link></li>
                <li><Link href="/services/medical-equipment">Medical Equipment</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
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