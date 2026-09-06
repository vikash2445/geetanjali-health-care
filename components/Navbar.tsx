'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ShoppingBag, Phone
} from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
}

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/sleep-care', label: 'Sleep Care' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo with Icon + Name - Dono images side by side */}
        <Link href="/" className="navbar-logo">
          {/* Logo Icon - Small image */}
          <div className="logo-icon-wrapper">
            <Image
              src="/images/geetanjali_logo.png"
              alt="Geetanjali Health Care Icon"
              width={45}
              height={45}
              className="logo-icon"
              priority
            />
          </div>
          
          {/* Logo Name - Text image */}
          <div className="logo-name-wrapper">
            <Image
              src="/images/geetanjali_logo_name.png"
              alt="Geetanjali Health Care"
              width={150}
              height={40}
              className="logo-name"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side - Cart & Menu */}
        <div className="navbar-actions">
          <Link href="/contact" className="nav-phone">
            <Phone className="w-4 h-4" />
            <span>24x7 Help</span>
          </Link>
          
          <Link href="/cart" className="nav-cart">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="nav-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="navbar-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-link ${isActive(link.href) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-divider" />
          <Link href="/cart" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            <ShoppingBag className="w-4 h-4" /> Cart ({cartCount})
          </Link>
          <Link href="/contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
            <Phone className="w-4 h-4" /> Contact Us
          </Link>
        </div>
      )}

      <style>{`
        .navbar {
          background: #ffffff;
          border-bottom: 1px solid #e8edf2;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.95);
        }
        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-icon-wrapper {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .logo-icon {
          object-fit: contain;
          border-radius: 8px;
          width: 45px;
          height: 45px;
        }
        .logo-name-wrapper {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .logo-name {
          object-fit: contain;
          height: auto;
          width: auto;
          max-height: 40px;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #4a4a6a;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .nav-link:hover {
          background: #e8f5ee;
          color: #0a4a3c;
        }
        .nav-link.active {
          background: #0a4a3c;
          color: #ffffff;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-phone {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          background: #e8f5ee;
          color: #0a4a3c;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .nav-phone:hover {
          background: #0a4a3c;
          color: #ffffff;
        }
        .nav-cart {
          position: relative;
          padding: 8px;
          border-radius: 8px;
          color: #4a4a6a;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .nav-cart:hover {
          background: #e8f5ee;
          color: #0a4a3c;
        }
        .cart-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: #d64040;
          color: #ffffff;
          font-size: 0.6rem;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #4a4a6a;
        }
        .navbar-mobile {
          display: none;
          padding: 16px 24px 24px;
          border-top: 1px solid #e8edf2;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-link {
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          color: #4a4a6a;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s ease;
        }
        .mobile-link:hover {
          background: #e8f5ee;
          color: #0a4a3c;
        }
        .mobile-link.active {
          background: #0a4a3c;
          color: #ffffff;
        }
        .mobile-divider {
          height: 1px;
          background: #e8edf2;
          margin: 8px 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .logo-name {
            max-height: 32px !important;
          }
          .logo-icon {
            width: 36px;
            height: 36px;
          }
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .nav-phone span {
            display: none;
          }
          .nav-menu-toggle {
            display: block;
          }
          .navbar-mobile {
            display: flex;
          }
          .navbar-container {
            height: 64px;
            padding: 0 16px;
          }
          .logo-name {
            max-height: 28px !important;
          }
          .logo-icon {
            width: 32px;
            height: 32px;
          }
        }

        @media (max-width: 480px) {
          .logo-name {
            max-height: 24px !important;
          }
          .logo-icon {
            width: 28px;
            height: 28px;
          }
          .navbar-logo {
            gap: 6px;
          }
        }
      `}</style>
    </nav>
  );
}