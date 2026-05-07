import { MapPin, MessageCircle, Camera } from 'lucide-react';

const business = {
  address: 'Jl. Pesantren VIII No.4, Pesantren, Kec. Pesantren, Kota Kediri, Jawa Timur 64131',
  phone: '0896-9185-8866',
  whatsappUrl: 'https://wa.me/6289691858866',
  instagramUrl: 'https://instagram.com/lintangac',
  googleMapsUrl: 'https://maps.app.goo.gl/EBBAZLQFJ7gn9TdT6',
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>LINTANG <span className="text-highlight">AC</span></h3>
            <p>Solusi lengkap masalah AC Anda. Kami melayani cuci, perbaikan, isi freon, dan bongkar pasang AC area Kediri.</p>
          </div>
          <div className="footer-col">
            <h3>Kontak</h3>
            <p className="footer-contact-item"><MapPin size={16} /> {business.address}</p>
            <p className="footer-contact-item"><MessageCircle size={16} /> {business.phone}</p>
          </div>
          <div className="footer-col">
            <h3>Sosial Media</h3>
            <div className="social-links">
              <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
              <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Camera size={20} /></a>
              <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps"><MapPin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jasa Service AC Kediri - Lintang AC Kediri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
