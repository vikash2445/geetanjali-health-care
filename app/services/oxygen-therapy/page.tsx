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
  Play, Headphones, Mail, Droplet,
  Sparkles, Leaf, HeartPulse, User, 
  MapPin, FileText, CreditCard, Info,
  AlertCircle, Send, ShoppingBag, 
  Moon, Cloud, Zap
} from 'lucide-react';

export default function OxygenTherapyPage() {
  const { cartCount } = useCart();
  const [activeTab, setActiveTab] = useState<'rent' | 'buy'>('rent');
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    patientName: '',
    patientAge: '',
    prescription: '',
    additionalNotes: '',
    paymentMethod: 'online',
    acceptTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [cpapBipapTab, setCpapBipapTab] = useState<'cpap' | 'bipap'>('cpap');

  // Oxygen Rental Plans
  const rentalPlans = [
    {
      id: 1,
      name: '5 LPM OXYGEN CONCENTRATOR',
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
      image: '/images/services/oxygen-therapy.jpg',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book 5 LPM Oxygen Concentrator on Rental.\n\nDetails:\n• Type: Rental\n• Machine: 5 LPM Oxygen Concentrator\n• Duration: [Please specify]'
    },
    {
      id: 2,
      name: '10 LPM OXYGEN CONCENTRATOR',
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
      image: '/images/services/oxygen-therapy.jpg',
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book 10 LPM Oxygen Concentrator on Rental.\n\nDetails:\n• Type: Rental\n• Machine: 10 LPM Oxygen Concentrator\n• Duration: [Please specify]'
    }
  ];

  // 🆕 CPAP Rental Plans with Images
  const cpapRentalPlans = [
    {
      id: 1,
      name: 'CPAP MACHINE (Auto CPAP)',
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
      image: '/images/services/cpap-auto.jpg',  // 👈 CPAP Image 1
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book CPAP Machine on Rental.\n\nDetails:\n• Type: Rental\n• Machine: CPAP Auto\n• Duration: [Please specify]'
    },
    {
      id: 2,
      name: 'CPAP MACHINE (Fixed Pressure)',
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
      image: '/images/services/cpap-fixed.jpg',  // 👈 CPAP Image 2
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book Fixed CPAP Machine on Rental.\n\nDetails:\n• Type: Rental\n• Machine: Fixed CPAP\n• Duration: [Please specify]'
    }
  ];

  // 🆕 BiPAP Rental Plans with Images
  const bipapRentalPlans = [
    {
      id: 1,
      name: 'BiPAP MACHINE (ST Mode)',
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
      image: '/images/services/bipap-st.jpg',  // 👈 BiPAP Image 1
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book BiPAP ST Machine on Rental.\n\nDetails:\n• Type: Rental\n• Machine: BiPAP ST\n• Duration: [Please specify]'
    },
    {
      id: 2,
      name: 'BiPAP MACHINE (AVAPS)',
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
      image: '/images/services/bipap-avaps.jpg',  // 👈 BiPAP Image 2
      whatsappMessage: 'Hi Geetanjali Health Care,\n\nI want to book BiPAP AVAPS Machine on Rental.\n\nDetails:\n• Type: Rental\n• Machine: BiPAP AVAPS\n• Duration: [Please specify]'
    }
  ];

  // Oxygen Buy Products
  const buyProducts = [
    {
      id: 1,
      name: '5 LPM OXYGEN CONCENTRATOR',
      description: 'Low power consumption, High purity oxygen (93% ± 3%)',
      features: [
        'Low noise operation',
        'Easy to use & durable',
        '1 Year Warranty',
        'Low maintenance'
      ],
      price: '₹48,000',
      emi: '₹2,199 / month',
      image: '/images/services/oxygen-therapy.jpg'
    },
    {
      id: 2,
      name: '10 LPM OXYGEN CONCENTRATOR',
      description: 'High oxygen output - Suitable for ICU & home use',
      features: [
        'Continuous oxygen support',
        'Heavy duty compressor',
        '1 Year Warranty',
        'High reliability'
      ],
      price: '₹75,000',
      emi: '₹3,500 / month',
      image: '/images/services/oxygen-therapy.jpg'
    },
    {
      id: 3,
      name: 'PORTABLE OXYGEN CONCENTRATOR',
      description: 'Lightweight & Portable - Rechargeable Battery',
      features: [
        'Travel Friendly',
        'Ideal for active patients',
        '1 Year Warranty',
        'Lightweight design'
      ],
      price: '₹1,20,000',
      emi: '₹5,500 / month',
      image: '/images/services/oxygen-therapy.jpg'
    }
  ];

  // 🆕 CPAP Buy Products with Images
  const cpapBuyProducts = [
    {
      id: 1,
      name: 'CPAP MACHINE (Auto)',
      description: 'Smart Auto CPAP with built-in humidifier and bluetooth connectivity',
      features: [
        'Auto pressure adjustment',
        'Integrated humidifier',
        '2 Year Warranty',
        'App connectivity'
      ],
      price: '₹45,000',
      emi: '₹2,050 / month',
      image: '/images/services/auto_cpap.png'  // 👈 CPAP Buy Image 1
    },
    {
      id: 2,
      name: 'CPAP MACHINE (Fixed)',
      description: 'Reliable fixed pressure CPAP with humidifier',
      features: [
        'Fixed pressure delivery',
        'Built-in humidifier',
        '2 Year Warranty',
        'Quiet operation'
      ],
      price: '₹35,000',
      emi: '₹1,600 / month',
      image: '/images/services/auto_cpap.png'  // 👈 CPAP Buy Image 2
    }
  ];

  // 🆕 BiPAP Buy Products with Images
  const bipapBuyProducts = [
    {
      id: 1,
      name: 'BiPAP ST MACHINE',
      description: 'BiPAP ST for COPD, Neuromuscular disorders and respiratory insufficiency',
      features: [
        'ST Mode support',
        'Integrated humidifier',
        '2 Year Warranty',
        'Advanced monitoring'
      ],
      price: '₹85,000',
      emi: '₹3,900 / month',
      image: '/images/services/auto_bipap.jpg'  // 👈 BiPAP Buy Image 1
    },
    {
      id: 2,
      name: 'BiPAP AVAPS MACHINE',
      description: 'Advanced BiPAP with AVAPS for complex respiratory conditions',
      features: [
        'AVAPS technology',
        'Full respiratory support',
        '2 Year Warranty',
        'Hospital grade'
      ],
      price: '₹1,25,000',
      emi: '₹5,700 / month',
      image: '/images/services/auto_cpap.png'  // 👈 BiPAP Buy Image 2
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

  const handleBuyClick = (product: any) => {
    setSelectedProduct(product);
    setShowBuyModal(true);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      pincode: '',
      patientName: '',
      patientAge: '',
      prescription: '',
      additionalNotes: '',
      paymentMethod: 'online',
      acceptTerms: false
    });
    setSubmitSuccess(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setShowBuyModal(false);
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const openWhatsApp = (message: string) => {
    const phone = '919876543210';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

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

        .oxy-page {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px 60px;
        }

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
          transition: color 0.2s;
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

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
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

        .hero-content {
          position: relative;
          z-index: 1;
        }
        .hero-content .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #e8f5ee;
          color: #0a6b4a;
          padding: 4px 14px;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }
        .hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
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
          margin-bottom: 24px;
          max-width: 480px;
        }

        .hero-toggle {
          display: flex;
          gap: 0;
          background: #f1f5f9;
          border-radius: 12px;
          padding: 4px;
          max-width: 320px;
          margin-bottom: 20px;
        }
        .hero-toggle .toggle-btn {
          flex: 1;
          padding: 12px 24px;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .hero-toggle .toggle-btn.active {
          background: #0a6b4a;
          color: #fff;
          box-shadow: 0 4px 12px rgba(10, 107, 74, 0.2);
        }
        .hero-toggle .toggle-btn:hover:not(.active) {
          background: #e8edf2;
        }

        .hero-feature-badges {
          display: flex;
          gap: 16px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .hero-feature-badges .feature-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: #0a6b4a;
          font-weight: 600;
        }
        .hero-feature-badges .feature-badge .icon {
          width: 32px;
          height: 32px;
          background: #e8f5ee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-visual {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-visual .main-image {
          width: 100%;
          max-width: 420px;
          border-radius: 16px;
          position: relative;
          z-index: 2;
        }
        .hero-visual .main-image img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 16px;
        }

        .hero-visual .floating-badge {
          position: absolute;
          bottom: 20px;
          right: -10px;
          background: #ffffff;
          border-radius: 12px;
          padding: 12px 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 3;
          border: 1px solid #e8edf2;
        }
        .hero-visual .floating-badge .icon {
          width: 36px;
          height: 36px;
          background: #e8f5ee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a6b4a;
        }
        .hero-visual .floating-badge .text {
          font-size: 0.75rem;
          font-weight: 600;
          color: #0d1b2a;
        }
        .hero-visual .floating-badge .text span {
          display: block;
          font-size: 0.65rem;
          font-weight: 400;
          color: #6b7280;
        }

        /* Rental Section */
        .rental-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .rental-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 8px;
        }
        .rental-section .sub {
          color: #6b7280;
          margin-bottom: 24px;
          font-size: 0.95rem;
        }
        .rental-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .rental-card {
          background: #f8fafc;
          border: 1px solid #e8edf2;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .rental-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
          border-color: #0a6b4a;
        }
        .rental-card .card-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .rental-card .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .rental-card:hover .card-image img {
          transform: scale(1.03);
        }
        .rental-card .card-body {
          padding: 24px;
        }
        .rental-card .card-body h3 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0d1b2a;
          margin-bottom: 4px;
        }
        .rental-card .card-body .desc {
          font-size: 0.82rem;
          color: #4a5568;
          margin-bottom: 12px;
        }
        .rental-card .card-body .features {
          list-style: none;
          margin-bottom: 16px;
        }
        .rental-card .card-body .features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: #4a5568;
          padding: 4px 0;
        }
        .rental-card .card-body .features li .check {
          color: #0a6b4a;
          flex-shrink: 0;
        }
        .rental-prices {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          padding-top: 14px;
          border-top: 1px solid #e8edf2;
          margin-bottom: 16px;
        }
        .rental-prices .price-item {
          text-align: center;
        }
        .rental-prices .price-item .label {
          font-size: 0.6rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .rental-prices .price-item .value {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0d1b2a;
        }
        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25D366;
          color: #fff;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        .btn-whatsapp:hover {
          background: #1da851;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.3);
        }

        /* Buy Section */
        .buy-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 40px;
          margin: 32px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .buy-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 8px;
        }
        .buy-section .sub {
          color: #6b7280;
          margin-bottom: 24px;
          font-size: 0.95rem;
        }
        .buy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .buy-card {
          background: #f8fafc;
          border: 1px solid #e8edf2;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .buy-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
          border-color: #0a6b4a;
        }
        .buy-card .card-image {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .buy-card .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .buy-card:hover .card-image img {
          transform: scale(1.03);
        }
        .buy-card .card-body {
          padding: 20px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .buy-card .card-body h3 {
          font-size: 0.9rem;
          font-weight: 800;
          color: #0d1b2a;
          margin-bottom: 4px;
        }
        .buy-card .card-body .desc {
          font-size: 0.78rem;
          color: #4a5568;
          margin-bottom: 12px;
        }
        .buy-card .card-body .features {
          list-style: none;
          margin-bottom: 16px;
          flex: 1;
        }
        .buy-card .card-body .features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          color: #4a5568;
          padding: 3px 0;
        }
        .buy-card .card-body .features li .check {
          color: #0a6b4a;
          flex-shrink: 0;
        }
        .buy-card .card-body .price-section {
          border-top: 1px solid #e8edf2;
          padding-top: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .buy-card .card-body .price-section .price {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0a6b4a;
        }
        .buy-card .card-body .price-section .emi {
          font-size: 0.7rem;
          color: #6b7280;
        }
        .btn-buy {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0a6b4a;
          color: #fff;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.8rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-buy:hover {
          background: #085a3e;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(10, 107, 74, 0.25);
        }

        /* Section Divider */
        .section-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 48px 0 32px;
          position: relative;
        }
        .section-divider::before {
          content: '';
          flex: 1;
          height: 2px;
          background: linear-gradient(to right, transparent, #e8edf2);
        }
        .section-divider::after {
          content: '';
          flex: 1;
          height: 2px;
          background: linear-gradient(to left, transparent, #e8edf2);
        }
        .section-divider .divider-content {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 20px;
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0d1b2a;
          white-space: nowrap;
        }
        .section-divider .divider-content .icon {
          color: #0a6b4a;
        }

        /* CPAP/BiPAP Sub Toggle */
        .sub-toggle {
          display: flex;
          gap: 0;
          background: #f1f5f9;
          border-radius: 12px;
          padding: 4px;
          max-width: 280px;
          margin-bottom: 24px;
        }
        .sub-toggle .toggle-btn {
          flex: 1;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .sub-toggle .toggle-btn.active {
          background: #0a6b4a;
          color: #fff;
          box-shadow: 0 4px 12px rgba(10, 107, 74, 0.2);
        }
        .sub-toggle .toggle-btn:hover:not(.active) {
          background: #e8edf2;
        }

        /* Modal */
        .modal-overlay {
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
        .modal-content {
          background: #ffffff;
          border-radius: 28px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px 44px;
          position: relative;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.2);
          animation: slideUp 0.3s ease;
        }
        .modal-content .close-btn {
          position: absolute;
          top: 16px;
          right: 20px;
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
        .modal-content .close-btn:hover {
          background: #e2e8f0;
          transform: rotate(90deg);
        }
        .modal-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #0d1b2a;
          margin-bottom: 4px;
        }
        .modal-content .modal-sub {
          color: #6b7280;
          font-size: 0.9rem;
          margin-bottom: 20px;
        }
        .modal-content .product-summary {
          background: #f8fafc;
          border-radius: 12px;
          padding: 16px 20px;
          margin-bottom: 20px;
          border: 1px solid #e8edf2;
        }
        .modal-content .product-summary .label {
          font-size: 0.7rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .modal-content .product-summary .name {
          font-weight: 700;
          color: #0d1b2a;
          font-size: 1rem;
        }
        .modal-content .product-summary .price {
          color: #0a6b4a;
          font-weight: 800;
          font-size: 1.1rem;
        }

        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #0d1b2a;
          margin-bottom: 4px;
        }
        .form-group label .required {
          color: #ef4444;
          margin-left: 2px;
        }
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px 14px;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.85rem;
          transition: border-color 0.3s ease;
          font-family: 'Inter', sans-serif;
          background: #fafbfc;
        }
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #0a6b4a;
          box-shadow: 0 0 0 3px rgba(10, 107, 74, 0.1);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 60px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group.checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 4px;
        }
        .form-group.checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          margin-top: 2px;
          accent-color: #0a6b4a;
          cursor: pointer;
        }
        .form-group.checkbox-group label {
          font-size: 0.8rem;
          font-weight: 400;
          color: #4a5568;
          cursor: pointer;
        }
        .form-group.checkbox-group label a {
          color: #0a6b4a;
          text-decoration: none;
          font-weight: 600;
        }

        .btn-submit {
          width: 100%;
          padding: 14px;
          background: #0a6b4a;
          color: #fff;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .btn-submit:hover {
          background: #085a3e;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(10, 107, 74, 0.25);
        }
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .success-message {
          text-align: center;
          padding: 30px 20px;
        }
        .success-message .icon {
          width: 64px;
          height: 64px;
          background: #e8f5ee;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: #0a6b4a;
        }
        .success-message h3 {
          font-size: 1.3rem;
          color: #0d1b2a;
          margin-bottom: 4px;
        }
        .success-message p {
          color: #6b7280;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

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
          .oxy-page { padding: 0 20px 40px; }
          .hero-section { grid-template-columns: 1fr; text-align: center; padding: 32px 24px; }
          .hero-content .description { margin: 0 auto 24px; }
          .hero-toggle { margin: 0 auto 20px; }
          .hero-feature-badges { justify-content: center; }
          .hero-visual .floating-badge { right: 10px; bottom: 10px; }
          .rental-grid { grid-template-columns: 1fr; }
          .buy-grid { grid-template-columns: 1fr 1fr; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .modal-content { padding: 30px 24px; }
          .form-row { grid-template-columns: 1fr; }
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
          .modal-content { padding: 24px 16px; }
          .sub-toggle { flex-direction: column; max-width: 100%; }
          .section-divider .divider-content { font-size: 1rem; }
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
              <Image
                src="/images/services/oxygen-therapy.jpg"
                alt="Oxygen Concentrator"
                width={420}
                height={350}
                className="object-cover"
                priority
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

        {/* ===== OXYGEN RENTAL SECTION ===== */}
        {activeTab === 'rent' && (
          <div className="rental-section">
            <h2>Oxygen Concentrator Rental Plans</h2>
            <p className="sub">Short Term & Long Term Rental Options with Home Delivery & Installation</p>
            <div className="rental-grid">
              {rentalPlans.map((plan) => (
                <div key={plan.id} className="rental-card">
                  <div className="card-image">
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      width={400}
                      height={200}
                      className="object-cover"
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

        {/* ===== OXYGEN BUY SECTION ===== */}
        {activeTab === 'buy' && (
          <div className="buy-section">
            <h2>Buy Oxygen Concentrator</h2>
            <p className="sub">Own a Reliable Oxygen Concentrator for Long Term Use</p>
            <div className="buy-grid">
              {buyProducts.map((product) => (
                <div key={product.id} className="buy-card">
                  <div className="card-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={180}
                      className="object-cover"
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
                      <button 
                        className="btn-buy"
                        onClick={() => handleBuyClick(product)}
                      >
                        Buy Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== 🆕 CPAP & BiPAP SECTION ===== */}
        <div className="section-divider">
          <div className="divider-content">
            <Moon className="w-6 h-6 icon" />
            CPAP & BiPAP Therapy
            <Cloud className="w-6 h-6 icon" />
          </div>
        </div>

        {/* CPAP/BiPAP Sub Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
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

        {/* CPAP Content */}
        {cpapBipapTab === 'cpap' && (
          <>
            {activeTab === 'rent' ? (
              <div className="rental-section" style={{ marginTop: 0 }}>
                <h2>CPAP Rental Plans</h2>
                <p className="sub">Rent CPAP Machines for Sleep Apnea Treatment</p>
                <div className="rental-grid">
                  {cpapRentalPlans.map((plan) => (
                    <div key={plan.id} className="rental-card">
                      <div className="card-image">
                        <Image
                          src={plan.image}
                          alt={plan.name}
                          width={400}
                          height={200}
                          className="object-cover"
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
              <div className="buy-section" style={{ marginTop: 0 }}>
                <h2>Buy CPAP Machines</h2>
                <p className="sub">Own a CPAP Machine for Long Term Therapy</p>
                <div className="buy-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  {cpapBuyProducts.map((product) => (
                    <div key={product.id} className="buy-card">
                      <div className="card-image">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={180}
                          className="object-cover"
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
                          <button 
                            className="btn-buy"
                            onClick={() => handleBuyClick({ ...product, image: product.image })}
                          >
                            Buy Now <ArrowRight className="w-4 h-4" />
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

        {/* BiPAP Content */}
        {cpapBipapTab === 'bipap' && (
          <>
            {activeTab === 'rent' ? (
              <div className="rental-section" style={{ marginTop: 0 }}>
                <h2>BiPAP Rental Plans</h2>
                <p className="sub">Rent BiPAP Machines for Advanced Respiratory Support</p>
                <div className="rental-grid">
                  {bipapRentalPlans.map((plan) => (
                    <div key={plan.id} className="rental-card">
                      <div className="card-image">
                        <Image
                          src={plan.image}
                          alt={plan.name}
                          width={400}
                          height={200}
                          className="object-cover"
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
              <div className="buy-section" style={{ marginTop: 0 }}>
                <h2>Buy BiPAP Machines</h2>
                <p className="sub">Own a BiPAP Machine for Advanced Respiratory Care</p>
                <div className="buy-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  {bipapBuyProducts.map((product) => (
                    <div key={product.id} className="buy-card">
                      <div className="card-image">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={180}
                          className="object-cover"
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
                          <button 
                            className="btn-buy"
                            onClick={() => handleBuyClick({ ...product, image: product.image })}
                          >
                            Buy Now <ArrowRight className="w-4 h-4" />
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

        {/* ===== BUY MODAL ===== */}
        {showBuyModal && selectedProduct && (
          <div className="modal-overlay" onClick={() => setShowBuyModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowBuyModal(false)}>
                <X className="w-5 h-5" />
              </button>

              {submitSuccess ? (
                <div className="success-message">
                  <div className="icon">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3>Order Placed Successfully!</h3>
                  <p>Our team will contact you shortly to confirm your order.</p>
                  <button 
                    className="btn-submit" 
                    style={{ marginTop: 20, maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }}
                    onClick={() => setShowBuyModal(false)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2>Purchase {selectedProduct.name}</h2>
                  <p className="modal-sub">Fill in your details to proceed with the purchase</p>

                  <div className="product-summary">
                    <div className="label">Product</div>
                    <div className="name">{selectedProduct.name}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                      <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>{selectedProduct.description}</span>
                      <span className="price">{selectedProduct.price}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name <span className="required">*</span></label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number <span className="required">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                      />
                    </div>

                    <div className="form-group">
                      <label>Delivery Address <span className="required">*</span></label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter complete delivery address"
                        required
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>City <span className="required">*</span></label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Enter city"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Pincode <span className="required">*</span></label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="Enter pincode"
                          required
                          pattern="[0-9]{5,6}"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Patient Name</label>
                        <input
                          type="text"
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleInputChange}
                          placeholder="Patient's full name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Patient Age</label>
                        <input
                          type="number"
                          name="patientAge"
                          value={formData.patientAge}
                          onChange={handleInputChange}
                          placeholder="Patient's age"
                          min="0"
                          max="120"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Prescription (if any)</label>
                      <textarea
                        name="prescription"
                        value={formData.prescription}
                        onChange={handleInputChange}
                        placeholder="Upload prescription details or paste text here"
                      />
                    </div>

                    <div className="form-group">
                      <label>Additional Notes</label>
                      <textarea
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        placeholder="Any special requirements or instructions"
                      />
                    </div>

                    <div className="form-group">
                      <label>Payment Method <span className="required">*</span></label>
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="online">Online Payment (UPI / Card / Net Banking)</option>
                        <option value="cod">Cash on Delivery</option>
                        <option value="emi">EMI / Financing</option>
                        <option value="insurance">Health Insurance</option>
                      </select>
                    </div>

                    <div className="form-group checkbox-group">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        id="acceptTerms"
                        required
                      />
                      <label htmlFor="acceptTerms">
                        I agree to the <Link href="/terms">Terms &amp; Conditions</Link> and confirm that the information provided is accurate.
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-submit"
                      disabled={isSubmitting || !formData.acceptTerms}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <ShoppingBag className="w-5 h-5" />
                          Place Order
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

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