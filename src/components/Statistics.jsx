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
    value: 20, // Angka statis (misal jumlah project ML)
    suffix: '+',
    color: 'var(--color-neon-blue)', // Warna Donat Biru
    desc: 'Completed Projects'
  },
  {
    title: 'Tech Skills',
    value: 75, // Persentase skill desain
    suffix: '%',
    color: '#00f2fe', // Warna Donat Cyan/Biru Muda (buat variasi neon)
    desc: 'Proficiency in Modern Technologies'
  },
];

function StatCard({ stat, index, compact = false }) {
  const strokeDashoffset = 440 - (440 * stat.value) / 100;

  if (compact) {
    return (
      <div
        className="flex min-w-[220px] flex-col items-center px-4 py-5"
        data-aos="fade-up"
        data-aos-delay={100 + index * 60}
        data-aos-duration="600"
      >
        <div className="relative mb-4 flex h-24 w-24 items-center justify-center">
          <svg className="h-full w-full -rotate-90">
            <circle
              className="fill-none stroke-gray-800"
              cx="48"
              cy="48"
              r="38"
              strokeWidth="10"
            />
            <circle
              className="fill-none transition-[stroke-dashoffset] duration-1000 ease-out"
              style={{
                stroke: stat.color,
                strokeDasharray: 240,
                strokeDashoffset: index === 0 || index === 2 ? 240 - (240 * stat.value) / 100 : 0,
              }}
              cx="48"
              cy="48"
              r="38"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute flex items-baseline gap-1">
            <span className="text-[1.7rem] font-black leading-none text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              {stat.value}
            </span>
            <span className="text-lg font-black leading-none" style={{ color: stat.color }}>
              {stat.suffix}
            </span>
          </div>
        </div>

        <h4 className="mb-1 text-[0.72rem] font-black uppercase tracking-[0.13em]" style={{ color: stat.color }}>
          {stat.title}
        </h4>
        <p className="max-w-[180px] text-center text-[0.62rem] leading-4 text-slate-400">
          {stat.desc}
        </p>
      </div>
    );
  }

  return (
    <div
      key={index}
      className="flex flex-col items-center group"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="600"
    >
      <div className="relative mb-6 flex h-36 w-36 items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <svg className="h-full w-full -rotate-90">
          <circle
            className="fill-none stroke-gray-800"
            cx="72"
            cy="72"
            r="56"
            strokeWidth="12"
          />
          <circle
            className="fill-none transition-[stroke-dashoffset] duration-1000 ease-out"
            style={{
              stroke: stat.color,
              strokeDasharray: 440,
              strokeDashoffset: index === 0 || index === 2 ? strokeDashoffset : 0,
            }}
            cx="72"
            cy="72"
            r="56"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute flex items-baseline gap-1">
          <span className="text-5xl font-black text-neon-purple drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            {stat.value}
          </span>
          <span className="text-2xl font-black text-gray-500" style={{ color: stat.color }}>
            {stat.suffix}
          </span>
        </div>
      </div>

      <h4 className="mb-2 text-xl font-black uppercase tracking-tight text-white" style={{ color: stat.color }}>
        {stat.title}
      </h4>
      <p className="max-w-xs text-sm font-medium text-gray-400">
        {stat.desc}
      </p>
    </div>
  );
}

export default function Statistics() {
  const mobileStats = [...stats, ...stats];

  return (
    <section className="py-14 relative z-10 overflow-hidden">
      <div className="hidden md:block">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 text-center md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>

      <div className="block overflow-hidden md:hidden">
        <div className="mobile-stats-track flex w-max items-center gap-4 px-4">
          {mobileStats.map((stat, index) => (
            <StatCard key={`${stat.title}-${index}`} stat={stat} index={index % stats.length} compact />
          ))}
        </div>
      </div>
    </section>
  );
}