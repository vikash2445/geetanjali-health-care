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
  Headphones, Send, X,
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
  const [sortBy, setSortBy] = useState<string>('featured');

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
    }
  ];

  // Categories for sidebar
  const categories = [
    { name: 'CPAP Machines', icon: <Microscope className="w-4 h-4" />, count: 4 },
    { name: 'BiPAP Machines', icon: <Wind className="w-4 h-4" />, count: 3 },
   // { name: 'CPAP / BiPAP Masks', icon: <Mask className="w-4 h-4" />, count: 3 },
    { name: 'Tubing & Pipe', icon: <Pipette className="w-4 h-4" />, count: 2 },
    { name: 'Humidifier Chambers', icon: <Droplet className="w-4 h-4" />, count: 2 },
    { name: 'Filters', icon: <FilterIcon className="w-4 h-4" />, count: 3 },
    { name: 'Pulse Oximeters', icon: <Heart className="w-4 h-4" />, count: 2 },
    { name: 'Patient Monitors', icon: <Monitor className="w-4 h-4" />, count: 2 },
    //{ name: 'Ventilators', icon: <Lungs className="w-4 h-4" />, count: 2 },
    { name: 'Oxygen Concentrators', icon: <Droplet className="w-4 h-4" />, count: 2 },
    { name: 'Nebulizers', icon: <SprayCan className="w-4 h-4" />, count: 2 },
    { name: 'Accessories & Spare Parts', icon: <Wrench className="w-4 h-4" />, count: 5 }
  ];

  const priceRanges = [
    { label: 'Under ₹5,000', value: 'under-5000' },
    { label: '₹5,001 – ₹10,000', value: '5001-10000' },
    { label: '₹10,001 – ₹50,000', value: '10001-50000' },
    { label: '₹50,001 – ₹100,000', value: '50001-100000' },
    { label: 'Above ₹100,000', value: 'above-100000' }
  ];

  // Filter and sort products
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
        case '50001-100000':
          if (price < 50001 || price > 100000) return false;
          break;
        case 'above-100000':
          if (price <= 100000) return false;
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

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const productLinks = [
    'CPAP Machines',
    'BiPAP Machines',
    'Accessories',
    'Ventilator (ICU)',
    'Advanced Ventilator',
    'Nebulizer',
    'Nebulizer Machine',
    'Compressor Nebulizer'
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
          padding: 0 40px 60px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 24px 0 16px;
          font-size: 0.8rem;
          color: #6b7a8a;
        }
        .breadcrumb a {
          color: #0a6b4a;
          text-decoration: none;
          font-weight: 500;
        }
        .breadcrumb a:hover {
          text-decoration: underline;
        }
        .breadcrumb .separator {
          color: #cbd5e1;
        }
        .breadcrumb .current {
          color: #0b1a2a;
          font-weight: 600;
        }

        .page-title {
          margin-bottom: 28px;
        }
        .page-title h1 {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: #0b1a2a;
          letter-spacing: -0.5px;
        }
        .page-title h1 span {
          color: #0a6b4a;
        }
        .page-title .sub {
          font-size: 0.95rem;
          color: #4a5b6e;
          margin-top: 4px;
          max-width: 640px;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 36px;
        }

        /* Sidebar */
        .sidebar {
          background: #f8fafc;
          border-radius: 20px;
          padding: 22px 20px;
          border: 1px solid #eaf0f5;
          align-self: start;
          position: sticky;
          top: 20px;
        }
        .sidebar h3 {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #0a6b4a;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .sidebar .category-list {
          list-style: none;
          margin-bottom: 28px;
        }
        .sidebar .category-list li {
          padding: 7px 0;
          font-size: 0.82rem;
          color: #1e3142;
          border-bottom: 1px solid #edf2f7;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s;
        }
        .sidebar .category-list li:hover {
          color: #0a6b4a;
        }
        .sidebar .category-list li.active {
          color: #0a6b4a;
          font-weight: 600;
        }
        .sidebar .category-list li:last-child {
          border-bottom: none;
        }
        .sidebar .category-list li .icon {
          color: #0a6b4a;
          flex-shrink: 0;
        }
        .sidebar .category-list li .badge {
          margin-left: auto;
          background: #eaf0f5;
          font-size: 0.6rem;
          padding: 2px 10px;
          border-radius: 30px;
          color: #4a5b6e;
        }

        .filter-group {
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #eaf0f5;
        }
        .filter-group h4 {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #4a5b6e;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .filter-group label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          color: #1e3142;
          padding: 5px 0;
          cursor: pointer;
        }
        .filter-group label input[type="checkbox"] {
          accent-color: #0a6b4a;
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        /* Products Area */
        .products-area {
          display: flex;
          flex-direction: column;
        }

        .toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }
        .toolbar .result-count {
          font-size: 0.85rem;
          color: #4a5b6e;
        }
        .toolbar .result-count strong {
          color: #0b1a2a;
        }
        .toolbar .sort-select {
          padding: 8px 16px;
          border-radius: 40px;
          border: 1px solid #dce4ec;
          background: white;
          font-size: 0.8rem;
          color: #1e3142;
          outline: none;
          cursor: pointer;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #dce4ec;
          border-radius: 40px;
          padding: 4px 4px 4px 16px;
          min-width: 200px;
        }
        .search-bar input {
          border: none;
          outline: none;
          flex: 1;
          padding: 8px 0;
          font-size: 0.82rem;
          background: transparent;
        }
        .search-bar button {
          background: #0a6b4a;
          border: none;
          border-radius: 30px;
          padding: 8px 16px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .search-bar button:hover {
          background: #085a3e;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 22px;
          margin-bottom: 30px;
        }

        .product-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid #eaf0f5;
          overflow: hidden;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(10, 107, 74, 0.08);
          border-color: #cde0d4;
        }

        .product-card .img-wrap {
          background: #f2f6fa;
          height: 160px;
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
          transform: scale(1.04);
        }
        .product-card .img-wrap .stock-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #0a6b4a;
          color: white;
          font-size: 0.6rem;
          padding: 2px 10px;
          border-radius: 20px;
          font-weight: 600;
        }
        .product-card .img-wrap .stock-badge.out {
          background: #dc3545;
        }

        .product-card .info {
          padding: 14px 16px 16px;
        }
        .product-card .info .tag {
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          color: #0a6b4a;
          background: #e4f0ea;
          display: inline-block;
          padding: 2px 10px;
          border-radius: 30px;
          margin-bottom: 4px;
        }
        .product-card .info h4 {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0b1a2a;
          line-height: 1.2;
          margin-bottom: 2px;
        }
        .product-card .info .desc {
          font-size: 0.72rem;
          color: #6b7a8a;
          margin-bottom: 4px;
        }
        .product-card .info .rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          color: #f59e0b;
          margin-bottom: 4px;
        }
        .product-card .info .rating span {
          color: #6b7a8a;
        }
        .product-card .info .price {
          font-weight: 800;
          font-size: 1rem;
          color: #0a6b4a;
        }

        /* Quick Links */
        .quick-links-row {
          display: grid;
          grid-template-columns: 1.5fr 1.5fr 1fr 1.5fr;
          gap: 30px;
          margin: 40px 0 24px;
          padding-top: 30px;
          border-top: 1px solid #eef2f6;
        }
        .quick-links-row .col h4 {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #0b1a2a;
          margin-bottom: 12px;
        }
        .quick-links-row .col ul {
          list-style: none;
        }
        .quick-links-row .col ul li {
          padding: 4px 0;
          font-size: 0.82rem;
          color: #4a5b6e;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .quick-links-row .col ul li:hover {
          color: #0a6b4a;
        }
        .quick-links-row .col ul li .icon {
          color: #0a6b4a;
          width: 18px;
        }
        .quick-links-row .col .newsletter-input {
          display: flex;
          background: #f2f6fa;
          border-radius: 40px;
          overflow: hidden;
          margin-top: 8px;
          border: 1px solid #eaf0f5;
        }
        .quick-links-row .col .newsletter-input input {
          border: none;
          padding: 10px 16px;
          flex: 1;
          background: transparent;
          outline: none;
          font-size: 0.8rem;
        }
        .quick-links-row .col .newsletter-input button {
          background: #0a6b4a;
          color: white;
          border: none;
          padding: 0 18px;
          font-weight: 600;
          cursor: pointer;
        }
        .quick-links-row .col .newsletter-input button:hover {
          background: #085a3e;
        }

        .footer-bottom {
          border-top: 1px solid #eef2f6;
          padding-top: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.7rem;
          color: #6b7a8a;
        }
        .footer-bottom .links {
          display: flex;
          gap: 20px;
        }
        .footer-bottom .links a {
          color: #6b7a8a;
          text-decoration: none;
        }
        .footer-bottom .links a:hover {
          color: #0a6b4a;
        }

        @media (max-width: 1024px) {
          .products-page { padding: 0 20px 40px; }
          .main-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .sidebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 20px;
            position: static;
          }
          .sidebar .filter-group {
            border-top: none;
            padding-top: 0;
            margin-top: 0;
          }
          .quick-links-row {
            grid-template-columns: 1fr 1fr;
          }
          .search-bar {
            min-width: 150px;
          }
        }

        @media (max-width: 700px) {
          .products-page { padding: 0 14px 32px; }
          .sidebar { grid-template-columns: 1fr; }
          .product-grid { grid-template-columns: repeat(2, 1fr); }
          .quick-links-row { grid-template-columns: 1fr; }
          .page-title h1 { font-size: 1.8rem; }
          .toolbar { flex-direction: column; align-items: stretch; }
          .search-bar { width: 100%; }
        }

        @media (max-width: 480px) {
          .product-grid { grid-template-columns: 1fr; }
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
            Trusted Medical Equipment for Better Care — Explore our wide range of premium medical equipment 
            designed for hospitals, clinics &amp; home care.
          </p>
        </div>

        {/* Main Grid */}
        <div className="main-grid">
          {/* Sidebar */}
          <aside className="sidebar">
            {/* Categories */}
            <div>
              <h3><List className="w-4 h-4" /> CATEGORIES</h3>
              <ul className="category-list">
                <li 
                  className={selectedCategory === 'all' ? 'active' : ''}
                  onClick={() => setSelectedCategory('all')}
                >
                  <span className="icon"><List className="w-3 h-3" /></span>
                  All Products
                  <span className="badge">{products.length}</span>
                </li>
                {categories.map((cat) => (
                  <li 
                    key={cat.name}
                    className={selectedCategory === cat.name ? 'active' : ''}
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    <span className="icon">{cat.icon}</span>
                    {cat.name}
                    <span className="badge">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter by Price */}
            <div className="filter-group">
              <h4><Sliders className="w-4 h-4" /> FILTER BY PRICE</h4>
              {priceRanges.map((range) => (
                <label key={range.value}>
                  <input 
                    type="checkbox" 
                    checked={priceRange === range.value}
                    onChange={() => setPriceRange(priceRange === range.value ? 'all' : range.value)}
                  />
                  {range.label}
                </label>
              ))}
            </div>
          </aside>

          {/* Products Area */}
          <div className="products-area">
            {/* Toolbar */}
            <div className="toolbar">
              <div className="result-count">
                Showing <strong>{sortedProducts.length}</strong> products
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div className="search-bar">
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button onClick={() => {}}>
                    <Search className="w-4 h-4" /> Search
                  </button>
                </div>
                <select 
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name A–Z</option>
                  <option value="name-desc">Name Z–A</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {sortedProducts.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '60px 20px',
                background: '#f8fafc',
                borderRadius: '20px'
              }}>
                <Search className="w-12 h-12" style={{ color: '#6b7a8a', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.2rem', color: '#0b1a2a', marginBottom: '4px' }}>No products found</h3>
                <p style={{ color: '#6b7a8a' }}>Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="product-grid">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="img-wrap">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={160}
                        className="object-cover"
                      />
                      <span className="stock-badge">
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
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
                      <WhatsAppOrderButton 
    product={{
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description
    }}
    className="w-full mt-2 justify-center"
  />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Links & Footer */}
        <div className="quick-links-row">
          {/* Quick Links */}
          <div className="col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <ChevronRight className="w-3 h-3 icon" />
                  <Link href={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="col">
            <h4>Our Products</h4>
            <ul>
              {productLinks.map((link) => (
                <li key={link}>
                  <ChevronRight className="w-3 h-3 icon" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col">
            <h4>Support</h4>
            <ul>
              <li><Phone className="w-3 h-3 icon" /> +91 98765 43210</li>
              <li><Mail className="w-3 h-3 icon" /> info@getanjaliproducts.com</li>
              <li><Globe className="w-3 h-3 icon" /> www.getanjaliproducts.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col">
            <h4>Newsletter</h4>
            <p style={{ fontSize: '0.8rem', color: '#4a5b6e', marginBottom: '6px' }}>
              Subscribe to get updates on new products and offers.
            </p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button><Send className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>© 2025 Getanjaliproducts Health Care. All Rights Reserved.</span>
          <div className="links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </>
  );
}