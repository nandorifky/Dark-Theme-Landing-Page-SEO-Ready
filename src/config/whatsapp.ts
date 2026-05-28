/**
 * ============================================
 * KONFIGURASI WHATSAPP - Demo AC Service
 * ============================================
 * Ubah nomor dan teks di sini untuk semua tombol WhatsApp di website.
 */

export const WHATSAPP_CONFIG = {
  // Nomor WhatsApp (format internasional tanpa +)
  phoneNumber: '6281234567890',

  // Teks default saat klik tombol WhatsApp langsung (Mode 1 - Direct)
  defaultMessage: 'Halo Demo AC Service, saya ingin konsultasi tentang service AC. Mohon informasinya.',

  // Teks untuk floating button
  floatingMessage: 'Halo Demo AC, saya butuh service AC. Bisa dibantu?',

  // Template pesan dari form booking (Mode 2 - Form Modal)
  // Variabel yang tersedia: {nama}, {alamat}, {tanggal}, {pesan}
  bookingTemplate: `Halo Demo AC Service, saya ingin booking service AC.

*Nama:* {nama}
*Alamat:* {alamat}
*Jadwal:* {tanggal}
*Keterangan:* {pesan}

Mohon konfirmasi ketersediaan jadwal. Terima kasih.`,
};

/**
 * Helper: Buat URL WhatsApp dari nomor dan teks
 */
export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${text}`;
}

/**
 * Helper: Buat URL WhatsApp dari form booking
 */
export function getBookingWhatsAppUrl(data: {
  nama: string;
  alamat: string;
  tanggal: string;
  pesan: string;
}): string {
  const message = WHATSAPP_CONFIG.bookingTemplate
    .replace('{nama}', data.nama)
    .replace('{alamat}', data.alamat)
    .replace('{tanggal}', data.tanggal)
    .replace('{pesan}', data.pesan || '-');
  return getWhatsAppUrl(message);
}
