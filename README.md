# 🌟 OSIS & MPK SMKN 65 Jakarta - Official Website (Modern Edition)

Website profil resmi Organisasi Siswa Intra Sekolah (OSIS) dan Majelis Perwakilan Kelas (MPK) SMK Negeri 65 Jakarta dengan standar teknologi web 2026.

## ⚡ Tech Stack Dewa 2026
- **Core Framework**: [Astro 5](https://astro.build) (Islands Architecture, Zero-JS by default)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Rust-powered ultra-fast compiler)
- **Language**: TypeScript (Strict typing)
- **Image Engine**: Astro Image (`astro:assets` powered by Sharp) untuk konversi otomatis seluruh foto mentah ke WebP/AVIF responsif
- **Typography**: Plus Jakarta Sans (Headings & UI) + Geist Sans (Body text)
- **Icons**: Lucide Icons (Tree-shakable SVG)
- **Deployment**: Vercel Ready (Zero-config)

## 📂 Struktur Proyek
```text
ospk-modern/
├── public/                # Aset statis (favicon, logo)
├── src/
│   ├── assets/            # Gambar foto kegiatan & sejarah asli (otomatis di-compress ke WebP)
│   ├── components/        # Komponen modular (Navbar, Hero, VisiMisi, BentoKegiatan, SejarahTimeline, Galeri, Kontak, Footer)
│   ├── data/              # Data terpisah dari tampilan (siteConfig, kegiatanList, sejarahTimeline, visiMisiData)
│   ├── layouts/           # Base Layout & SEO metadata
│   ├── styles/            # Tailwind v4 Global CSS & Glassmorphism
│   └── pages/             # index.astro (Landing page)
├── astro.config.mjs
└── package.json
```

## 🚀 Cara Menjalankan Secara Lokal
```bash
# 1. Masuk ke folder proyek
cd ospk-modern

# 2. Jalankan server development
npm run dev

# 3. Atau buat bundle build produksi
npm run build
npm run preview
```

## 🌐 Deploy ke Vercel (1-Klik)
1. Push repositori ini ke GitHub (`git init`, `git add .`, `git commit -m "feat: modernize OSPK website"`, `git push`).
2. Buka [Vercel](https://vercel.com) -> Klik **"Add New Project"** -> Pilih repositori GitHub ini.
3. Framework Preset akan otomatis terdeteksi sebagai **Astro**.
4. Klik **Deploy**! Website akan langsung live dalam beberapa detik.
