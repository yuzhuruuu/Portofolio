import React from 'react';

// === DATA STATISTIK PRIBADI KAMU ===
// Kamu bisa ganti angka-angka ini sesuai dengan data aslimu
const stats = [
  {
    title: 'Experience',
    value: 2, // Persentase skill/keyakinan dalam %
    suffix: '+',
    color: 'var(--color-neon-purple)', // Warna Donat Ungu
    desc: 'Exploring IT & Computer Science'
  },
  {
    title: 'Project',
    value: 15, // Angka statis (misal jumlah project ML)
    suffix: '+',
    color: 'var(--color-neon-blue)', // Warna Donat Biru
    desc: 'Completed Projects'
  },
  {
    title: 'Tech Skills',
    value: 90, // Persentase skill desain
    suffix: '%',
    color: '#00f2fe', // Warna Donat Cyan/Biru Muda (buat variasi neon)
    desc: 'Proficiency in Modern Technologies'
  },
];

export default function Statistics() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {stats.map((stat, i) => {
          const strokeDashoffset = 440 - (440 * stat.value) / 100;

          return (
            <div key={i} className="flex flex-col items-center group"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            >
              
              {/* === DIAGRAM DONAT CSS === */}
              <div className="relative w-48 h-48 mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                
                {/* SVG Lingkaran sebagai Progress Bar */}
                <svg className="w-full h-full -rotate-90">
                  {/* Lingkaran Background Donat (Abu-abu) */}
                  <circle
                    className="stroke-gray-800 fill-none"
                    cx="96"
                    cy="96"
                    r="70"
                    strokeWidth="15"
                  />
                  {/* Lingkaran Progress Donat (Berwarna Neon) */}
                  <circle
                    className="fill-none transition-[stroke-dashoffset] duration-1000 ease-out"
                    style={{
                      stroke: stat.color,
                      strokeDasharray: 440,
                      strokeDashoffset: i === 0 || i === 2 ? strokeDashoffset : 0, // Diagram % buat stats 1 & 3
                    }}
                    cx="96"
                    cy="96"
                    r="70"
                    strokeWidth="15"
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* === TEKS DI TENGAH DONAT === */}
                <div className="absolute flex items-baseline gap-1">
                  {/* Angka Utama */}
                  <span className="text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                    {stat.value}
                  </span>
                  {/* Simbol (% atau +) */}
                  <span className="text-3xl font-black text-gray-500" style={{color: stat.color}}>
                    {stat.suffix}
                  </span>
                </div>
              </div>
              
              {/* === JUDUL & DESKRIPSI DI BAWAH DONAT === */}
              <h4 className="text-2xl font-black tracking-tight text-white mb-2 uppercase" style={{color: stat.color}}>
                {stat.title}
              </h4>
              <p className="text-gray-400 font-medium max-w-xs">
                {stat.desc}
              </p>
            </div>
          );
        })}
        
      </div>
    </section>
  );
}