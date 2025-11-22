// Import semua gambar mobil
// CITY CAR
import aylaImage from "@/assets/cars/Ayla ATMT.png";
import agyaImage from "@/assets/cars/Agya ATMT.png";
import brioImage from "@/assets/cars/Brio ATMT.png";
import newBrioImage from "@/assets/cars/New Brio AT.png";
import jazzImage from "@/assets/cars/Jazz ATMT.png";
import yarisImage from "@/assets/cars/Yaris ATMT.png";
import raizeImage from "@/assets/cars/Raize AT.png";
import cityImage from "@/assets/cars/City AT.png";

// FAMILY CAR
import calyaImage from "@/assets/cars/Calya ATMT.png";
import sigraImage from "@/assets/cars/Sigra ATMT.png";
import avanzaImage from "@/assets/cars/Avanza ATMT.png";
import xeniaImage from "@/assets/cars/Xenia ATMT.png";
import mobilioMtImage from "@/assets/cars/Mobilio MT.png";
import mobilioAtImage from "@/assets/cars/Mobilio AT.png";
import ertigaImage from "@/assets/cars/Ertiga ATMT.png";
import newXeniaImage from "@/assets/cars/New Xenia ATMT.png";
import newRushImage from "@/assets/cars/New Rush ATMT.png";
import newTeriosImage from "@/assets/cars/New Terios ATMT.png";
import newAvanzaImage from "@/assets/cars/New Avanza ATMT.png";
import xpanderImage from "@/assets/cars/Xpander ATMT.png";
import sientaImage from "@/assets/cars/Sienta ATMT.png";
import newLivinaImage from "@/assets/cars/New Livina AT.png";

// PREMIUM CAR
import hrvOldImage from "@/assets/cars/HRV Old 2020 AT.png";
import innovaRebornImage from "@/assets/cars/Innova Reborn ATMT.png";
import innovaRebornFcImage from "@/assets/cars/Innova Reborn FC AT.png";
import newHrvImage from "@/assets/cars/New HRV Panoramic AT.png";
import innovaZenixImage from "@/assets/cars/Innova Zenix AT.png";
import civicImage from "@/assets/cars/Civic ATMT.png";
import fortunerVrzImage from "@/assets/cars/Fortuner VRZ AT.png";
import pajeroImage from "@/assets/cars/Pajero AT.png";
import fortunerGrImage from "@/assets/cars/Fortuner GR AT.png";
import hiluxImage from "@/assets/cars/Hilux ATMT.png";
import camryImage from "@/assets/cars/Camry ATMT.png";
import alphardImage from "@/assets/cars/Alphard AT.png";

export interface Car {
  id: number;
  name: string;
  image: string;
  price24h: string;
  available: boolean;
}

export const cars: Car[] = [
  // ======================
  //       CITY CAR
  // ======================
  {
    id: 1,
    name: "Ayla (AT/MT)",
    image: aylaImage,
    price24h: "Rp 300.000",
    available: true,
  },
  {
    id: 2,
    name: "Agya (AT/MT)",
    image: agyaImage,
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 3,
    name: "Brio (AT/MT)",
    image: brioImage,
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 4,
    name: "New Brio (AT)",
    image: newBrioImage,
    price24h: "Rp 400.000",
    available: true,
  },
  {
    id: 5,
    name: "Jazz (AT/MT)",
    image: jazzImage,
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 6,
    name: "Yaris (AT/MT)",
    image: yarisImage,
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 7,
    name: "Raize (AT)",
    image: raizeImage,
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 8,
    name: "City (AT)",
    image: cityImage,
    price24h: "Rp 550.000",
    available: true,
  },

  // ======================
  //       FAMILY CAR
  // ======================
  {
    id: 9,
    name: "Calya (AT/MT)",
    image: calyaImage,
    price24h: "Rp 300.000",
    available: true,
  },
  {
    id: 10,
    name: "Sigra (AT/MT)",
    image: sigraImage,
    price24h: "Rp 300.000",
    available: true,
  },
  {
    id: 11,
    name: "Avanza (AT/MT)",
    image: avanzaImage,
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 12,
    name: "Xenia (AT/MT)",
    image: xeniaImage,
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 13,
    name: "Mobilio (MT)",
    image: mobilioMtImage,
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 14,
    name: "Mobilio (AT)",
    image: mobilioAtImage,
    price24h: "Rp 400.000",
    available: true,
  },
  {
    id: 15,
    name: "Ertiga (AT/MT)",
    image: ertigaImage,
    price24h: "Rp 450.000",
    available: true,
  },
  {
    id: 16,
    name: "New Xenia (AT/MT)",
    image: newXeniaImage,
    price24h: "Rp 450.000",
    available: true,
  },
  {
    id: 17,
    name: "New Rush (AT/MT)",
    image: newRushImage,
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 18,
    name: "New Terios (AT/MT)",
    image: newTeriosImage,
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 19,
    name: "New Avanza (AT/MT)",
    image: newAvanzaImage,
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 20,
    name: "Xpander (AT/MT)",
    image: xpanderImage,
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 21,
    name: "Sienta (AT/MT)",
    image: sientaImage,
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 22,
    name: "New Livina (AT)",
    image: newLivinaImage,
    price24h: "Rp 500.000",
    available: true,
  },

  // ======================
  //       PREMIUM CAR
  // ======================
  {
    id: 23,
    name: "HRV Old 2020 (AT)",
    image: hrvOldImage,
    price24h: "Rp 650.000",
    available: true,
  },
  {
    id: 24,
    name: "Innova Reborn (AT/MT)",
    image: innovaRebornImage,
    price24h: "Rp 650.000",
    available: true,
  },
  {
    id: 25,
    name: "Innova Reborn FC (AT)",
    image: innovaRebornFcImage,
    price24h: "Rp 750.000",
    available: true,
  },
  {
    id: 26,
    name: "New HRV Panoramic (AT)",
    image: newHrvImage,
    price24h: "Rp 850.000",
    available: true,
  },
  {
    id: 27,
    name: "Innova Zenix (AT)",
    image: innovaZenixImage,
    price24h: "Rp 1.000.000",
    available: true,
  },
  {
    id: 28,
    name: "Civic (AT/MT)",
    image: civicImage,
    price24h: "Rp 1.250.000",
    available: true,
  },
  {
    id: 29,
    name: "Fortuner VRZ (AT)",
    image: fortunerVrzImage,
    price24h: "Rp 1.250.000",
    available: true,
  },
  {
    id: 30,
    name: "Pajero (AT)",
    image: pajeroImage,
    price24h: "Rp 1.350.000",
    available: true,
  },
  {
    id: 31,
    name: "Fortuner GR (AT)",
    image: fortunerGrImage,
    price24h: "Rp 1.350.000",
    available: true,
  },
  {
    id: 32,
    name: "Hilux (AT/MT)",
    image: hiluxImage,
    price24h: "Rp 1.500.000",
    available: true,
  },
  {
    id: 33,
    name: "Camry (AT/MT)",
    image: camryImage,
    price24h: "Rp 1.800.000",
    available: true,
  },
  {
    id: 34,
    name: "Alphard (AT)",
    image: alphardImage,
    price24h: "Rp 3.500.000",
    available: true,
  },
];
