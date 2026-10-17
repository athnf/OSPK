import hist2020 from '../assets/history/2020.jpeg';
import hist2021 from '../assets/history/2021.jpeg';
import hist2022 from '../assets/history/2022.jpeg';
import hist2023 from '../assets/history/2023.jpeg';
import hist2024 from '../assets/history/2024.jpeg';
import type { ImageMetadata } from 'astro';

export interface SejarahItem {
  year: string;
  theme: string;
  quote: string;
  description: string;
  image: ImageMetadata;
}

export const sejarahTimeline: SejarahItem[] = [
  {
    year: "2020",
    theme: "Kepengurusan Masa Transisi",
    quote: "Langkah awal menuju perubahan yang berarti",
    description: "Penyesuaian pertama format koordinasi siswa secara daring di masa awal pembatasan tatap muka.",
    image: hist2020,
  },
  {
    year: "2021",
    theme: "Koordinasi dan Kegiatan Terbatas",
    quote: "Bersama dalam jarak, bersatu dalam semangat",
    description: "Pelaksanaan program kerja berformat kombinasi daring dan bertahap menjaga komunikasi perwakilan kelas.",
    image: hist2021,
  },
  {
    year: "2022",
    theme: "Kembalinya Kegiatan Lapangan",
    quote: "Merajut asa, menggapai cita bersama",
    description: "Penyelenggaraan kembali kegiatan tatap muka di area sekolah, apel bendera, dan penyambutan siswa baru.",
    image: hist2022,
  },
  {
    year: "2023",
    theme: "Penyegaran Program Antarkelas",
    quote: "Melangkah maju dengan keberanian dan keyakinan",
    description: "Pelaksanaan kembali kegiatan class meeting, perlombaan antarkelas, dan peringatan hari besar secara penuh.",
    image: hist2023,
  },
  {
    year: "2024",
    theme: "Konsolidasi OSIS & MPK",
    quote: "Bersama-sama, kita tulis sejarah baru",
    description: "Peningkatan koordinasi antara pengurus OSIS dan majelis perwakilan kelas dalam mengawal kegiatan kesiswaan sekolah.",
    image: hist2024,
  },
];
