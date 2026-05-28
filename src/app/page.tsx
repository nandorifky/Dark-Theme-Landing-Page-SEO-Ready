import { MapPin, Phone, Clock, Star, Wind, Thermometer, CheckCircle, Wrench, MessageCircle, Shield, Zap, ThumbsUp, AlertTriangle, ArrowRight, Lightbulb } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import WhatsAppButton from '../components/WhatsAppButton';
import Script from 'next/script';
import Image from 'next/image';
import { BUSINESS, REVIEWS, PRICING, FAQS, TIPS, BRANDS, SERVICE_AREAS, PROBLEMS } from '../config/site-data';
import { Review } from '../types';
import { generateFullSchema } from '../utils/schema-generator';
import { THEME } from '../config/theme-config';

export default function Home() {
  const jsonLd = generateFullSchema();

  const sectionSubtitleStyle = { fontFamily: THEME.typography.fontFamily.mono, fontSize: '13px', opacity: 0.6 };
  const textSecondaryStyle = { color: THEME.colors.text.secondary };
  const borderBottomStyle = { borderBottom: `1px solid ${THEME.colors.border}` };
  const accentColorStyle = { color: THEME.colors.accent.main };

  return (
    <>
      <Script id="schema-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <span className="hero-badge"><Zap size={14} /> TEKNISI DATANG KE LOKASI ANDA</span>
              <h1>Service AC Panggilan Cepat &amp; Bergaransi</h1>
              <p>Demo AC Service melayani cuci AC, perbaikan AC tidak dingin, AC bocor, isi freon, bongkar pasang, dan instalasi AC untuk rumah, kantor, ruko, hingga kos. Teknisi datang ke lokasi, pengerjaan rapi, harga transparan, dan bergaransi.</p>
              <div className="hero-actions">
                <WhatsAppButton mode="form" label="Booking Service AC" />
                <WhatsAppButton mode="direct" label="Chat Langsung" className="btn btn-secondary" />
              </div>
            </div>
            <div className="hero-image-wrapper">
              <Image
                src="/images/Teknisi-Service-AC.webp"
                alt="Teknisi service AC - Demo AC Service"
                width={600}
                height={400}
                priority
                style={{ width: '100%', height: 'auto' }}
              />            </div>
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

        {/* ===== BRAND SECTION ===== */}
        <section className="section" style={{ padding: '40px 0', ...borderBottomStyle }}>
          <div className="container">
            <p style={{ textAlign: 'center', marginBottom: '20px', ...sectionSubtitleStyle }}>MERK AC YANG KAMI TANGANI</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', opacity: 0.5 }}>
              {BRANDS.map(brand => (
                <span key={brand} style={{ fontFamily: THEME.typography.fontFamily.heading, fontWeight: 700, fontSize: '18px' }}>{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LAYANAN SERVICE AC ===== */}
        <section id="layanan" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">LAYANAN KAMI</span>
              <h2 className="section-title">Layanan Service AC Kami</h2>
            </div>
            <div className="services-grid-full">
              <div className="service-item-full">
                <div className="service-item-header"><Wind className="service-icon" size={32} /><h3>Cuci AC</h3></div>
                <p>Membersihkan indoor, outdoor, filter, evaporator, blower, dan saluran pembuangan agar AC kembali dingin, tidak bau, dan lebih hemat listrik. Cocok untuk perawatan rutin setiap 2–3 bulan.</p>
              </div>
              <div className="service-item-full">
                <div className="service-item-header"><Wrench className="service-icon" size={32} /><h3>Perbaikan AC Tidak Dingin</h3></div>
                <p>Pengecekan tekanan freon, kapasitor, sensor, kompresor, evaporator, kebocoran pipa, dan komponen kelistrikan. Diagnosa akurat oleh teknisi profesional berpengalaman.</p>
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
                <div className="service-item-header"><CheckCircle className="service-icon" size={32} /><h3>Bongkar Pasang AC</h3></div>
                <p>Relokasi AC rumah, kantor, kos, dan ruko dengan instalasi rapi, pipa tertata, flaring presisi, and pengecekan vakum sistem agar performa optimal.</p>
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
              {PROBLEMS.map((item) => (
                <div key={item} className="problem-item">
                  <AlertTriangle size={18} className="text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ ...textSecondaryStyle, marginTop: '30px', maxWidth: '700px' }}>
              Mengalami salah satu masalah di atas? Langsung hubungi kami untuk pengecekan dan perbaikan di lokasi Anda.
            </p>
          </div>
        </section>

        {/* ===== HARGA ===== */}
        <section id="harga" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">ESTIMASI BIAYA //</span>
              <h2 className="section-title">Harga Service AC Kami</h2>
            </div>
            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr><th>Layanan</th><th>Estimasi Harga</th></tr>
                </thead>
                <tbody>
                  {PRICING.map((item) => (
                    <tr key={item.layanan}><td>{item.layanan}</td><td className="text-accent">{item.harga}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pricing-note">* Harga dapat berubah sesuai kondisi AC, jarak lokasi, jenis freon, and kebutuhan sparepart. Konsultasi awal via WhatsApp <strong>gratis</strong>.</p>
          </div>
        </section>

        {/* ===== EDUKASI/TIPS SECTION ===== */}
        <section className="section" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">EDUKASI //</span>
              <h2 className="section-title">Tips Merawat AC Agar Awet</h2>
            </div>
            <div className="features-grid">
              {TIPS.map(tip => (
                <div key={tip.title} className="feature-card">
                  <div className="feature-icon-wrapper">
                    {tip.icon === 'AlertTriangle' && <AlertTriangle size={28} />}
                    {tip.icon === 'Zap' && <Zap size={28} />}
                    {tip.icon === 'Wind' && <Wind size={28} />}
                  </div>
                  <h3>{tip.title}</h3>
                  <p>{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== KEUNGGULAN ===== */}
        <section id="keunggulan" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">MENGAPA KAMI? //</span>
              <h2 className="section-title">Keunggulan Demo AC Service</h2>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-wrapper"><ThumbsUp size={28} /></div>
                <h3>Teknisi Profesional &amp; Ramah</h3>
                <p>Tim ahli yang terlatih, bekerja dengan SOP kebersihan tinggi, and mengedukasi pelanggan dengan transparan tentang kondisi AC.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper"><Shield size={28} /></div>
                <h3>Bergaransi &amp; Transparan</h3>
                <p>Setiap pengerjaan service maupun instalasi AC dilindungi garansi. Tanpa biaya tersembunyi, harga diinformasikan sebelum pengerjaan.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper"><Zap size={28} /></div>
                <h3>Pengerjaan Cepat Kilat</h3>
                <p>Respons cepat untuk panggilan darurat. Teknisi kami siap datang ke lokasi tepat waktu sesuai jadwal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== AREA LAYANAN ===== */}
        <section className="section" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">JANGKAUAN //</span>
              <h2 className="section-title">Area Layanan Service AC</h2>
            </div>
            <p style={{ ...textSecondaryStyle, marginBottom: '30px', maxWidth: '800px' }}>
              Kami melayani jasa service AC panggilan di berbagai area dan sekitarnya. Teknisi kami menjangkau seluruh wilayah berikut:
            </p>
            <div className="area-grid">
              {SERVICE_AREAS.map(area => (
                <div key={area} className="area-tag"><MapPin size={14} /> {area}</div>
              ))}
            </div>
            <p style={{ ...textSecondaryStyle, marginTop: '20px', fontSize: '15px' }}>
              Tidak melihat kecamatan Anda? <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent" style={{ textDecoration: 'underline' }}>Tanyakan via WhatsApp</a> — kemungkinan besar kami tetap melayani.
            </p>
          </div>
        </section>

        {/* ===== GALERI BEFORE-AFTER ===== */}
        <section id="galeri" className="section gallery-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle" style={{ ...accentColorStyle }}>BUKTI KERJA NYATA //</span>
              <h2 className="section-title">Galeri Hasil Cuci AC</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '12px' }}>Geser garis pembatas untuk melihat perbedaan sebelum and sesudah AC dicuci oleh teknisi kami.</p>
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
              <h2 className="section-title">Testimoni Pelanggan Demo AC Service</h2>
            </div>
            <div className="reviews-grid">
              {REVIEWS.map((review: Review) => (
                <div key={review._id} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-avatar">{review.authorName.charAt(0)}</div>
                    <div className="reviewer-info">
                      <h4>{review.authorName}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="stars">{Array.from({ length: review.rating }).map(() => '★').join('')}</div>
                        <span style={{ fontSize: '13px', ...textSecondaryStyle, fontFamily: THEME.typography.fontFamily.mono }}>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="review-text">"{review.text}"</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Star size={18} /> 345+ Ulasan di Google Maps
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
              <div className="step-card"><div className="step-num">02</div><h3>Konsultasi &amp; Jadwal</h3><p>Teknisi kami akan memberikan estimasi biaya and menjadwalkan kunjungan ke lokasi Anda.</p></div>
              <div className="step-arrow"><ArrowRight size={24} /></div>
              <div className="step-card"><div className="step-num">03</div><h3>Teknisi Datang</h3><p>Teknisi datang tepat waktu, melakukan pengecekan, pengerjaan rapi, and memberikan garansi.</p></div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">FAQ //</span>
              <h2 className="section-title">Pertanyaan Seputar Service AC Kami</h2>
            </div>
            <div className="faq-grid">
              {FAQS.map((faq, index) => (
                <div key={index} className="faq-card">
                  <div className="faq-num">0{index + 1}</div>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
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
                <div className="contact-item"><div className="contact-icon-wrapper"><MapPin size={24} /></div><div><h4>Lokasi Bengkel</h4><p>{BUSINESS.address}</p></div></div>
                <div className="contact-item"><div className="contact-icon-wrapper"><Clock size={24} /></div><div><h4>Jam Operasional</h4><p>{BUSINESS.openingHours}</p></div></div>
                <div className="contact-item"><div className="contact-icon-wrapper"><Phone size={24} /></div><div><h4>Telepon / WhatsApp</h4><p>{BUSINESS.phone}</p></div></div>
                <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <WhatsAppButton mode="form" label="Booking Service AC" style={{ width: '100%', textAlign: 'center' }} />
                  <WhatsAppButton mode="direct" label="Chat Langsung" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }} />
                </div>
              </div>
              <div className="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95565!3d-37.8162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMzcuODE2MiDCsCA2MDAuMCdOIDEwLCAxNDQuOTU1N9CBRCDB5iwgOTQyOTEx!5e0!3m2!1id!2sid!4v1234567890" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peta Lokasi Demo AC Service"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
