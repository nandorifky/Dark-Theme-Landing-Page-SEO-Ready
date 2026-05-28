import { MapPin, Phone, Camera } from 'lucide-react';
import { BUSINESS } from '../config/site-data';
import { SEO_CONFIG } from '../config/seo-config';
import WhatsAppIcon from './icons/WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>{BUSINESS.name.split(' ')[0]} <span className="text-highlight">AC</span></h3>
            <p>Solusi lengkap masalah AC Anda. Kami melayani cuci, perbaikan, isi freon, dan bongkar pasang AC di seluruh area.</p>
          </div>
          <div className="footer-col">
            <h3>Kontak</h3>
            <p className="footer-contact-item"><MapPin size={16} /> {BUSINESS.address}</p>
            <p className="footer-contact-item"><Phone size={16} /> {BUSINESS.phone}</p>
          </div>
          <div className="footer-col">
            <h3>Sosial Media</h3>
            <div className="social-links">
              <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon size={20} /></a>
              <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Camera size={20} /></a>
              <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps"><MapPin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '12px', opacity: 0.7 }}>
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
