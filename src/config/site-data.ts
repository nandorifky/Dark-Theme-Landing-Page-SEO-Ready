import { Review, PricingItem, BusinessInfo, FAQItem, TipItem } from '../types';

export const BUSINESS: BusinessInfo = {
  name: 'Lintang AC Kediri',
  address: 'Jl. Pesantren VIII No.4, Pesantren, Kec. Pesantren, Kota Kediri, Jawa Timur 64131',
  phone: '0896-9185-8866',
  whatsappUrl: 'https://wa.me/6289691858866',
  instagramUrl: 'https://instagram.com/lintangac',
  googleMapsUrl: 'https://maps.app.goo.gl/EBBAZLQFJ7gn9TdT6',
  openingHours: 'Buka Setiap Hari · Tutup pukul 22.00',
  plusCode: '5382+2C Pesantren, Kota Kediri, Jawa Timur'
};

export const REVIEWS: Review[] = [
  { _id: '1', authorName: 'Narendra Digi', date: 'Oktober 2024', rating: 5, text: 'Real testimoni nyuci ac nya sangat bersih baik indor dan outdoor, teknisi nya juga ramah dan sopan bgt, ngga itu aja, td saya di edukasi juga tentang ac. Recommended bgt bagi kalian yg lg cari jasa ac di kediri 👍🏻' },
  { _id: '2', authorName: 'Nadya Nurfadilla', date: 'November 2024', rating: 5, text: 'Pelayanan sangat baik, sudah beberapa kali memakai jasa Lintang AC Kediri untuk perawatan dan bongkar pasang selalu bisa diandalkan. Rekomend bagi yang cari service AC area Kediri.' },
  { _id: '3', authorName: 'Restu Habibah', date: 'November 2024', rating: 5, text: 'Memuaskan, rapi banget hasilnya. Awalnya selang AC nya kesana kemari ga rapi, bocor. Diganti pipa sama kakak nya, jadi rapi. Kakak nya jg ramah. Rekomend banget, bintang 5 👌🏻👍🏻' }
];

export const PRICING: PricingItem[] = [
  { layanan: 'Cuci AC 0,5–1 PK', harga: 'Mulai Rp 50.000' },
  { layanan: 'Cuci AC 1,5–2 PK', harga: 'Mulai Rp 70.000' },
  { layanan: 'Pengecekan AC', harga: 'Mulai Rp 50.000' },
  { layanan: 'Tambah Freon R32/R410A/R22', harga: 'Mulai Rp 100.000' },
  { layanan: 'Bongkar AC', harga: 'Mulai Rp 100.000' },
  { layanan: 'Pasang AC Baru', harga: 'Mulai Rp 200.000' },
  { layanan: 'Bongkar Pasang AC (Relokasi)', harga: 'Mulai Rp 250.000' },
];

export const FAQS: FAQItem[] = [
  { question: "Berapa harga service AC di Kediri?", answer: "Harga tergantung jenis layanan, ukuran PK, kondisi unit, dan lokasi. Untuk cuci AC mulai dari Rp 50.000-an, sedangkan perbaikan dan pengisian freon menyesuaikan hasil pengecekan teknisi." },
  { question: "Apakah bisa panggilan ke rumah?", answer: "Ya, teknisi Lintang AC Kediri melayani service AC panggilan ke rumah, kantor, ruko, kos, dan tempat usaha di area Kediri Kota dan Kabupaten." },
  { question: "Apakah service AC bergaransi?", answer: "Ya, pengerjaan tertentu mendapatkan garansi sesuai jenis layanan dan kondisi unit. Kami menjunjung transparansi harga tanpa biaya tersembunyi." },
  { question: "Kapan AC perlu dicuci?", answer: "Umumnya AC perlu dicuci setiap 2–3 bulan, terutama jika dipakai setiap hari, ruangan berdebu, atau AC mulai kurang dingin dan berbau." },
  { question: "Apakah bisa service AC hari Minggu?", answer: "Ya, Lintang AC Kediri buka setiap hari termasuk hari Minggu dan libur nasional sampai pukul 22.00 WIB." },
  { question: "Bagaimana cara booking?", answer: "Cukup klik tombol \"Booking Service AC\" di halaman ini, isi form singkat, dan pesan Anda akan langsung terkirim ke WhatsApp teknisi kami." }
];

export const TIPS: TipItem[] = [
  { title: "Tanda AC Perlu Cuci", description: "AC mulai kurang dingin, hembusan angin lemah, atau muncul bau tidak sedap.", icon: "AlertTriangle" },
  { title: "Cara Hemat Listrik AC", description: "Atur suhu di 24-25°C, pastikan ruangan tertutup rapat, dan cuci rutin 3 bulan sekali.", icon: "Zap" },
  { title: "Mencegah AC Bocor", description: "Pastikan selang pembuangan tidak tersumbat dan posisi indoor terpasang miring ke arah pembuangan.", icon: "Wind" }
];

export const BRANDS = ['Daikin', 'Sharp', 'Panasonic', 'LG', 'Samsung', 'Gree', 'Mitsubishi', 'Aqua', 'Polytron'];

export const SERVICE_AREAS = ['Pesantren', 'Mojoroto', 'Kota Kediri', 'Ngasem', 'Gurah', 'Gampengrejo', 'Wates', 'Pare', 'Plosoklaten', 'Papar'];

export const PROBLEMS = [
  'AC tidak dingin', 'AC bocor / menetes dari indoor', 'AC bau tidak sedap', 'AC berisik',
  'AC mati total', 'AC hidup sebentar lalu mati', 'Outdoor AC tidak menyala', 'Remote AC tidak berfungsi',
  'AC kurang angin', 'AC perlu tambah freon', 'Pipa AC bocor', 'Listrik turun saat AC dinyalakan'
];
