'use client';

import { useState, useEffect } from 'react';
import { Wind, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS } from '../config/site-data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo" onClick={closeMenu}>
          <Wind size={28} className="spin-icon" />
          <span>{BUSINESS.name.split(' ')[0]} <span className="text-accent">AC</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#layanan" className="nav-link">Layanan</a>
          <a href="#keunggulan" className="nav-link">Keunggulan</a>
          <a href="#galeri" className="nav-link">Galeri</a>
          <a href="#kontak" className="nav-link">Kontak</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'is-open' : ''}`} onClick={closeMenu} />

      {/* Mobile Nav Panel */}
      <nav className={`mobile-nav ${isOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="logo" style={{ fontSize: '22px' }}>
            <Wind size={24} className="spin-icon" />
            {BUSINESS.name.split(' ')[0]} <span className="text-accent">AC</span>
          </span>
          <button className="hamburger-btn" onClick={closeMenu} aria-label="Tutup menu">
            <X size={28} />
          </button>
        </div>
        <div className="mobile-nav-links">
          <a href="#layanan" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-num">01</span> Layanan
          </a>
          <a href="#keunggulan" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-num">02</span> Keunggulan
          </a>
          <a href="#galeri" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-num">03</span> Galeri
          </a>
          <a href="#kontak" className="mobile-nav-link" onClick={closeMenu}>
            <span className="mobile-nav-num">04</span> Kontak
          </a>
        </div>
        <div className="mobile-nav-footer">
          <a href="https://wa.me/6289691858866" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', textAlign: 'center' }}>
            Panggil Teknisi
          </a>
        </div>
      </nav>
    </header>
  );
}
