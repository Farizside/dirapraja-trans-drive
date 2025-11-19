export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Tour Travel",
    description: "Layanan wisata dengan paket lengkap ke berbagai destinasi menarik. Nikmati perjalanan yang aman dan nyaman bersama guide berpengalaman.",
    image: "/src/assets/service-tour.jpg",
  },
  {
    id: 2,
    name: "Rent Car",
    description: "Sewa mobil dengan berbagai pilihan kendaraan berkualitas. Tersedia rental harian, mingguan, dan bulanan dengan harga kompetitif.",
    image: "/src/assets/service-rentcar.jpg",
  },
  {
    id: 3,
    name: "Paket KKN",
    description: "Paket transportasi khusus untuk program Kuliah Kerja Nyata (KKN). Solusi praktis dan hemat untuk mobilitas mahasiswa.",
    image: "/src/assets/service-kkn.jpg",
  },
];
