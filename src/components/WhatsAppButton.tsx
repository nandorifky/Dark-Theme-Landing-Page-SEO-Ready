'use client';

import { useState } from 'react';
import { X, Send, Calendar, MapPin, User, FileText, CalendarCheck } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { getWhatsAppUrl, getBookingWhatsAppUrl } from '../config/whatsapp';

interface WhatsAppButtonProps {
  /** 'direct' = langsung ke WA, 'form' = buka modal form dulu */
  mode?: 'direct' | 'form';
  /** Teks tombol */
  label?: string;
  /** Custom message untuk mode direct (override config default) */
  message?: string;
  /** CSS class tambahan */
  className?: string;
  /** Inline style tambahan */
  style?: React.CSSProperties;
}

export default function WhatsAppButton({
  mode = 'direct',
  label = 'WhatsApp Teknisi Sekarang',
  message,
  className = 'btn',
  style,
}: WhatsAppButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ nama: '', alamat: '', tanggal: '', pesan: '' });

  if (mode === 'direct') {
    return (
      <a
        href={getWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        <WhatsAppIcon size={20} /> {label}
      </a>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getBookingWhatsAppUrl(form);
    window.open(url, '_blank');
    setIsModalOpen(false);
    setForm({ nama: '', alamat: '', tanggal: '', pesan: '' });
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className}
        style={style}
      >
        <CalendarCheck size={20} /> {label}
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Booking Service AC</h3>
              <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Tutup">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="booking-nama"><User size={16} /> Nama Lengkap</label>
                <input
                  id="booking-nama"
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="booking-alamat"><MapPin size={16} /> Alamat Lengkap</label>
                <input
                  id="booking-alamat"
                  type="text"
                  required
                  placeholder="Jl. ... RT/RW, Kel., Kec., Kota Kediri"
                  value={form.alamat}
                  onChange={(e) => setForm({ ...form, alamat: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="booking-tanggal"><Calendar size={16} /> Jadwal Pelaksanaan Kerja</label>
                <input
                  id="booking-tanggal"
                  type="date"
                  required
                  value={form.tanggal}
                  onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="booking-pesan"><FileText size={16} /> Informasi Tambahan</label>
                <textarea
                  id="booking-pesan"
                  rows={3}
                  placeholder="Jelaskan keluhan AC Anda (opsional)"
                  value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                />
              </div>

              <button type="submit" className="btn modal-submit-btn">
                <WhatsAppIcon size={18} /> Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
