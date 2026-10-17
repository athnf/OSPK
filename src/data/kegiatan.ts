import ldksImg from '../assets/kegiatan/ldks.jpg';
import ldkoImg from '../assets/kegiatan/ldko.jpg';
import mplsImg from '../assets/kegiatan/mpls.jpg';
import amansiveImg from '../assets/kegiatan/amansive.jpg';
import classmeetImg from '../assets/kegiatan/classmeet.jpg';
import israMirajImg from '../assets/kegiatan/isra-miraj.jpg';
import type { ImageMetadata } from 'astro';

export interface KegiatanItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: ImageMetadata;
  tag: string;
}

export const kegiatanList: KegiatanItem[] = [
  {
    id: "ldks",
    title: "Latihan Dasar Kepemimpinan Siswa (LDKS)",
    subtitle: "Pembekalan Calon Pengurus",
    category: "Kepemimpinan",
    description: "Kegiatan pembekalan dasar kedisiplinan, materi keorganisasian, dan latihan baris-berbaris untuk calon anggota pengurus baru.",
    image: ldksImg,
    tag: "Agenda Tahunan",
  },
  {
    id: "mpls",
    title: "Masa Pengenalan Lingkungan Sekolah (MPLS)",
    subtitle: "Penyambutan Siswa Baru Kelas X",
    category: "Kesiswaan",
    description: "Pengenalan denah gedung, tata tertib, dewan guru, dan pengenalan jurusan bagi seluruh siswa baru yang baru masuk SMKN 65.",
    image: mplsImg,
    tag: "Awal Semester Ganjil",
  },
  {
    id: "amansive",
    title: "AMANSIVE (HUT SMKN 65)",
    subtitle: "Peringatan Hari Ulang Tahun Sekolah",
    category: "Pentas Seni",
    description: "Pentas kreasi seni siswa, pameran hasil karya jurusan, bazar kelas, serta panggung pertunjukan musik antarkelas.",
    image: amansiveImg,
    tag: "Pentas Seni & Bazar",
  },
  {
    id: "classmeet",
    title: "Class Meeting Antarkelas",
    subtitle: "Turnamen Olahraga & Rekreasi Siswa",
    category: "Kompetisi",
    description: "Pertandingan olahraga seperti futsal, voli, serta lomba permainan antarkelas yang digelar setelah pekan penilaian akhir semester.",
    image: classmeetImg,
    tag: "Akhir Semester",
  },
  {
    id: "ldko",
    title: "Latihan Dasar Kepemimpinan Organisasi (LDKO)",
    subtitle: "Penyusunan Proposal & Administrasi",
    category: "Kepemimpinan",
    description: "Pelatihan penyusunan rencana anggaran biaya, proposal kegiatan, dan mekanisme administrasi surat-menyurat OSIS dan MPK.",
    image: ldkoImg,
    tag: "Internal Pengurus",
  },
  {
    id: "isra-miraj",
    title: "Peringatan Isra Mi'raj",
    subtitle: "Kegiatan Keagamaan Sekolah",
    category: "Keagamaan",
    description: "Peringatan hari besar keagamaan berupa ceramah keagamaan, doa bersama, dan pembinaan budi pekerti di lingkungan sekolah.",
    image: israMirajImg,
    tag: "Peringatan Hari Besar",
  },
];
