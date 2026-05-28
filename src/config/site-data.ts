import { Review, PricingItem, BusinessInfo, FAQItem, TipItem } from '../types';

export const BUSINESS: BusinessInfo = {
  name: 'Demo AC Service',
  address: 'Jl. Demo No.123, Kelurahan Demo, Kecamatan Demo, Kota Demo, Provinsi Demo 12345',
  phone: '0812-3456-7890',
  whatsappUrl: 'https://wa.me/6281234567890',
  instagramUrl: 'https://instagram.com/demoacservice',
  googleMapsUrl: 'https://maps.app.goo.gl/demo',
  openingHours: 'Buka Setiap Hari · Tutup pukul 22.00',
  plusCode: 'DEMO+ABC Demo, Kota Demo, Provinsi Demo'
};

export const REVIEWS: Review[] = [
  { _id: '1', authorName: 'John Doe', date: 'Mei 2026', rating: 5, text: 'Layanan service AC sangat memuaskan, teknisi profesional dan ramah, pekerjaan rapi dan cepat. Highly recommended!' },
  { _id: '2', authorName: 'Jane Smith', date: 'April 2026', rating: 5, text: 'Sudah beberapa kali menggunakan jasa demo AC service, selalu kepuasan. Harga transparan, tidak ada biaya tersembunyi.' },
  { _id: '3', authorName: 'Alex Johnson', date: 'Maret 2026', rating: 5, text: 'Performa AC setelah dicuci jauh lebih baik, dan teknisinya sangat membantu menjelaskan perawatan AC. Terima kasih!' }
];

export const PRICING: PricingItem[] = [
  { layanan: 'Cuci AC 0,5–1 PK', harga: 'Rp 75.000' },
  { layanan: 'Cuci AC 1,5–2 PK', harga: 'Rp 100.000' },
  { layanan: 'Pengecekan AC', harga: 'Rp 60.000' },
  { layanan: 'Tambah Freon', harga: 'Rp 150.000' },
  { layanan: 'Bongkar AC', harga: 'Rp 120.000' },
  { layanan: 'Pasang AC Baru', harga: 'Rp 300.000' },
  { layanan: 'Bongkar Pasang AC (Relokasi)', harga: 'Rp 350.000' },
];

export const FAQS: FAQItem[] = [
  { question: "Berapa harga service AC?", answer: "Harga tergantung jenis layanan, ukuran PK, kondisi unit, dan lokasi. Untuk konsultasi awal bisa gratis via WhatsApp." },
  { question: "Apakah bisa panggilan ke rumah?", answer: "Ya, kami melayani service AC panggilan ke rumah, kantor, ruko, dan tempat usaha di area terjangkau kami." },
  { question: "Apakah service AC bergaransi?", answer: "Ya, pengerjaan tertentu mendapatkan garansi. Kami menjunjung transparansi harga tanpa biaya tersembunyi." },
  { question: "Kapan AC perlu dicuci?", answer: "Umumnya AC perlu dicuci setiap 2–3 bulan, terutama jika dipakai setiap hari atau ruangan berdebu." },
  { question: "Apakah bisa service AC hari Minggu?", answer: "Ya, kami buka setiap hari termasuk hari Minggu dan libur nasional sampai pukul 22.00." },
  { question: "Bagaimana cara booking?", answer: "Klik tombol booking di halaman ini, isi form singkat, dan pesan akan langsung terkirim ke WhatsApp kami." }
];

export const TIPS: TipItem[] = [
  { title: "Tanda AC Perlu Cuci", description: "AC mulai kurang dingin, hembusan angin lemah, atau muncul bau tidak sedap dari indoor.", icon: "AlertTriangle" },
  { title: "Cara Hemat Listrik AC", description: "Atur suhu di 24-25°C, pastikan ruangan tertutup, dan cuci AC secara rutin setiap 3 bulan.", icon: "Zap" },
  { title: "Mencegah AC Bocor", description: "Pastikan selang pembuangan tidak tersumbat dan posisi indoor terpasang miring ke arah pembuangan.", icon: "Wind" }
];

export const BRANDS = ['Daikin', 'Sharp', 'Panasonic', 'LG', 'Samsung', 'Gree', 'Mitsubishi', 'Aqua', 'Toshiba'];

export const SERVICE_AREAS = ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5', 'Area 6', 'Area 7', 'Area 8'];

export const PROBLEMS = [
  'AC tidak dingin', 'AC bocor / menetes dari indoor', 'AC bau tidak sedap', 'AC berisik',
  'AC mati total', 'AC hidup sebentar lalu mati', 'Outdoor AC tidak menyala', 'Remote AC tidak berfungsi',
  'AC kurang angin', 'AC perlu tambah freon', 'Pipa AC bocor', 'Listrik turun saat AC dinyalakan'
];
