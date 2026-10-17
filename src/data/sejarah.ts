import hist2020 from '../assets/history/2020.jpeg';
import hist2021 from '../assets/history/2021.jpeg';
import hist2022 from '../assets/history/2022.jpeg';
import hist2023 from '../assets/history/2023.jpeg';
import type { ImageMetadata } from 'astro';

export interface AngkatanItem {
  period: string; // e.g. "2020/2021"
  generation: string; // e.g. "Angkatan I"
  theme: string;
  quote?: string;
  description: string;
  image?: ImageMetadata;
  status: 'Arsip Terdokumentasi' | 'Masa Bakti Berjalan' | 'Periode Mendatang';
}

export const silsilahAngkatan: AngkatanItem[] = [
  {
    period: "2020/2021",
    generation: "Generasi 2020",
    theme: "Langkah Awal Perubahan",
    quote: "Langkah awal menuju perubahan yang berarti",
    description: "Fondasi adaptasi perdana koordinasi kepengurusan siswa di masa awal transisi digital.",
    image: hist2020,
    status: "Arsip Terdokumentasi",
  },
  {
    period: "2021/2022",
    generation: "Generasi 2021",
    theme: "Solidaritas Dalam Jarak",
    quote: "Bersama dalam jarak, bersatu dalam semangat",
    description: "Konsistensi komunikasi perwakilan kelas dan pelaksanaan program kesiswaan secara bertahap.",
    image: hist2021,
    status: "Arsip Terdokumentasi",
  },
  {
    period: "2022/2023",
    generation: "Generasi 2022",
    theme: "Merajut Asa Bersama",
    quote: "Merajut asa, menggapai cita bersama",
    description: "Kembalinya pelaksanaan kegiatan tatap muka di lingkungan sekolah, apel bendera, dan MPLS.",
    image: hist2022,
    status: "Arsip Terdokumentasi",
  },
  {
    period: "2023/2024",
    generation: "Generasi 2023",
    theme: "Keberanian & Keyakinan",
    quote: "Melangkah maju dengan keberanian dan keyakinan",
    description: "Pelaksanaan kembali kegiatan class meeting, gebyar HUT sekolah, dan turnamen olahraga antarkelas secara penuh.",
    image: hist2023,
    status: "Arsip Terdokumentasi",
  },
  {
    period: "2024/2025",
    generation: "Generasi 2024",
    theme: "Masa Bakti Aktif",
    quote: "Bersama-sama, kita tulis sejarah baru",
    description: "Konsolidasi kepengurusan aktif dalam mengawal agenda tahunan dan aspirasi siswa.",
    status: "Masa Bakti Berjalan",
  },
  {
    period: "2025/2026",
    generation: "Generasi 2025",
    theme: "Kaderisasi & Regenerasi",
    description: "Periode regenerasi estafet kepemimpinan pengurus OSIS dan MPK SMKN 65 Jakarta.",
    status: "Periode Mendatang",
  },
  {
    period: "2026/2027",
    generation: "Generasi 2026",
    theme: "Estafet Kepengurusan",
    description: "Periode kepengurusan masa depan siswa-siswi SMK Negeri 65 Jakarta.",
    status: "Periode Mendatang",
  },
];
