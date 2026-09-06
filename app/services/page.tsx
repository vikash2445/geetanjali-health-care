'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { 
  ArrowRight, CheckCircle, Wind, Moon, Activity, 
  Heart, Stethoscope, Phone, MessageCircle,
  Calendar, Clock, Users, Shield, Home, Award
} from 'lucide-react';

export default function ServicesPage() {
  const { cartCount } = useCart();

  const services = [
    {
      id: 1,
      title: 'Oxygen Therapy',
      description: 'Oxygen concentrators and cylinders for home and hospital use.',
      icon: <Wind className="w-8 h-8 text-emerald-700" />,
      href: '/services/oxygen-therapy',
      image: '/images/services/oxygen-concentrator-10ltr.png',
      bg: 'bg-emerald-50'
    },
    {
      id: 2,
      title: 'Sleep Care',
      description: 'CPAP, BiPAP, Sleep Study and complete sleep apnea management.',
      icon: <Moon className="w-8 h-8 text-indigo-700" />,
      href: '/services/sleep-care',
      image: '/images/services/sleep-care.jpg',
      bg: 'bg-indigo-50'
    },
    {
      id: 3,
      title: 'Patient Monitoring',
      description: 'Advanced patient monitors for accurate health tracking.',
      icon: <Activity className="w-8 h-8 text-blue-700" />,
      href: '/services/patient-monitoring',
      image: '/images/services/patient-monitor.jpg',
      bg: 'bg-blue-50'
    },
    {
      id: 4,
      title: 'Homecare Services',
      description: 'Nursing care, doctor visits and physiotherapy at home.',
      icon: <Heart className="w-8 h-8 text-rose-700" />,
      href: '/services/homecare',
      image: '/images/services/homecare.jpg',
      bg: 'bg-rose-50'
    },
    {
      id: 5,
      title: 'Medical Equipment',
      description: 'High quality medical equipment and accessories.',
      icon: <Stethoscope className="w-8 h-8 text-teal-700" />,
      href: '/services/medical-equipment',
      image: '/images/services/medical-equipment.jpg',
      bg: 'bg-teal-50'
    }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: 'Expert Support',
      desc: '24x7 Assistance'
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: 'On-Time Service',
      desc: 'Always Reliable'
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-600" />,
      title: 'Trusted Care',
      desc: 'For Your Family'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
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
          background: #ffffff;
          color: #1a1a2e;
        }

        .services-page {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px 60px;
        }

        /* ===== PAGE HEADER ===== */
        .page-header {
          padding: 48px 0 32px;
          text-align: center;
        }
        .page-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 12px;
        }
        .page-header h1 span {
          color: #0a6b4a;
        }
        .page-header p {
          font-size: 1.1rem;
          color: #4a5568;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ===== FEATURES BAR ===== */
        .features-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 30px 0;
          border-top: 1px solid #e8edf2;
          border-bottom: 1px solid #e8edf2;
          margin-bottom: 48px;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px;
        }
        .feature-icon {
          width: 48px;
          height: 48px;
          background: #e8f5ee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .feature-text h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #0d1b2a;
        }
        .feature-text p {
          font-size: 0.8rem;
          color: #6b7280;
        }

        /* ===== SERVICES GRID ===== */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 32px;
        }
        .service-card {
          background: #ffffff;
          border: 1px solid #e8edf2;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
          border-color: #0a6b4a;
        }
        .service-image {
          width: 100%;
          height: 200px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 16px;
        }
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;  /* ← object-contain se image cut nahi hogi */
          transition: transform 0.3s ease;
        }
        .service-card:hover .service-image img {
          transform: scale(1.05);
        }
        .service-image .fallback-icon {
          font-size: 4rem;
          opacity: 0.4;
        }
        .service-body {
          padding: 24px 20px 20px;
        }
        .service-body .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .service-body h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 8px;
        }
        .service-body p {
          font-size: 0.88rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .service-body .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #0a6b4a;
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .service-body .learn-more:hover {
          gap: 10px;
        }

        /* ===== CONSULTATION CTA ===== */
        .consultation-cta {
          background: #0a6b4a;
          border-radius: 20px;
          padding: 48px 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 48px 0;
        }
        .consultation-cta h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
        }
        .consultation-cta p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }
        .consultation-cta .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #0a6b4a;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .consultation-cta .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        /* ===== FOOTER ===== */
        .footer {
          padding: 48px 0 24px;
          border-top: 1px solid #e8edf2;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 32px;
        }
        .footer-brand h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 8px;
        }
        .footer-brand h3 span {
          color: #0a6b4a;
        }
        .footer-brand p {
          font-size: 0.85rem;
          color: #6b7280;
          line-height: 1.7;
          max-width: 280px;
        }
        .footer-col h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 16px;
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
          font-size: 0.85rem;
          transition: color 0.2s;
        }
        .footer-col ul li a:hover {
          color: #0a6b4a;
        }
        .footer-col .phone-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #0d1b2a;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
        }
        .footer-col .whatsapp-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: #fff;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          margin-top: 8px;
          transition: all 0.3s ease;
        }
        .footer-col .whatsapp-link:hover {
          transform: scale(1.02);
        }
        .footer-bottom {
          border-top: 1px solid #e8edf2;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.8rem;
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
        .footer-bottom-links a:hover {
          color: #0a6b4a;
        }

        @media (max-width: 1024px) {
          .services-page {
            padding: 0 20px 40px;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .consultation-cta {
            flex-direction: column;
            text-align: center;
            padding: 32px 24px;
            gap: 20px;
          }
          .page-header h1 {
            font-size: 2.4rem;
          }
        }

        @media (max-width: 640px) {
          .services-page {
            padding: 0 16px 32px;
          }
          .features-bar {
            grid-template-columns: 1fr;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .page-header h1 {
            font-size: 1.8rem;
          }
          .page-header p {
            font-size: 0.95rem;
          }
          .consultation-cta h2 {
            font-size: 1.5rem;
          }
          .service-image {
            height: 160px;
          }
        }
      `}</style>

      <Navbar cartCount={cartCount} />

      <div className="services-page">
        {/* ===== PAGE HEADER ===== */}
        <div className="page-header">
          <h1>Our <span>Services</span></h1>
          <p>Complete healthcare solutions delivered to your home with compassion and trust.</p>
        </div>

        {/* ===== FEATURES BAR ===== */}
        <div className="features-bar">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-text">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <Link href={service.href}>
                <div className="service-image">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement('span');
                        fallback.className = 'fallback-icon';
                        fallback.textContent = '🏥';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="service-body">
                  <div className={`icon-wrap ${service.bg}`}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="learn-more">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* ===== CONSULTATION CTA ===== */}
        <div className="consultation-cta">
          <div>
            <h2>Book a Consultation</h2>
            <p>Get expert advice for your healthcare needs.</p>
          </div>
          <Link href="/assessment" className="btn-white">
            <Calendar className="w-5 h-5" />
            Book Now →
          </Link>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Geetanjali <span>Health Care</span></h3>
              <p>Quality healthcare services delivered to your home with compassion and trust.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect With Us</h4>
              <ul>
                <li>
                  <a href="tel:+919876543210" className="phone-link">
                    <Phone className="w-4 h-4" />
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/919876543210" className="whatsapp-link">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li><Link href="/services/oxygen-therapy">Oxygen Therapy</Link></li>
                <li><Link href="/services/sleep-care">Sleep Care</Link></li>
                <li><Link href="/services/patient-monitoring">Patient Monitoring</Link></li>
                <li><Link href="/services/homecare">Homecare Services</Link></li>
                <li><Link href="/services/medical-equipment">Medical Equipment</Link></li>
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