'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { 
  ArrowRight, CheckCircle, Wind, Phone, 
  MessageCircle, Calendar, Clock, Users, 
  Shield, Home, Award, Truck, Star,
  ChevronRight, HelpCircle, Check, X,
  Building, Package, Heart, Activity,
  Headphones, Mail, Droplet,
  Sparkles, Leaf, HeartPulse,
  Moon, Cloud, Zap, ShoppingBag
} from 'lucide-react';

export default function OxygenTherapyPage() {
  const { cartCount } = useCart();
  const [activeTab, setActiveTab] = useState<'rent' | 'buy'>('rent');
  const [cpapBipapTab, setCpapBipapTab] = useState<'cpap' | 'bipap'>('cpap');

  // Oxygen Rental Plans
  const rentalPlans = [
    {
      id: 1,
      name: '5 LPM Oxygen Concentrator',
      description: 'Suitable for most home oxygen therapy patients',
      features: [
        'Daily / Weekly / Monthly Rental Available',
        'Home Delivery & Installation',
        '24x7 Technical Support',
        'Free Demonstration'
      ],
      daily: '₹300 / day',
      weekly: '₹1,800 / week',
      monthly: '₹4,500 / month',
      image: '/images/services/5_ltr_oxygen_concentrator.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book 5 LPM Oxygen Concentrator on Rental.\n\nDetails:\n• Type: Rental\n• Machine: 5 LPM Oxygen Concentrator'
    },
    {
      id: 2,
      name: '10 LPM Oxygen Concentrator',
      description: 'High Flow Oxygen Support - Ideal for severe respiratory conditions',
      features: [
        'Daily / Weekly / Monthly Rental Available',
        'Installation included',
        '24x7 Support',
        'Heavy duty compressor'
      ],
      daily: '₹500 / day',
      weekly: '₹3,000 / week',
      monthly: '₹7,500 / month',
      image: '/images/services/oxygen-concentrator-10ltr.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book 10 LPM Oxygen Concentrator on Rental.\n\nDetails:\n• Type: Rental\n• Machine: 10 LPM Oxygen Concentrator'
    }
  ];

  // CPAP Rental Plans
  const cpapRentalPlans = [
    {
      id: 1,
      name: 'CPAP Machine (Auto CPAP)',
      description: 'Automatic CPAP for Sleep Apnea treatment with humidifier',
      features: [
        'Daily / Weekly / Monthly Rental Available',
        'Mask & accessories included',
        '24x7 Technical Support',
        'Free Demonstration & setup'
      ],
      daily: '₹250 / day',
      weekly: '₹1,500 / week',
      monthly: '₹3,500 / month',
      image: '/images/services/auto_cpap.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book CPAP Machine on Rental.\n\nDetails:\n• Type: Rental\n• Machine: CPAP Auto'
    },
    {
      id: 2,
      name: 'CPAP Machine (Fixed Pressure)',
      description: 'Fixed pressure CPAP for patients with prescribed pressure settings',
      features: [
        'Daily / Weekly / Monthly Rental Available',
        'Mask & accessories included',
        '24x7 Technical Support',
        'Pressure pre-set as per prescription'
      ],
      daily: '₹200 / day',
      weekly: '₹1,200 / week',
      monthly: '₹3,000 / month',
      image: '/images/services/auto_cpap.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book Fixed CPAP Machine on Rental.\n\nDetails:\n• Type: Rental\n• Machine: Fixed CPAP'
    }
  ];

  // BiPAP Rental Plans
  const bipapRentalPlans = [
    {
      id: 1,
      name: 'BiPAP Machine (ST Mode)',
      description: 'BiPAP ST for patients with respiratory insufficiency',
      features: [
        'Daily / Weekly / Monthly Rental Available',
        'Mask & accessories included',
        '24x7 Technical Support',
        'Ideal for COPD & Neuromuscular disorders'
      ],
      daily: '₹400 / day',
      weekly: '₹2,400 / week',
      monthly: '₹6,000 / month',
      image: '/images/services/auto_bipap.jpg',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book BiPAP ST Machine on Rental.\n\nDetails:\n• Type: Rental\n• Machine: BiPAP ST'
    },
    {
      id: 2,
      name: 'BiPAP Machine (AVAPS)',
      description: 'Advanced BiPAP with AVAPS for complex respiratory conditions',
      features: [
        'Daily / Weekly / Monthly Rental Available',
        'Mask & accessories included',
        '24x7 Technical Support',
        'Advanced pressure support'
      ],
      daily: '₹550 / day',
      weekly: '₹3,300 / week',
      monthly: '₹8,000 / month',
      image: '/images/services/auto_bipap.jpg',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book BiPAP AVAPS Machine on Rental.\n\nDetails:\n• Type: Rental\n• Machine: BiPAP AVAPS'
    }
  ];

  // Oxygen Buy Products
  const buyProducts = [
    {
      id: 1,
      name: '5 LPM Oxygen Concentrator',
      description: 'Low power consumption, High purity oxygen (93% ± 3%)',
      features: [
        'Low noise operation',
        'Easy to use & durable',
        '1 Year Warranty',
        'Low maintenance'
      ],
      price: '₹48,000',
      emi: '₹2,199 / month',
      image: '/images/services/5_ltr_oxygen_concentrator.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy 5 LPM Oxygen Concentrator.\n\nProduct: 5 LPM Oxygen Concentrator\nPrice: ₹48,000'
    },
    {
      id: 2,
      name: '10 LPM Oxygen Concentrator',
      description: 'High oxygen output - Suitable for ICU & home use',
      features: [
        'Continuous oxygen support',
        'Heavy duty compressor',
        '1 Year Warranty',
        'High reliability'
      ],
      price: '₹75,000',
      emi: '₹3,500 / month',
      image: '/images/services/oxygen-concentrator-10ltr.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy 10 LPM Oxygen Concentrator.\n\nProduct: 10 LPM Oxygen Concentrator\nPrice: ₹75,000'
    },
    {
      id: 3,
      name: 'Portable Oxygen Concentrator',
      description: 'Lightweight & Portable - Rechargeable Battery',
      features: [
        'Travel Friendly',
        'Ideal for active patients',
        '1 Year Warranty',
        'Lightweight design'
      ],
      price: '₹1,20,000',
      emi: '₹5,500 / month',
      image: '/images/services/portable_oxygen_concentrator.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy Portable Oxygen Concentrator.\n\nProduct: Portable Oxygen Concentrator\nPrice: ₹1,20,000'
    }
  ];

  // CPAP Buy Products
  const cpapBuyProducts = [
    {
      id: 1,
      name: 'CPAP Machine (Auto)',
      description: 'Smart Auto CPAP with built-in humidifier and bluetooth connectivity',
      features: [
        'Auto pressure adjustment',
        'Integrated humidifier',
        '2 Year Warranty',
        'App connectivity'
      ],
      price: '₹45,000',
      emi: '₹2,050 / month',
      image: '/images/services/auto_cpap.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy Auto CPAP Machine.\n\nProduct: Auto CPAP\nPrice: ₹45,000'
    },
    {
      id: 2,
      name: 'CPAP Machine (Fixed)',
      description: 'Reliable fixed pressure CPAP with humidifier',
      features: [
        'Fixed pressure delivery',
        'Built-in humidifier',
        '2 Year Warranty',
        'Quiet operation'
      ],
      price: '₹35,000',
      emi: '₹1,600 / month',
      image: '/images/services/auto_cpap.png',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy Fixed CPAP Machine.\n\nProduct: Fixed CPAP\nPrice: ₹35,000'
    }
  ];

  // BiPAP Buy Products
  const bipapBuyProducts = [
    {
      id: 1,
      name: 'BiPAP ST Machine',
      description: 'BiPAP ST for COPD, Neuromuscular disorders and respiratory insufficiency',
      features: [
        'ST Mode support',
        'Integrated humidifier',
        '2 Year Warranty',
        'Advanced monitoring'
      ],
      price: '₹85,000',
      emi: '₹3,900 / month',
      image: '/images/services/auto_bipap.jpg',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy BiPAP ST Machine.\n\nProduct: BiPAP ST\nPrice: ₹85,000'
    },
    {
      id: 2,
      name: 'BiPAP AVAPS Machine',
      description: 'Advanced BiPAP with AVAPS for complex respiratory conditions',
      features: [
        'AVAPS technology',
        'Full respiratory support',
        '2 Year Warranty',
        'Hospital grade'
      ],
      price: '₹1,25,000',
      emi: '₹5,700 / month',
      image: '/images/services/auto_bipap.jpg',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to buy BiPAP AVAPS Machine.\n\nProduct: BiPAP AVAPS\nPrice: ₹1,25,000'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Sleep Care', href: '/sleep-care' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const openWhatsApp = (message: string) => {
    const phone = '919876543210';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #f8fafc; color: #0d1b2a; }

        .oxy-page { max-width: 1280px; margin: 0 auto; padding: 0 40px 60px; }

        .breadcrumb {
          display: flex; align-items: center; gap: 8px; padding: 24px 0 16px;
          font-size: 0.8rem; color: #6b7280;
        }
        .breadcrumb a { color: #0a6b4a; text-decoration: none; transition: color 0.2s; }
        .breadcrumb a:hover { text-decoration: underline; }
        .breadcrumb .separator { color: #d1d5db; }
        .breadcrumb .current { color: #0d1b2a; font-weight: 600; }

        .hero-section {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
          align-items: center; background: #ffffff; border-radius: 24px;
          padding: 48px 56px; margin-bottom: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          position: relative; overflow: hidden;
        }
        .hero-section::before {
          content: ''; position: absolute; top: -40%; right: -20%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(10,107,74,0.04) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .hero-content { position: relative; z-index: 1; }
        .hero-content .badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: #e8f5ee; color: #0a6b4a; padding: 4px 14px; border-radius: 50px;
          font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.5px; margin-bottom: 12px;
        }
        .hero-content h1 {
          font-family: 'Playfair Display', serif; font-size: 3.2rem; font-weight: 700;
          color: #0d1b2a; line-height: 1.08; margin-bottom: 4px;
        }
        .hero-content h1 span { color: #0a6b4a; }
        .hero-content .subtitle { font-size: 1.1rem; font-weight: 600; color: #0d1b2a; margin-bottom: 8px; }
        .hero-content .description {
          font-size: 0.95rem; color: #4a5568; line-height: 1.7;
          margin-bottom: 24px; max-width: 480px;
        }

        .hero-toggle {
          display: flex; gap: 0; background: #f1f5f9; border-radius: 12px; padding: 4px;
          max-width: 320px; margin-bottom: 20px;
        }
        .hero-toggle .toggle-btn {
          flex: 1; padding: 12px 24px; border: none; border-radius: 10px;
          font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: all 0.3s ease;
          background: transparent; color: #6b7280;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .hero-toggle .toggle-btn.active { background: #0a6b4a; color: #fff; box-shadow: 0 4px 12px rgba(10,107,74,0.2); }
        .hero-toggle .toggle-btn:hover:not(.active) { background: #e8edf2; }

        .hero-feature-badges {
          display: flex; gap: 16px; margin-top: 16px; flex-wrap: wrap;
        }
        .hero-feature-badges .feature-badge {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.8rem; color: #0a6b4a; font-weight: 600;
        }
        .hero-feature-badges .feature-badge .icon {
          width: 32px; height: 32px; background: #e8f5ee; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .hero-visual { position: relative; z-index: 1; display: flex; justify-content: center; align-items: center; }
        .hero-visual .main-image {
          width: 100%; max-width: 420px; border-radius: 16px; position: relative; z-index: 2;
          aspect-ratio: 4/3; overflow: hidden; background: #f1f5f9;
        }
        .hero-visual .main-image img {
          width: 100%; height: 100%; object-fit: cover; border-radius: 16px;
        }
        .hero-visual .floating-badge {
          position: absolute; bottom: 20px; right: -10px;
          background: #ffffff; border-radius: 12px; padding: 12px 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          display: flex; align-items: center; gap: 10px; z-index: 3; border: 1px solid #e8edf2;
        }
        .hero-visual .floating-badge .icon {
          width: 36px; height: 36px; background: #e8f5ee; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; color: #0a6b4a;
        }
        .hero-visual .floating-badge .text { font-size: 0.75rem; font-weight: 600; color: #0d1b2a; }
        .hero-visual .floating-badge .text span { display: block; font-size: 0.65rem; font-weight: 400; color: #6b7280; }

        /* Rental Section */
        .rental-section {
          background: #ffffff; border-radius: 24px; padding: 40px; margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        .rental-section h2 {
          font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 700;
          color: #0d1b2a; margin-bottom: 8px;
        }
        .rental-section .sub { color: #6b7280; margin-bottom: 24px; font-size: 0.95rem; }
        .rental-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

        .rental-card {
          background: #f8fafc; border: 1px solid #e8edf2; border-radius: 16px; overflow: hidden; transition: all 0.3s ease;
        }
        .rental-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.06); border-color: #0a6b4a; }
        .rental-card .card-image {
          width: 100%; height: 200px; overflow: hidden; background: #f1f5f9; position: relative;
        }
        .rental-card .card-image img {
          width: 100%; height: 100%; object-fit: contain; padding: 16px; transition: transform 0.3s ease;
        }
        .rental-card:hover .card-image img { transform: scale(1.05); }
        .rental-card .card-body { padding: 24px; }
        .rental-card .card-body h3 { font-size: 0.95rem; font-weight: 800; color: #0d1b2a; margin-bottom: 4px; }
        .rental-card .card-body .desc { font-size: 0.82rem; color: #4a5568; margin-bottom: 12px; }
        .rental-card .card-body .features { list-style: none; margin-bottom: 16px; }
        .rental-card .card-body .features li {
          display: flex; align-items: center; gap: 8px; font-size: 0.78rem;
          color: #4a5568; padding: 4px 0;
        }
        .rental-card .card-body .features li .check { color: #0a6b4a; flex-shrink: 0; }

        .rental-prices {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;
          padding-top: 14px; border-top: 1px solid #e8edf2; margin-bottom: 16px;
        }
        .rental-prices .price-item { text-align: center; }
        .rental-prices .price-item .label { font-size: 0.6rem; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; }
        .rental-prices .price-item .value { font-size: 0.95rem; font-weight: 800; color: #0d1b2a; }

        .btn-whatsapp {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: #25D366; color: #fff; padding: 12px 24px; border-radius: 50px;
          font-weight: 700; font-size: 0.85rem; border: none; cursor: pointer; transition: all 0.3s ease;
          width: 100%;
        }
        .btn-whatsapp:hover { background: #1da851; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(37,211,102,0.3); }

        /* Buy Section */
        .buy-section {
          background: #ffffff; border-radius: 24px; padding: 40px; margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        .buy-section h2 {
          font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 700;
          color: #0d1b2a; margin-bottom: 8px;
        }
        .buy-section .sub { color: #6b7280; margin-bottom: 24px; font-size: 0.95rem; }
        .buy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        .buy-card {
          background: #f8fafc; border: 1px solid #e8edf2; border-radius: 16px; overflow: hidden; transition: all 0.3s ease;
          display: flex; flex-direction: column;
        }
        .buy-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.06); border-color: #0a6b4a; }
        .buy-card .card-image {
          width: 100%; height: 200px; overflow: hidden; background: #f1f5f9; position: relative;
        }
        .buy-card .card-image img {
          width: 100%; height: 100%; object-fit: contain; padding: 16px; transition: transform 0.3s ease;
        }
        .buy-card:hover .card-image img { transform: scale(1.05); }
        .buy-card .card-body { padding: 20px 24px; flex: 1; display: flex; flex-direction: column; }
        .buy-card .card-body h3 { font-size: 0.9rem; font-weight: 800; color: #0d1b2a; margin-bottom: 4px; }
        .buy-card .card-body .desc { font-size: 0.78rem; color: #4a5568; margin-bottom: 12px; }
        .buy-card .card-body .features { list-style: none; margin-bottom: 16px; flex: 1; }
        .buy-card .card-body .features li {
          display: flex; align-items: center; gap: 8px; font-size: 0.72rem;
          color: #4a5568; padding: 3px 0;
        }
        .buy-card .card-body .features li .check { color: #0a6b4a; flex-shrink: 0; }

        .buy-card .card-body .price-section {
          border-top: 1px solid #e8edf2; padding-top: 14px;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;
        }
        .buy-card .card-body .price-section .price { font-size: 1.1rem; font-weight: 800; color: #0a6b4a; }
        .buy-card .card-body .price-section .emi { font-size: 0.7rem; color: #6b7280; }

        .btn-group {
          display: flex; gap: 10px; width: 100%; margin-top: 4px;
        }
        .btn-group .btn-buy {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: #0a6b4a; color: #fff; padding: 10px 16px; border-radius: 50px;
          font-weight: 700; font-size: 0.8rem; border: none; cursor: pointer; transition: all 0.3s ease;
        }
        .btn-group .btn-buy:hover { background: #085a3e; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(10,107,74,0.25); }
        .btn-group .btn-whatsapp-sm {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          background: #25D366; color: #fff; padding: 10px 16px; border-radius: 50px;
          font-weight: 700; font-size: 0.8rem; border: none; cursor: pointer; transition: all 0.3s ease;
        }
        .btn-group .btn-whatsapp-sm:hover { background: #1da851; transform: translateY(-2px); }

        /* Sub Toggle for CPAP/BiPAP */
        .sub-toggle {
          display: flex; gap: 0; background: #f1f5f9; border-radius: 12px; padding: 4px;
          max-width: 280px; margin: 0 auto 24px;
        }
        .sub-toggle .toggle-btn {
          flex: 1; padding: 10px 20px; border: none; border-radius: 10px;
          font-weight: 700; font-size: 0.85rem; cursor: pointer; transition: all 0.3s ease;
          background: transparent; color: #6b7280;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .sub-toggle .toggle-btn.active { background: #0a6b4a; color: #fff; box-shadow: 0 4px 12px rgba(10,107,74,0.2); }
        .sub-toggle .toggle-btn:hover:not(.active) { background: #e8edf2; }

        .section-divider {
          display: flex; align-items: center; gap: 20px; margin: 48px 0 32px; position: relative;
        }
        .section-divider::before { content: ''; flex: 1; height: 2px; background: linear-gradient(to right, transparent, #e8edf2); }
        .section-divider::after { content: ''; flex: 1; height: 2px; background: linear-gradient(to left, transparent, #e8edf2); }
        .section-divider .divider-content {
          display: flex; align-items: center; gap: 12px; padding: 0 20px;
          font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700;
          color: #0d1b2a; white-space: nowrap;
        }
        .section-divider .divider-content .icon { color: #0a6b4a; }

        /* Footer */
        .footer {
          padding: 40px 0 24px; border-top: 1px solid #e8edf2; margin-top: 32px;
        }
        .footer-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; padding-bottom: 32px;
        }
        .footer-brand h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: #0d1b2a; }
        .footer-brand h3 span { color: #0a6b4a; }
        .footer-brand p { font-size: 0.82rem; color: #6b7280; line-height: 1.7; max-width: 280px; }
        .footer-col h4 { font-size: 0.82rem; font-weight: 700; color: #0d1b2a; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px; }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 10px; }
        .footer-col ul li a { color: #6b7280; text-decoration: none; font-size: 0.82rem; transition: color 0.2s; }
        .footer-col ul li a:hover { color: #0a6b4a; }
        .footer-bottom {
          border-top: 1px solid #e8edf2; padding-top: 20px;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
          font-size: 0.75rem; color: #6b7280;
        }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-bottom-links a { color: #6b7280; text-decoration: none; }

        @media (max-width: 1024px) {
          .oxy-page { padding: 0 20px 40px; }
          .hero-section { grid-template-columns: 1fr; text-align: center; padding: 32px 24px; }
          .hero-content .description { margin: 0 auto 24px; }
          .hero-toggle { margin: 0 auto 20px; }
          .hero-feature-badges { justify-content: center; }
          .hero-visual .floating-badge { right: 10px; bottom: 10px; }
          .rental-grid { grid-template-columns: 1fr; }
          .buy-grid { grid-template-columns: 1fr 1fr; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .oxy-page { padding: 0 16px 32px; }
          .hero-content h1 { font-size: 2rem; }
          .hero-section { padding: 24px 16px; }
          .hero-toggle { flex-direction: column; max-width: 100%; }
          .buy-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .hero-visual .floating-badge { position: static; margin-top: 16px; }
          .rental-prices { grid-template-columns: 1fr; gap: 8px; }
          .rental-section { padding: 24px 16px; }
          .buy-section { padding: 24px 16px; }
          .btn-group { flex-direction: column; }
          .sub-toggle { flex-direction: column; max-width: 100%; }
        }
      `}</style>

      <Navbar cartCount={cartCount} />

      <div className="oxy-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="separator">›</span>
          <Link href="/services">Services</Link>
          <span className="separator">›</span>
          <span className="current">Oxygen Therapy</span>
        </div>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="badge">
              <HeartPulse className="w-3 h-3" /> Pure Oxygen
            </div>
            <h1>
              OXYGEN <span>THERAPY</span>
            </h1>
            <p className="subtitle">Breathe Better. Live Better.</p>
            <p className="description">
              Choose the best option for your needs – Rent or Buy Oxygen Concentrators 
              with complete support and care.
            </p>

            <div className="hero-toggle">
              <button 
                className={`toggle-btn ${activeTab === 'rent' ? 'active' : ''}`}
                onClick={() => setActiveTab('rent')}
              >
                <Package className="w-4 h-4" /> Rental
              </button>
              <button 
                className={`toggle-btn ${activeTab === 'buy' ? 'active' : ''}`}
                onClick={() => setActiveTab('buy')}
              >
                <Building className="w-4 h-4" /> Buy
              </button>
            </div>

            <div className="hero-feature-badges">
              <div className="feature-badge">
                <div className="icon"><Droplet className="w-4 h-4" /></div>
                Pure Oxygen
              </div>
              <div className="feature-badge">
                <div className="icon"><Sparkles className="w-4 h-4" /></div>
                Better Life
              </div>
              <div className="feature-badge">
                <div className="icon"><Leaf className="w-4 h-4" /></div>
                Safe & Trusted
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="main-image">
              <img
                src="/images/services/oxygen_concentrator_ui.png"
                alt="Oxygen Concentrator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="floating-badge">
              <div className="icon">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div className="text">
                Trusted Care
                <span>24x7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== OXYGEN SECTION ===== */}
        {activeTab === 'rent' && (
          <div className="rental-section">
            <h2>Oxygen Concentrator Rental Plans</h2>
            <p className="sub">Short Term & Long Term Rental Options with Home Delivery & Installation</p>
            <div className="rental-grid">
              {rentalPlans.map((plan) => (
                <div key={plan.id} className="rental-card">
                  <div className="card-image">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{plan.name}</h3>
                    <p className="desc">{plan.description}</p>
                    <ul className="features">
                      {plan.features.map((f, i) => (
                        <li key={i}>
                          <CheckCircle className="w-3 h-3 check" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="rental-prices">
                      <div className="price-item">
                        <div className="label">Daily</div>
                        <div className="value">{plan.daily}</div>
                      </div>
                      <div className="price-item">
                        <div className="label">Weekly</div>
                        <div className="value">{plan.weekly}</div>
                      </div>
                      <div className="price-item">
                        <div className="label">Monthly</div>
                        <div className="value">{plan.monthly}</div>
                      </div>
                    </div>
                    <button 
                      className="btn-whatsapp"
                      onClick={() => openWhatsApp(plan.whatsappMessage)}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book Now on WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'buy' && (
          <div className="buy-section">
            <h2>Buy Oxygen Concentrator</h2>
            <p className="sub">Own a Reliable Oxygen Concentrator for Long Term Use</p>
            <div className="buy-grid">
              {buyProducts.map((product) => (
                <div key={product.id} className="buy-card">
                  <div className="card-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{product.name}</h3>
                    <p className="desc">{product.description}</p>
                    <ul className="features">
                      {product.features.map((f, i) => (
                        <li key={i}>
                          <CheckCircle className="w-3 h-3 check" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="price-section">
                      <div>
                        <div className="price">{product.price}</div>
                        <div className="emi">EMI: {product.emi}</div>
                      </div>
                    </div>
                    <div className="btn-group">
                      <button 
                        className="btn-buy"
                        onClick={() => alert(`Product: ${product.name}\nPrice: ${product.price}\n\nOur team will contact you shortly.`)}
                      >
                        <ShoppingBag className="w-4 h-4" /> Buy Now
                      </button>
                      <button 
                        className="btn-whatsapp-sm"
                        onClick={() => openWhatsApp(product.whatsappMessage)}
                      >
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== CPAP & BiPAP DIVIDER ===== */}
        <div className="section-divider">
          <div className="divider-content">
            <Moon className="w-6 h-6 icon" />
            CPAP & BiPAP Therapy
            <Cloud className="w-6 h-6 icon" />
          </div>
        </div>

        {/* CPAP/BiPAP Sub Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="sub-toggle">
            <button 
              className={`toggle-btn ${cpapBipapTab === 'cpap' ? 'active' : ''}`}
              onClick={() => setCpapBipapTab('cpap')}
            >
              <Moon className="w-4 h-4" /> CPAP
            </button>
            <button 
              className={`toggle-btn ${cpapBipapTab === 'bipap' ? 'active' : ''}`}
              onClick={() => setCpapBipapTab('bipap')}
            >
              <Wind className="w-4 h-4" /> BiPAP
            </button>
          </div>
        </div>

        {/* ===== CPAP SECTION ===== */}
        {cpapBipapTab === 'cpap' && (
          <>
            {activeTab === 'rent' ? (
              <div className="rental-section" style={{ marginTop: 24 }}>
                <h2>CPAP Rental Plans</h2>
                <p className="sub">Rent CPAP Machines for Sleep Apnea Treatment</p>
                <div className="rental-grid">
                  {cpapRentalPlans.map((plan) => (
                    <div key={plan.id} className="rental-card">
                      <div className="card-image">
                        <img
                          src={plan.image}
                          alt={plan.name}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{plan.name}</h3>
                        <p className="desc">{plan.description}</p>
                        <ul className="features">
                          {plan.features.map((f, i) => (
                            <li key={i}>
                              <CheckCircle className="w-3 h-3 check" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="rental-prices">
                          <div className="price-item">
                            <div className="label">Daily</div>
                            <div className="value">{plan.daily}</div>
                          </div>
                          <div className="price-item">
                            <div className="label">Weekly</div>
                            <div className="value">{plan.weekly}</div>
                          </div>
                          <div className="price-item">
                            <div className="label">Monthly</div>
                            <div className="value">{plan.monthly}</div>
                          </div>
                        </div>
                        <button 
                          className="btn-whatsapp"
                          onClick={() => openWhatsApp(plan.whatsappMessage)}
                        >
                          <MessageCircle className="w-5 h-5" />
                          Book Now on WhatsApp
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="buy-section" style={{ marginTop: 24 }}>
                <h2>Buy CPAP Machines</h2>
                <p className="sub">Own a CPAP Machine for Long Term Therapy</p>
                <div className="buy-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  {cpapBuyProducts.map((product) => (
                    <div key={product.id} className="buy-card">
                      <div className="card-image">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{product.name}</h3>
                        <p className="desc">{product.description}</p>
                        <ul className="features">
                          {product.features.map((f, i) => (
                            <li key={i}>
                              <CheckCircle className="w-3 h-3 check" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="price-section">
                          <div>
                            <div className="price">{product.price}</div>
                            <div className="emi">EMI: {product.emi}</div>
                          </div>
                        </div>
                        <div className="btn-group">
                          <button 
                            className="btn-buy"
                            onClick={() => alert(`Product: ${product.name}\nPrice: ${product.price}\n\nOur team will contact you shortly.`)}
                          >
                            <ShoppingBag className="w-4 h-4" /> Buy Now
                          </button>
                          <button 
                            className="btn-whatsapp-sm"
                            onClick={() => openWhatsApp(product.whatsappMessage)}
                          >
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* ===== BiPAP SECTION ===== */}
        {cpapBipapTab === 'bipap' && (
          <>
            {activeTab === 'rent' ? (
              <div className="rental-section" style={{ marginTop: 24 }}>
                <h2>BiPAP Rental Plans</h2>
                <p className="sub">Rent BiPAP Machines for Advanced Respiratory Support</p>
                <div className="rental-grid">
                  {bipapRentalPlans.map((plan) => (
                    <div key={plan.id} className="rental-card">
                      <div className="card-image">
                        <img
                          src={plan.image}
                          alt={plan.name}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{plan.name}</h3>
                        <p className="desc">{plan.description}</p>
                        <ul className="features">
                          {plan.features.map((f, i) => (
                            <li key={i}>
                              <CheckCircle className="w-3 h-3 check" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="rental-prices">
                          <div className="price-item">
                            <div className="label">Daily</div>
                            <div className="value">{plan.daily}</div>
                          </div>
                          <div className="price-item">
                            <div className="label">Weekly</div>
                            <div className="value">{plan.weekly}</div>
                          </div>
                          <div className="price-item">
                            <div className="label">Monthly</div>
                            <div className="value">{plan.monthly}</div>
                          </div>
                        </div>
                        <button 
                          className="btn-whatsapp"
                          onClick={() => openWhatsApp(plan.whatsappMessage)}
                        >
                          <MessageCircle className="w-5 h-5" />
                          Book Now on WhatsApp
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="buy-section" style={{ marginTop: 24 }}>
                <h2>Buy BiPAP Machines</h2>
                <p className="sub">Own a BiPAP Machine for Advanced Respiratory Care</p>
                <div className="buy-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  {bipapBuyProducts.map((product) => (
                    <div key={product.id} className="buy-card">
                      <div className="card-image">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{product.name}</h3>
                        <p className="desc">{product.description}</p>
                        <ul className="features">
                          {product.features.map((f, i) => (
                            <li key={i}>
                              <CheckCircle className="w-3 h-3 check" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="price-section">
                          <div>
                            <div className="price">{product.price}</div>
                            <div className="emi">EMI: {product.emi}</div>
                          </div>
                        </div>
                        <div className="btn-group">
                          <button 
                            className="btn-buy"
                            onClick={() => alert(`Product: ${product.name}\nPrice: ${product.price}\n\nOur team will contact you shortly.`)}
                          >
                            <ShoppingBag className="w-4 h-4" /> Buy Now
                          </button>
                          <button 
                            className="btn-whatsapp-sm"
                            onClick={() => openWhatsApp(product.whatsappMessage)}
                          >
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Footer */}
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