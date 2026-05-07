'use client';

import WhatsAppIcon from './icons/WhatsAppIcon';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../config/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl(WHATSAPP_CONFIG.floatingMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Hubungi via WhatsApp"
    >
      <WhatsAppIcon size={28} />
      <span className="wa-float-label">Chat Kami</span>
    </a>
  );
}
