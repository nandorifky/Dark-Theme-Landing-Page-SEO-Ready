import { MapPin, Phone, Clock, Star, Wind, Thermometer, CheckCircle, Wrench, MessageCircle, Shield, Zap, ThumbsUp, AlertTriangle, ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import WhatsAppButton from '../components/WhatsAppButton';
import Script from 'next/script';

export default function Home() {
  const business = {
    name: 'Lintang AC Kediri',
    address: 'Jl. Pesantren VIII No.4, Pesantren, Kec. Pesantren, Kota Kediri, Jawa Timur 64131',
    phone: '0896-9185-8866',
    whatsappUrl: 'https://wa.me/6289691858866',
    instagramUrl: 'https://instagram.com/lintangac',
    googleMapsUrl: 'https://maps.app.goo.gl/EBBAZLQFJ7gn9TdT6',
    openingHours: 'Buka Setiap Hari · Tutup pukul 22.00',
    plusCode: '5382+2C Pesantren, Kota Kediri, Jawa Timur'
  };

  const reviews = [
    { _id: '1', authorName: 'Narendra Digi', date: 'Oktober 2024', rating: 5, text: 'Real testimoni nyuci ac nya sangat bersih baik indor dan outdoor, teknisi nya juga ramah dan sopan bgt, ngga itu aja, td saya di edukasi juga tentang ac. Recommended bgt bagi kalian yg lg cari jasa ac di kediri 👍🏻' },
    { _id: '2', authorName: 'Nadya Nurfadilla', date: 'November 2024', rating: 5, text: 'Pelayanan sangat baik, sudah beberapa kali memakai jasa Lintang AC Kediri untuk perawatan dan bongkar pasang selalu bisa diandalkan. Rekomend bagi yang cari service AC area Kediri.' },
    { _id: '3', authorName: 'Restu Habibah', date: 'November 2024', rating: 5, text: 'Memuaskan, rapi banget hasilnya. Awalnya selang AC nya kesana kemari ga rapi, bocor. Diganti pipa sama kakak nya, jadi rapi. Kakak nya jg ramah. Rekomend banget, bintang 5 👌🏻👍🏻' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness", "name": business.name, "image": "/images/after.webp",
        "@id": "https://lintangackediri.com", "url": "https://lintangackediri.com", "telephone": business.phone,
        "address": { "@type": "PostalAddress", "streetAddress": "Jl. Pesantren VIII No.4, Pesantren", "addressLocality": "Kota Kediri", "addressRegion": "Jawa Timur", "postalCode": "64131", "addressCountry": "ID" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "345" },
        "priceRange": "$$"
      },
      {
        "@type": "FAQPage", "mainEntity": [
          { "@type": "Question", "name": "Berapa harga service AC di Kediri?", "acceptedAnswer": { "@type": "Answer", "text": "Harga tergantung jenis layanan, ukuran PK, kondisi unit, dan lokasi. Untuk cuci AC mulai dari Rp50.000-an, sedangkan perbaikan dan pengisian freon menyesuaikan hasil pengecekan teknisi." } },
          { "@type": "Question", "name": "Apakah bisa panggilan ke rumah?", "acceptedAnswer": { "@type": "Answer", "text": "Ya, teknisi Lintang AC Kediri melayani service AC panggilan ke rumah, kantor, ruko, kos, dan tempat usaha di area Kediri Kota dan Kabupaten." } },
          { "@type": "Question", "name": "Apakah service AC bergaransi?", "acceptedAnswer": { "@type": "Answer", "text": "Ya, pengerjaan tertentu mendapatkan garansi sesuai jenis layanan dan kondisi unit." } },
          { "@type": "Question", "name": "Kapan AC perlu dicuci?", "acceptedAnswer": { "@type": "Answer", "text": "Umumnya AC perlu dicuci setiap 2-3 bulan, terutama jika dipakai setiap hari, ruangan berdebu, atau AC mulai kurang dingin dan berbau." } }
        ]
      }
    ]
  };

  const masalahAC = [
    'AC tidak dingin', 'AC bocor / menetes dari indoor', 'AC bau tidak sedap', 'AC berisik',
    'AC mati total', 'AC hidup sebentar lalu mati', 'Outdoor AC tidak menyala', 'Remote AC tidak berfungsi',
    'AC kurang angin', 'AC perlu tambah freon', 'Pipa AC bocor', 'Listrik turun saat AC dinyalakan'
  ];

  const hargaLayanan = [
    { layanan: 'Cuci AC 0,5–1 PK', harga: 'Mulai Rp 50.000' },
    { layanan: 'Cuci AC 1,5–2 PK', harga: 'Mulai Rp 70.000' },
    { layanan: 'Pengecekan AC', harga: 'Mulai Rp 50.000' },
    { layanan: 'Tambah Freon R32/R410A/R22', harga: 'Mulai Rp 100.000' },
    { layanan: 'Bongkar AC', harga: 'Mulai Rp 100.000' },
    { layanan: 'Pasang AC Baru', harga: 'Mulai Rp 200.000' },
    { layanan: 'Bongkar Pasang AC (Relokasi)', harga: 'Mulai Rp 250.000' },
  ];

  const areaLayanan = ['Pesantren', 'Mojoroto', 'Kota Kediri', 'Ngasem', 'Gurah', 'Gampengrejo', 'Wates', 'Pare', 'Plosoklaten', 'Papar'];

  return (
    <>
      <Script id="schema-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <span className="hero-badge"><Zap size={14} /> TEKNISI DATANG KE LOKASI ANDA</span>
              <h1>Service AC Kediri Panggilan Cepat &amp; Bergaransi</h1>
              <p>Lintang AC Kediri melayani cuci AC, perbaikan AC tidak dingin, AC bocor, isi freon, bongkar pasang, dan instalasi AC untuk rumah, kantor, ruko, hingga kos di area Kediri. Teknisi datang ke lokasi, pengerjaan rapi, harga transparan, dan bergaransi.</p>
              <div className="hero-actions">
                <WhatsAppButton mode="form" label="Booking Service AC" />
                <WhatsAppButton mode="direct" label="Chat Langsung" className="btn btn-secondary" />
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000&auto=format&fit=crop" alt="Teknisi service AC Kediri - Lintang AC" />
            </div>
          </div>
        </section>

        {/* ===== TRUST BAR ===== */}
        <section className="trust-bar-section">
          <div className="container">
            <div className="trust-bar">
              <div className="trust-item"><Star size={18} className="text-accent" fill="currentColor" /> <strong>Rating 5.0</strong> &middot; 345 Ulasan Google</div>
              <div className="trust-item"><Clock size={18} className="text-accent" /> Buka Setiap Hari</div>
              <div className="trust-item"><Shield size={18} className="text-accent" /> Bergaransi</div>
              <div className="trust-item"><MapPin size={18} className="text-accent" /> Teknisi Datang ke Lokasi</div>
            </div>
          </div>
        </section>

        {/* ===== LAYANAN SERVICE AC ===== */}
        <section id="layanan" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">LAYANAN KAMI</span>
              <h2 className="section-title">Layanan Service AC Kediri</h2>
            </div>
            <div className="services-grid-full">
              <div className="service-item-full">
                <div className="service-item-header"><Wind className="service-icon" size={32} /><h3>Cuci AC Kediri</h3></div>
                <p>Membersihkan indoor, outdoor, filter, evaporator, blower, dan saluran pembuangan agar AC kembali dingin, tidak bau, dan lebih hemat listrik. Cocok untuk perawatan rutin setiap 2–3 bulan.</p>
              </div>
              <div className="service-item-full">
                <div className="service-item-header"><Wrench className="service-icon" size={32} /><h3>Perbaikan AC Tidak Dingin</h3></div>
                <p>Pengecekan tekanan freon, kapasitor, sensor, kompresor, evaporator, kebocoran pipa, dan komponen kelistrikan. Diagnosa akurat oleh teknisi AC Kediri berpengalaman.</p>
              </div>
              <div className="service-item-full">
                <div className="service-item-header"><AlertTriangle className="service-icon" size={32} /><h3>Service AC Bocor Air</h3></div>
                <p>Mengatasi AC netes dari indoor, saluran mampet, pipa drain tersumbat, pemasangan kurang miring, atau evaporator kotor. Solusi tuntas agar tidak kambuh lagi.</p>
              </div>
              <div className="service-item-full">
                <div className="service-item-header"><Thermometer className="service-icon" size={32} /><h3>Isi dan Tambah Freon AC</h3></div>
                <p>Pengisian freon R32, R410A, dan R22 sesuai kebutuhan unit. Catatan: freon tidak selalu perlu ditambah jika tidak ada kebocoran, teknisi kami akan cek terlebih dahulu.</p>
              </div>
              <div className="service-item-full">
                <div className="service-item-header"><CheckCircle className="service-icon" size={32} /><h3>Bongkar Pasang AC Kediri</h3></div>
                <p>Relokasi AC rumah, kantor, kos, dan ruko dengan instalasi rapi, pipa tertata, flaring presisi, dan pengecekan vakum sistem agar performa optimal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MASALAH AC ===== */}
        <section className="section" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">TROUBLESHOOTING //</span>
              <h2 className="section-title">Masalah AC yang Sering Kami Tangani</h2>
            </div>
            <div className="problems-grid">
              {masalahAC.map((item) => (
                <div key={item} className="problem-item">
                  <AlertTriangle size={18} className="text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--text-secondary)', marginTop: '30px', maxWidth: '700px' }}>
              Mengalami salah satu masalah di atas? Langsung hubungi teknisi AC Kediri kami untuk pengecekan dan perbaikan di lokasi Anda.
            </p>
          </div>
        </section>

        {/* ===== HARGA ===== */}
        <section id="harga" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">ESTIMASI BIAYA //</span>
              <h2 className="section-title">Harga Service AC Kediri</h2>
            </div>
            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr><th>Layanan</th><th>Estimasi Harga</th></tr>
                </thead>
                <tbody>
                  {hargaLayanan.map((item) => (
                    <tr key={item.layanan}><td>{item.layanan}</td><td className="text-accent">{item.harga}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pricing-note">* Harga dapat berubah sesuai kondisi AC, jarak lokasi, jenis freon, dan kebutuhan sparepart. Konsultasi awal via WhatsApp <strong>gratis</strong>.</p>
          </div>
        </section>

        {/* ===== KEUNGGULAN ===== */}
        <section id="keunggulan" className="section" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">MENGAPA KAMI? //</span>
              <h2 className="section-title">Keunggulan Lintang AC Kediri</h2>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-wrapper"><ThumbsUp size={28} /></div>
                <h3>Teknisi Profesional &amp; Ramah</h3>
                <p>Tim ahli yang terlatih, bekerja dengan SOP kebersihan tinggi, dan mengedukasi pelanggan dengan transparan tentang kondisi AC.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper"><Shield size={28} /></div>
                <h3>Bergaransi &amp; Transparan</h3>
                <p>Setiap pengerjaan service maupun instalasi AC dilindungi garansi. Tanpa biaya tersembunyi, harga diinformasikan sebelum pengerjaan.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper"><Zap size={28} /></div>
                <h3>Pengerjaan Cepat Kilat</h3>
                <p>Respons cepat untuk panggilan darurat di area Kediri. Teknisi AC Kediri kami siap datang ke lokasi tepat waktu.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== AREA LAYANAN ===== */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">JANGKAUAN //</span>
              <h2 className="section-title">Area Layanan Service AC Kediri</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '800px' }}>
              Kami melayani jasa service AC panggilan di Kota Kediri dan sekitarnya. Teknisi AC Kediri kami menjangkau seluruh kecamatan berikut:
            </p>
            <div className="area-grid">
              {areaLayanan.map(area => (
                <div key={area} className="area-tag"><MapPin size={14} /> {area}</div>
              ))}
            </div>
            <p style={{ color: 'var(--text-secondary)', marginTop: '20px', fontSize: '15px' }}>
              Tidak melihat kecamatan Anda? <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent" style={{ textDecoration: 'underline' }}>Tanyakan via WhatsApp</a> — kemungkinan besar kami tetap melayani.
            </p>
          </div>
        </section>

        {/* ===== GALERI BEFORE-AFTER ===== */}
        <section id="galeri" className="section gallery-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle" style={{ color: 'var(--accent)' }}>BUKTI KERJA NYATA //</span>
              <h2 className="section-title">Galeri Hasil Cuci AC</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '12px' }}>Geser garis pembatas untuk melihat perbedaan sebelum dan sesudah AC dicuci oleh teknisi kami.</p>
            </div>
            <div className="gallery-wrapper">
              <div className="gallery-frame">
                <BeforeAfterSlider beforeImage="/images/before.webp" afterImage="/images/after.webp" />
              </div>
              <div className="gallery-stats">
                <div className="gallery-stat"><strong>345+</strong> Proyek Selesai</div>
                <div className="gallery-stat"><strong>5.0</strong> Rating Google</div>
                <div className="gallery-stat"><strong>100%</strong> Garansi Kepuasan</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONI ===== */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">ULASAN GOOGLE //</span>
              <h2 className="section-title">Testimoni Pelanggan Lintang AC Kediri</h2>
            </div>
            <div className="reviews-grid">
              {reviews.map((review: any) => (
                <div key={review._id} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-avatar">{review.authorName.charAt(0)}</div>
                    <div className="reviewer-info">
                      <h4>{review.authorName}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="stars">{Array.from({ length: review.rating }).map(() => '★').join('')}</div>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{review.date || review.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                  <p className="review-text">"{review.text}"</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Star size={18} /> Lihat Semua 345+ Ulasan di Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* ===== CARA BOOKING ===== */}
        <section className="section" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">CARA KERJA //</span>
              <h2 className="section-title">Cara Booking Service AC</h2>
            </div>
            <div className="steps-grid">
              <div className="step-card"><div className="step-num">01</div><h3>Chat WhatsApp</h3><p>Hubungi kami via WhatsApp, jelaskan keluhan AC atau layanan yang dibutuhkan.</p></div>
              <div className="step-arrow"><ArrowRight size={24} /></div>
              <div className="step-card"><div className="step-num">02</div><h3>Konsultasi &amp; Jadwal</h3><p>Teknisi kami akan memberikan estimasi biaya dan menjadwalkan kunjungan ke lokasi Anda.</p></div>
              <div className="step-arrow"><ArrowRight size={24} /></div>
              <div className="step-card"><div className="step-num">03</div><h3>Teknisi Datang</h3><p>Teknisi datang tepat waktu, melakukan pengecekan, pengerjaan rapi, dan memberikan garansi.</p></div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">FAQ //</span>
              <h2 className="section-title">Pertanyaan Seputar Service AC Kediri</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-card">
                <div className="faq-num">01</div>
                <h3>Berapa harga service AC di Kediri?</h3>
                <p>Harga tergantung jenis layanan, ukuran PK, kondisi unit, dan lokasi. Untuk cuci AC mulai dari Rp 50.000-an, sedangkan perbaikan dan pengisian freon menyesuaikan hasil pengecekan teknisi.</p>
              </div>
              <div className="faq-card">
                <div className="faq-num">02</div>
                <h3>Apakah bisa panggilan ke rumah?</h3>
                <p>Ya, teknisi Lintang AC Kediri melayani service AC panggilan ke rumah, kantor, ruko, kos, dan tempat usaha di area Kediri Kota dan Kabupaten.</p>
              </div>
              <div className="faq-card">
                <div className="faq-num">03</div>
                <h3>Apakah service AC bergaransi?</h3>
                <p>Ya, pengerjaan tertentu mendapatkan garansi sesuai jenis layanan dan kondisi unit. Kami menjunjung transparansi harga tanpa biaya tersembunyi.</p>
              </div>
              <div className="faq-card">
                <div className="faq-num">04</div>
                <h3>Kapan AC perlu dicuci?</h3>
                <p>Umumnya AC perlu dicuci setiap 2–3 bulan, terutama jika dipakai setiap hari, ruangan berdebu, atau AC mulai kurang dingin dan berbau.</p>
              </div>
              <div className="faq-card">
                <div className="faq-num">05</div>
                <h3>Apakah bisa service AC hari Minggu?</h3>
                <p>Ya, Lintang AC Kediri buka setiap hari termasuk hari Minggu dan libur nasional sampai pukul 22.00 WIB.</p>
              </div>
              <div className="faq-card">
                <div className="faq-num">06</div>
                <h3>Bagaimana cara booking?</h3>
                <p>Cukup klik tombol "Booking Service AC" di halaman ini, isi form singkat, dan pesan Anda akan langsung terkirim ke WhatsApp teknisi kami.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== KONTAK & MAP ===== */}
        <section id="kontak" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">HUBUNGI KAMI //</span>
              <h2 className="section-title">Kontak &amp; Lokasi</h2>
            </div>
            <div className="contact-container">
              <div className="contact-info-card">
                <div className="contact-item"><div className="contact-icon-wrapper"><MapPin size={24} /></div><div><h4>Lokasi Bengkel</h4><p>{business.address}</p></div></div>
                <div className="contact-item"><div className="contact-icon-wrapper"><Clock size={24} /></div><div><h4>Jam Operasional</h4><p>{business.openingHours}</p></div></div>
                <div className="contact-item"><div className="contact-icon-wrapper"><Phone size={24} /></div><div><h4>Telepon / WhatsApp</h4><p>{business.phone}</p></div></div>
                <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <WhatsAppButton mode="form" label="Booking Service AC" style={{ width: '100%', textAlign: 'center' }} />
                  <WhatsAppButton mode="direct" label="Chat Langsung" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }} />
                </div>
              </div>
              <div className="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5734777489715!2d112.05102099999999!3d-7.8348838999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78571ee9cfcee7%3A0xceb1af3cb8cb9efa!2sSERVICE%20AC%20KEDIRI%20-%20LINTANG%20AC%20KEDIRI!5e0!3m2!1sid!2sid!4v1777898203808!5m2!1sid!2sid" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peta Lokasi Lintang AC Kediri"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
