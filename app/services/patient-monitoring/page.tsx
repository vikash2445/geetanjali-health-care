'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { 
  ArrowRight, CheckCircle, Monitor, Phone, 
  MessageCircle, Calendar, Clock, Users, 
  Shield, Home, Award, Truck, Star,
  ChevronRight, Heart, Activity, Zap,
  Droplet, Thermometer, Wind, Eye,
  Headphones, Mail, MapPin, Download,
  FileText, Settings, BarChart, AlertCircle,
  HeartPulse, Stethoscope, Ambulance, Building,
  Bed, Microscope, Pill, Plus, Minus, Package
} from 'lucide-react';

export default function PatientMonitoringPage() {
  const { cartCount } = useCart();

  const keyFeatures = [
    {
      icon: <Activity className="w-5 h-5" />,
      title: 'Multi-Parameter Monitoring',
      description: 'ECG, NIBP, SPO2, RESP, TEMP, PR and more.'
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      title: 'High Resolution Display',
      description: 'Clear & bright display for easy viewing.'
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: 'Real-time Alerts',
      description: 'Audio & visual alarms for critical conditions.'
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      title: 'Data Storage & Review',
      description: 'Store and review patient data effortlessly.'
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: 'Compact & Portable',
      description: 'Lightweight design for easy transport and use.'
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: 'Suitable for All Areas',
      description: 'ICU, CCU, Wards, OT & Home Care.'
    }
  ];

  const parameters = [
    { icon: <HeartPulse className="w-4 h-4" />, label: 'ECG' },
    { icon: <Heart className="w-4 h-4" />, label: 'Heart Rate (HR)' },
    { icon: <Droplet className="w-4 h-4" />, label: 'SpO2' },
    { icon: <Activity className="w-4 h-4" />, label: 'NIBP' },
    { icon: <Wind className="w-4 h-4" />, label: 'Respiration Rate' },
    { icon: <Thermometer className="w-4 h-4" />, label: 'Temperature' },
    { icon: <Zap className="w-4 h-4" />, label: 'Pulse Rate' }
  ];

  const idealFor = [
    { icon: <Building className="w-4 h-4" />, label: 'ICU / CCU' },
    { icon: <Microscope className="w-4 h-4" />, label: 'Operation Theatres' },
    { icon: <Bed className="w-4 h-4" />, label: 'General Wards' },
    { icon: <Ambulance className="w-4 h-4" />, label: 'Ambulance & Emergency' },
    { icon: <Home className="w-4 h-4" />, label: 'Home Care Patients' }
  ];

  const weProvide = [
    { icon: <Truck className="w-4 h-4" />, label: 'Sales & Installation' },
    { icon: <Users className="w-4 h-4" />, label: 'Training & Demonstration' },
    { icon: <Settings className="w-4 h-4" />, label: 'Service & Repair' },
    { icon: <FileText className="w-4 h-4" />, label: 'AMC (Annual Maintenance Contract)' },
    { icon: <Headphones className="w-4 h-4" />, label: '24x7 Technical Support' }
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Sleep Care', href: '/sleep-care' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' }
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

        .monitor-page {
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
          background: radial-gradient(circle, rgba(220, 38, 38, 0.04) 0%, transparent 70%);
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
          color: #dc2626;
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
          color: #dc2626;
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
          background: #dc2626;
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
          background: #b91c1c;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(220, 38, 38, 0.25);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #dc2626;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          border: 2px solid #dc2626;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: #dc2626;
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
          background: #fef2f2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #dc2626;
        }

        /* ===== KEY FEATURES ===== */
        .features-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .features-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          text-align: center;
          margin-bottom: 24px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .feature-card {
          background: #f8fafc;
          border: 1px solid #e8edf2;
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
          border-color: #dc2626;
        }
        .feature-card .icon-wrap {
          width: 48px;
          height: 48px;
          background: #fef2f2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          color: #dc2626;
        }
        .feature-card h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 4px;
        }
        .feature-card p {
          font-size: 0.8rem;
          color: #4a5568;
          line-height: 1.5;
        }

        /* ===== PARAMETERS ===== */
        .parameters-section {
          background: #f8fafc;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
        }
        .parameters-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          text-align: center;
          margin-bottom: 24px;
        }
        .parameters-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 700px;
          margin: 0 auto;
        }
        .parameter-item {
          background: #ffffff;
          border: 1px solid #e8edf2;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #0d1b2a;
          transition: all 0.3s ease;
        }
        .parameter-item:hover {
          border-color: #dc2626;
          background: #fef2f2;
        }
        .parameter-item .icon {
          color: #dc2626;
          flex-shrink: 0;
        }

        /* ===== IDEAL FOR ===== */
        .ideal-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .ideal-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          text-align: center;
          margin-bottom: 24px;
        }
        .ideal-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .ideal-item {
          background: #f8fafc;
          border: 1px solid #e8edf2;
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .ideal-item:hover {
          border-color: #dc2626;
          transform: translateY(-2px);
        }
        .ideal-item .icon {
          color: #dc2626;
          margin-bottom: 8px;
        }
        .ideal-item .label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #0d1b2a;
        }

        /* ===== WE PROVIDE ===== */
        .provide-section {
          background: #fef2f2;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
        }
        .provide-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          text-align: center;
          margin-bottom: 24px;
        }
        .provide-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 800px;
          margin: 0 auto;
        }
        .provide-item {
          background: #ffffff;
          border: 1px solid #fecaca;
          border-radius: 12px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #0d1b2a;
          transition: all 0.3s ease;
        }
        .provide-item:hover {
          border-color: #dc2626;
          background: #ffffff;
        }
        .provide-item .icon {
          color: #dc2626;
          flex-shrink: 0;
        }

        /* ===== CTA ===== */
        .cta-section {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
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
          color: #dc2626;
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
          color: #dc2626;
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
          color: #dc2626;
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
          .monitor-page { padding: 0 20px 40px; }
          .hero-section { grid-template-columns: 1fr; text-align: center; padding: 32px 24px; }
          .hero-content .description { margin: 0 auto 20px; }
          .hero-features { justify-content: center; }
          .hero-buttons { justify-content: center; }
          .features-grid { grid-template-columns: 1fr 1fr; }
          .parameters-grid { grid-template-columns: 1fr 1fr; }
          .ideal-grid { grid-template-columns: 1fr 1fr; }
          .provide-grid { grid-template-columns: 1fr 1fr; }
          .cta-section { grid-template-columns: 1fr; text-align: center; }
          .cta-section .cta-features { justify-content: center; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .monitor-page { padding: 0 16px 32px; }
          .hero-content h1 { font-size: 2rem; }
          .hero-section { padding: 24px 16px; }
          .hero-features { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr; }
          .parameters-grid { grid-template-columns: 1fr; }
          .ideal-grid { grid-template-columns: 1fr; }
          .provide-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .cta-section { padding: 32px 20px; }
          .cta-section h2 { font-size: 1.5rem; }
          .cta-section .cta-buttons { align-items: center; }
          .hero-image-wrapper .floating-badge { left: 50%; transform: translateX(-50%); bottom: -10px; }
        }
      `}</style>

      <Navbar cartCount={cartCount} />

      <div className="monitor-page">
        {/* ===== BREADCRUMB ===== */}
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="separator">›</span>
          <Link href="/services">Services</Link>
          <span className="separator">›</span>
          <span className="current">Patient Monitoring</span>
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              PATIENT <span>MONITOR</span>
            </h1>
            <p className="subtitle">Monitor Every Beat. Save Every Life.</p>
            <p className="description">
              High performance patient monitors for accurate and real-time monitoring of vital 
              parameters in hospitals, ICU, clinics and home care.
            </p>
            <div className="hero-features">
              <div className="feature">
                <Activity className="w-4 h-4 icon" /> High Accuracy
              </div>
              <div className="feature">
                <Clock className="w-4 h-4 icon" /> Real-time Monitoring
              </div>
              <div className="feature">
                <Users className="w-4 h-4 icon" /> User Friendly Interface
              </div>
              <div className="feature">
                <Home className="w-4 h-4 icon" /> Suitable for ICU &amp; Home
              </div>
            </div>
            <div className="hero-buttons">
              <Link href="/contact" className="btn-primary">
                <Phone className="w-4 h-4" /> Enquire Now
              </Link>
              <Link href="/brochure" className="btn-secondary">
                <Download className="w-4 h-4" /> Download Brochure
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image
              src="/images/services/patient-monitoring.jpg"
              alt="Patient Monitor - Geetanjali Health Care"
              width={480}
              height={400}
              className="rounded-2xl object-cover"
              priority
            />
            <div className="floating-badge">
              <div className="icon">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#0d1b2a' }}>Real-time Monitoring</div>
                <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>Accurate & Reliable</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== KEY FEATURES ===== */}
        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {keyFeatures.map((item, i) => (
              <div key={i} className="feature-card">
                <div className="icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PARAMETERS ===== */}
        <section className="parameters-section">
          <h2>Parameters Monitored</h2>
          <div className="parameters-grid">
            {parameters.map((item, i) => (
              <div key={i} className="parameter-item">
                <span className="icon">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </section>

        {/* ===== IDEAL FOR ===== */}
        <section className="ideal-section">
          <h2>Ideal For</h2>
          <div className="ideal-grid">
            {idealFor.map((item, i) => (
              <div key={i} className="ideal-item">
                <div className="icon">{item.icon}</div>
                <div className="label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WE PROVIDE ===== */}
        <section className="provide-section">
          <h2>We Provide</h2>
          <div className="provide-grid">
            {weProvide.map((item, i) => (
              <div key={i} className="provide-item">
                <span className="icon">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta-section">
          <div>
            <h2>Need Help Choosing the Right Monitor?</h2>
            <p>Our experts will help you find the best solution for your needs.</p>
            <div className="cta-features">
              <span><Users className="w-4 h-4 icon" /> Expert Guidance</span>
              <span><Award className="w-4 h-4 icon" /> Best Price</span>
              <span><Shield className="w-4 h-4 icon" /> After Sales Support</span>
            </div>
          </div>
          <div className="cta-buttons">
            <Link href="tel:+919876543210" className="btn-white">
              <Phone className="w-4 h-4" /> Call Now
            </Link>
            <Link href="/contact" className="btn-outline-white">
              <MessageCircle className="w-4 h-4" /> Enquire Now
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
                <li><Link href="/services/patient-monitoring">Patient Monitoring</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Important Links</h4>
              <ul>
                <li><Link href="/services/homecare">Homecare Services</Link></li>
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