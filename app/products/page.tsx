'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import WhatsAppOrderButton from '@/components/WhatsAppOrderButton';
import { 
  ArrowRight, CheckCircle, Search, Filter, 
  Home, Phone, Mail, Globe, ChevronRight,
  Microscope, Wind, Pipette, Droplet,
  Filter as FilterIcon, Heart, Monitor, 
  SprayCan, Wrench, List, Sliders,
  ShoppingBag, Star, Clock, Truck, Shield,
  User, MapPin, FileText, CreditCard, 
  Moon, Cloud, Zap, Activity, HeartPulse,
  Bed, Brain, Stethoscope, Pill, Thermometer,
  Headphones, Send, X, LayoutGrid
} from 'lucide-react';

// Define product type
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  subCategory: string;
  price: number;
  image: string;
  tag: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
}

export default function ProductsPage() {
  const { cartCount } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Product Data with Images
  const products: Product[] = [
    // CPAP Machines
    {
      id: 1,
      name: 'Resmed Airsense 11 Autocpap',
      description: 'Airflow CPAP Machine with advanced features',
      category: 'CPAP Machines',
      subCategory: 'CPAP',
      price: 12000,
      image: '/images/services/resmed_airsense_11_autocpap.png',
      tag: 'CPAP',
      rating: 4.5,
      reviews: 28,
      inStock: true
    },
    {
      id: 2,
      name: 'Philips DreamStation 2 Auto',
      description: 'Auto CPAP with built-in humidifier',
      category: 'CPAP Machines',
      subCategory: 'CPAP',
      price: 6000,
      image: '/images/services/Philips_dream_station_autoset.png',
      tag: 'CPAP',
      rating: 4.8,
      reviews: 42,
      inStock: true
    },
    {
      id: 3,
      name: 'BMC G2 CPAP',
      description: 'Compact and reliable CPAP machine',
      category: 'CPAP Machines',
      subCategory: 'CPAP',
      price: 8000,
      image: '/images/services/bmc_g2_cpap.png',
      tag: 'CPAP',
      rating: 4.2,
      reviews: 19,
      inStock: true
    },
    {
      id: 4,
      name: 'ResMed AirSense 10 AutoSet',
      description: 'Premium Auto CPAP with ClimateLine heated tube',
      category: 'CPAP Machines',
      subCategory: 'CPAP',
      price: 15000,
      image: '/images/services/resmed_airsense_10_autocpap.png',
      tag: 'CPAP',
      rating: 4.9,
      reviews: 56,
      inStock: true
    },

    // BiPAP Machines
    {
      id: 5,
      name: 'Redmed aircurve 10 vauto',
      description: 'Advanced BiPAP Machine for respiratory support',
      category: 'BiPAP Machines',
      subCategory: 'BiPAP',
      price: 5000,
      image: '/images/services/resmed_aircurve_10_vauto.png',
      tag: 'BiPAP',
      rating: 4.4,
      reviews: 23,
      inStock: true
    },
    {
      id: 6,
      name: 'philips dreamstation bipap pro',
      description: 'BiPAP Machine with ST mode',
      category: 'BiPAP Machines',
      subCategory: 'BiPAP',
      price: 5000,
      image: '/images/services/philips_dreamstation_bipap_pro.png',
      tag: 'BiPAP',
      rating: 4.3,
      reviews: 17,
      inStock: true
    },
    {
      id: 7,
      name: 'BMC G3 Bipap',
      description: 'Advanced BiPAP with AVAPS technology',
      category: 'BiPAP Machines',
      subCategory: 'BiPAP',
      price: 35000,
      image: '/images/services/bmc_g3_bipap.png',
      tag: 'BiPAP',
      rating: 4.7,
      reviews: 31,
      inStock: true
    },

    // Masks
    {
      id: 8,
      name: 'Yuwell YH 830 Bipap',
      description: 'Full face mask with advanced cushion',
      category: 'CPAP / BiPAP Masks',
      subCategory: 'Masks',
      price: 3000,
      image: '/images/services/yuwell_YH_830_bipap.jpg',
      tag: 'Mask',
      rating: 4.6,
      reviews: 38,
      inStock: true
    },
    {
      id: 9,
      name: 'Philips DreamWear Nasal Mask',
      description: 'Under-the-nose nasal mask',
      category: 'CPAP / BiPAP Masks',
      subCategory: 'Masks',
      price: 2500,
      image: '/images/services/philips_dreamwear_nasal.png',
      tag: 'Mask',
      rating: 4.4,
      reviews: 27,
      inStock: true
    },
    {
      id: 10,
      name: 'Resmed airfit f20 full face mask',
      description: 'Full face mask with roll-fit cushion',
      category: 'CPAP / BiPAP Masks',
      subCategory: 'Masks',
      price: 2800,
      image: '/images/services/resmed_airfit_f20_mask.png',
      tag: 'Mask',
      rating: 4.3,
      reviews: 22,
      inStock: true
    },

    // Accessories
    {
      id: 11,
      name: 'CPAP Tubing (Standard)',
      description: '6 Feet standard CPAP tubing',
      category: 'Accessories & Spare Parts',
      subCategory: 'Tubing',
      price: 800,
      image: '/images/services/cpap_tubing.png',
      tag: 'Accessory',
      rating: 4.1,
      reviews: 45,
      inStock: true
    },
    {
      id: 12,
      name: 'Humidifier Chamber',
      description: 'For CPAP / BiPAP machines',
      category: 'Accessories & Spare Parts',
      subCategory: 'Humidifier',
      price: 1200,
      image: '/images/services/humidifier_chamber.png',
      tag: 'Accessory',
      rating: 4.2,
      reviews: 33,
      inStock: true
    },
    {
      id: 13,
      name: 'Bacterial Viral Filter',
      description: 'High efficiency bacterial filter',
      category: 'Accessories & Spare Parts',
      subCategory: 'Filters',
      price: 350,
      image: '/images/products/bacterial-filter.png',
      tag: 'Filter',
      rating: 4.0,
      reviews: 29,
      inStock: true
    },
    {
      id: 14,
      name: 'Headgear Strap Universal',
      description: 'Universal fit headgear strap',
      category: 'Accessories & Spare Parts',
      subCategory: 'Headgear',
      price: 600,
      image: '/images/products/headgear-strap.png',
      tag: 'Accessory',
      rating: 4.1,
      reviews: 26,
      inStock: true
    },

    // Oxygen Concentrators
    {
      id: 15,
      name: 'Oxygen Concentrator 5L',
      description: 'High purity oxygen concentrator',
      category: 'Oxygen Concentrators',
      subCategory: 'Oxygen',
      price: 45000,
      image: '/images/services/oxygen_concentrator_5ltr.png',
      tag: 'Oxygen',
      rating: 4.5,
      reviews: 41,
      inStock: true
    },
    {
      id: 16,
      name: 'Oxygen Concentrator 10L',
      description: 'High flow oxygen concentrator',
      category: 'Oxygen Concentrators',
      subCategory: 'Oxygen',
      price: 7500,
      image: '/images/products/oxygen-concentrator-10l.png',
      tag: 'Oxygen',
      rating: 4.6,
      reviews: 34,
      inStock: true
    },

    // Nebulizers
    {
      id: 17,
      name: 'Nebulizer Machine Compressor',
      description: 'Compressor nebulizer with accessories',
      category: 'Nebulizers',
      subCategory: 'Nebulizer',
      price: 1800,
      image: '/images/products/nebulizer-compressor.png',
      tag: 'Nebulizer',
      rating: 4.3,
      reviews: 52,
      inStock: true
    },
    {
      id: 18,
      name: 'Ultrasonic Nebulizer',
      description: 'Portable ultrasonic nebulizer',
      category: 'Nebulizers',
      subCategory: 'Nebulizer',
      price: 2500,
      image: '/images/products/ultrasonic-nebulizer.png',
      tag: 'Nebulizer',
      rating: 4.4,
      reviews: 38,
      inStock: true
    },

    // Patient Monitors
    {
      id: 19,
      name: 'Patient Monitor 5 Parameter',
      description: '5 Parameter patient monitor',
      category: 'Patient Monitors',
      subCategory: 'Monitor',
      price: 32000,
      image: '/images/products/patient-monitor.png',
      tag: 'Monitor',
      rating: 4.7,
      reviews: 19,
      inStock: true
    },
    {
      id: 20,
      name: 'Baby Oximeter Handheld',
      description: 'Handheld baby oximeter',
      category: 'Patient Monitors',
      subCategory: 'Monitor',
      price: 15000,
      image: '/images/products/baby-oximeter.png',
      tag: 'Monitor',
      rating: 4.5,
      reviews: 23,
      inStock: true
    },

    // Pulse Oximeters
    {
      id: 21,
      name: 'Pulse Oximeter Fingertip',
      description: 'Fingertip pulse oximeter with display',
      category: 'Pulse Oximeters',
      subCategory: 'Oximeter',
      price: 1500,
      image: '/images/services/pulse_oximeter.png',
      tag: 'Oximeter',
      rating: 4.2,
      reviews: 67,
      inStock: true
    },
    {
      id: 22,
      name: 'Wrist Pulse Oximeter',
      description: 'Wearable wrist pulse oximeter',
      category: 'Pulse Oximeters',
      subCategory: 'Oximeter',
      price: 2200,
      image: '/images/services/Wrist-oximeter.png',
      tag: 'Oximeter',
      rating: 4.0,
      reviews: 31,
      inStock: true
    },

    // Ventilators
    {
      id: 23,
      name: 'ICU Ventilator',
      description: 'Advanced ICU ventilator with monitoring',
      category: 'Ventilators',
      subCategory: 'Ventilator',
      price: 85000,
      image: '/images/products/icu-ventilator.png',
      tag: 'Ventilator',
      rating: 4.8,
      reviews: 14,
      inStock: true
    },
    {
      id: 24,
      name: 'Portable Ventilator',
      description: 'Portable ventilator for transport',
      category: 'Ventilators',
      subCategory: 'Ventilator',
      price: 45000,
      image: '/images/products/portable-ventilator.png',
      tag: 'Ventilator',
      rating: 4.4,
      reviews: 18,
      inStock: true
    },

    // Thermometers
    {
      id: 25,
      name: 'Ear Thermometer Handheld',
      description: 'Handheld ear thermometer',
      category: 'Accessories & Spare Parts',
      subCategory: 'Thermometer',
      price: 25000,
      image: '/images/products/ear-thermometer.png',
      tag: 'Thermometer',
      rating: 4.3,
      reviews: 42,
      inStock: true
    },

    // filters 
    {
      id: 26,
      name: 'Resmed AirSense 11 AutoSet CPAP Filter',
      description: 'CPAP filter for Resmed AirSense 11 AutoSet',
      category: 'Filters',
      subCategory: 'Filter',
      price: 350,
      image: '/images/services/resmed_filter1.png',
      tag: 'Filter',
      rating: 4.3,
      reviews: 42,
      inStock: true
    },
    {
      id: 27,
      name: 'dreamstation cpap filter',
      description: 'CPAP filter for Philips DreamStation',
      category: 'Filters',
      subCategory: 'Filter',
      price: 400,
      image: '/images/services/dreamstation_filter1.png',
      tag: 'Filter',
      rating: 4.3,
      reviews: 42,
      inStock: true
    },
    {
      id: 28,
      name: 'philips bi-pap filter',
      description: 'CPAP filter for Philips BiPAP machines',
      category: 'Filters',
      subCategory: 'Filter',
      price: 300,
      image: '/images/services/philips_filter1.png',
      tag: 'Filter',
      rating: 4.3,
      reviews: 42,
      inStock: true
    }
  ];

  // Compact categories - only 6 main ones
  const categories = [
    { name: 'CPAP Machines', icon: <Microscope className="w-4 h-4" /> },
    { name: 'BiPAP Machines', icon: <Wind className="w-4 h-4" /> },
    { name: 'Oxygen Concentrators', icon: <Droplet className="w-4 h-4" /> },
    { name: 'Patient Monitors', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Nebulizers', icon: <SprayCan className="w-4 h-4" /> },
    { name: 'Accessories', icon: <Wrench className="w-4 h-4" /> },
  ];

  const priceRanges = [
    { label: 'Under ₹5,000', value: 'under-5000' },
    { label: '₹5,001 – ₹10,000', value: '5001-10000' },
    { label: '₹10,001 – ₹50,000', value: '10001-50000' },
    { label: 'Above ₹50,000', value: 'above-50000' }
  ];

  // Filter products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    
    // Price range filter
    if (priceRange !== 'all') {
      const price = product.price;
      switch (priceRange) {
        case 'under-5000':
          if (price > 5000) return false;
          break;
        case '5001-10000':
          if (price < 5001 || price > 10000) return false;
          break;
        case '10001-50000':
          if (price < 10001 || price > 50000) return false;
          break;
        case 'above-50000':
          if (price <= 50000) return false;
          break;
        default:
          break;
      }
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return product.name.toLowerCase().includes(query) || 
             product.description.toLowerCase().includes(query) ||
             product.category.toLowerCase().includes(query);
    }
    
    return true;
  });

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
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
          background: #f5f8fc;
          color: #0b1a2a;
        }

        .products-page {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 20px 40px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 0 12px;
          font-size: 0.78rem;
          color: #6b7a8a;
        }
        .breadcrumb a {
          color: #0a6b4a;
          text-decoration: none;
          font-weight: 500;
        }
        .breadcrumb .separator {
          color: #cbd5e1;
        }
        .breadcrumb .current {
          color: #0b1a2a;
          font-weight: 600;
        }

        .page-title {
          margin-bottom: 16px;
        }
        .page-title h1 {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0b1a2a;
          letter-spacing: -0.5px;
        }
        .page-title h1 span {
          color: #0a6b4a;
        }
        .page-title .sub {
          font-size: 0.85rem;
          color: #4a5b6e;
          margin-top: 4px;
          max-width: 640px;
        }

        /* ===== COMPACT CATEGORY PILLS ===== */
        .category-pills {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
          margin-bottom: 16px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .category-pills::-webkit-scrollbar {
          display: none;
        }
        .category-pill {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: #ffffff;
          border: 1.5px solid #eaf0f5;
          border-radius: 30px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #4a5b6e;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .category-pill:hover {
          border-color: #0a6b4a;
          color: #0a6b4a;
        }
        .category-pill.active {
          background: #0a6b4a;
          border-color: #0a6b4a;
          color: #ffffff;
        }
        .category-pill .count {
          background: rgba(0,0,0,0.08);
          padding: 1px 7px;
          border-radius: 20px;
          font-size: 0.68rem;
          font-weight: 700;
        }
        .category-pill.active .count {
          background: rgba(255,255,255,0.25);
        }

        /* ===== SEARCH & FILTER BAR ===== */
        .search-filter-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          align-items: center;
        }
        .search-input-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1.5px solid #eaf0f5;
          border-radius: 12px;
          padding: 0 14px;
          height: 44px;
          transition: border-color 0.2s;
        }
        .search-input-wrap:focus-within {
          border-color: #0a6b4a;
        }
        .search-input-wrap input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.85rem;
          color: #0b1a2a;
          padding: 0 8px;
        }
        .search-input-wrap input::placeholder {
          color: #94a3b8;
        }
        .search-input-wrap .icon {
          color: #94a3b8;
        }
        .filter-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 16px;
          height: 44px;
          background: #ffffff;
          border: 1.5px solid #eaf0f5;
          border-radius: 12px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #4a5b6e;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .filter-btn:hover {
          border-color: #0a6b4a;
          color: #0a6b4a;
        }
        .filter-btn.active {
          background: #0a6b4a;
          border-color: #0a6b4a;
          color: #ffffff;
        }

        /* ===== FILTER PANEL ===== */
        .filter-panel {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #eaf0f5;
          padding: 16px;
          margin-bottom: 20px;
          animation: slideDown 0.2s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .filter-panel h4 {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #4a5b6e;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .price-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .price-pill {
          padding: 6px 14px;
          background: #f2f6fa;
          border: 1px solid #eaf0f5;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4a5b6e;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .price-pill:hover {
          border-color: #0a6b4a;
          color: #0a6b4a;
        }
        .price-pill.active {
          background: #0a6b4a;
          border-color: #0a6b4a;
          color: #ffffff;
        }

        /* ===== RESULT COUNT ===== */
        .result-count {
          font-size: 0.82rem;
          color: #6b7a8a;
          margin-bottom: 16px;
        }
        .result-count strong {
          color: #0b1a2a;
          font-weight: 700;
        }

        /* ===== PRODUCT GRID ===== */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 30px;
        }

        .product-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #eaf0f5;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(10, 107, 74, 0.08);
          border-color: #cde0d4;
        }

        .product-card .img-wrap {
          background: #f8fafc;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 12px;
          position: relative;
        }
        .product-card .img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .product-card:hover .img-wrap img {
          transform: scale(1.05);
        }
        .product-card .img-wrap .stock-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #0a6b4a;
          color: white;
          font-size: 0.58rem;
          padding: 2px 8px;
          border-radius: 20px;
          font-weight: 700;
        }
        .product-card .img-wrap .stock-badge.out {
          background: #dc3545;
        }

        .product-card .info {
          padding: 12px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .product-card .info .tag {
          font-size: 0.58rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          color: #0a6b4a;
          background: #e4f0ea;
          display: inline-block;
          padding: 2px 8px;
          border-radius: 30px;
          margin-bottom: 4px;
          align-self: flex-start;
        }
        .product-card .info h4 {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0b1a2a;
          line-height: 1.25;
          margin-bottom: 2px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-card .info .desc {
          font-size: 0.68rem;
          color: #6b7a8a;
          margin-bottom: 6px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-card .info .rating {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.68rem;
          color: #f59e0b;
          margin-bottom: 6px;
        }
        .product-card .info .rating span {
          color: #6b7a8a;
        }
        .product-card .info .price {
          font-weight: 800;
          font-size: 0.95rem;
          color: #0a6b4a;
          margin-bottom: 8px;
        }
        .product-card .info .btn-wrap {
          margin-top: auto;
        }

        /* ===== FOOTER ===== */
        .footer-simple {
          border-top: 1px solid #eef2f6;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          font-size: 0.75rem;
          color: #6b7a8a;
        }
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }
        .footer-links a {
          color: #6b7a8a;
          text-decoration: none;
        }
        .footer-links a:hover {
          color: #0a6b4a;
        }

        /* ===== RESPONSIVE ===== */
        @media (min-width: 640px) {
          .products-page { padding: 0 24px 60px; }
          .page-title h1 { font-size: 2.2rem; }
          .product-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .product-card .img-wrap { height: 160px; }
          .product-card .info { padding: 14px; }
          .product-card .info h4 { font-size: 0.88rem; }
          .product-card .info .price { font-size: 1rem; }
        }

        @media (min-width: 1024px) {
          .products-page { padding: 0 40px 60px; }
          .product-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          .product-card .img-wrap { height: 180px; }
        }

        @media (min-width: 1280px) {
          .product-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>

      <Navbar cartCount={cartCount} />

      <div className="products-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="separator">›</span>
          <span className="current">Products</span>
        </div>

        {/* Title */}
        <div className="page-title">
          <h1>Our <span>Products</span></h1>
          <p className="sub">
            Trusted Medical Equipment for Better Care — Explore our wide range of premium medical equipment.
          </p>
        </div>

        {/* ===== COMPACT CATEGORY PILLS ===== */}
        <div className="category-pills">
          <button
            className={`category-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            All
            <span className="count">{products.length}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`category-pill ${selectedCategory === cat.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* ===== SEARCH BAR ===== */}
        <div className="search-filter-bar">
          <div className="search-input-wrap">
            <Search className="w-4 h-4 icon" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className={`filter-btn ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Sliders className="w-4 h-4" />
            <span className="hidden sm:inline">Price</span>
          </button>
        </div>

        {/* ===== FILTER PANEL ===== */}
        {showFilters && (
          <div className="filter-panel">
            <h4><Sliders className="w-4 h-4" /> Filter by Price</h4>
            <div className="price-pills">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  className={`price-pill ${priceRange === range.value ? 'active' : ''}`}
                  onClick={() => setPriceRange(priceRange === range.value ? 'all' : range.value)}
                >
                  {range.label}
                </button>
              ))}
              {priceRange !== 'all' && (
                <button
                  className="price-pill"
                  onClick={() => setPriceRange('all')}
                  style={{ background: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' }}
                >
                  <X className="w-3 h-3 inline mr-1" /> Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* ===== RESULT COUNT ===== */}
        <div className="result-count">
          Showing <strong>{filteredProducts.length}</strong> products
        </div>

        {/* ===== PRODUCT GRID ===== */}
        {filteredProducts.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #eaf0f5'
          }}>
            <Search className="w-12 h-12" style={{ color: '#94a3b8', margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.1rem', color: '#0b1a2a', marginBottom: '4px' }}>No products found</h3>
            <p style={{ color: '#6b7a8a', fontSize: '0.85rem' }}>Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="img-wrap">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={160}
                    className="object-contain"
                  />
                  <span className={`stock-badge ${!product.inStock ? 'out' : ''}`}>
                    {product.inStock ? 'In Stock' : 'Out'}
                  </span>
                </div>
                <div className="info">
                  <span className="tag">{product.tag}</span>
                  <h4>{product.name}</h4>
                  <div className="desc">{product.description}</div>
                  {product.rating && (
                    <div className="rating">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                      <span>({product.reviews})</span>
                    </div>
                  )}
                  <div className="price">{formatPrice(product.price)}</div>
                  <div className="btn-wrap">
                    <WhatsAppOrderButton 
                      product={{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        description: product.description
                      }}
                      className="w-full justify-center text-xs"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== SIMPLE FOOTER ===== */}
        <div className="footer-simple">
          <div className="footer-links">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/refund">Refund Policy</Link>
          </div>
          <span>© 2025 Geetanjali Health Care. All Rights Reserved.</span>
        </div>
      </div>
    </>
  );
}