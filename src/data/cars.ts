export interface Car {
  id: number;
  name: string;
  image: string;
  price24h: string;
  available: boolean;
}

export const cars = [
  // ======================
  //       CITY CAR
  // ======================
  {
    id: 1,
    name: "Ayla (AT/MT)",
    image: "/src/assets/cars/Ayla ATMT.png",
    price24h: "Rp 300.000",
    available: true,
  },
  {
    id: 2,
    name: "Agya (AT/MT)",
    image: "/src/assets/cars/Agya ATMT.png",
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 3,
    name: "Brio (AT/MT)",
    image: "/src/assets/cars/Brio ATMT.png",
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 4,
    name: "New Brio (AT)",
    image: "/src/assets/cars/New Brio AT.png",
    price24h: "Rp 400.000",
    available: true,
  },
  {
    id: 5,
    name: "Jazz (AT/MT)",
    image: "/src/assets/cars/Jazz ATMT.png",
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 6,
    name: "Yaris (AT/MT)",
    image: "/src/assets/cars/Yaris ATMT.png",
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 7,
    name: "Raize (AT)",
    image: "/src/assets/cars/Raize AT.png",
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 8,
    name: "City (AT)",
    image: "/src/assets/cars/City AT.png",
    price24h: "Rp 550.000",
    available: true,
  },

  // ======================
  //       FAMILY CAR
  // ======================
  {
    id: 9,
    name: "Calya (AT/MT)",
    image: "/src/assets/cars/Calya ATMT.png",
    price24h: "Rp 300.000",
    available: true,
  },
  {
    id: 10,
    name: "Sigra (AT/MT)",
    image: "/src/assets/cars/Sigra ATMT.png",
    price24h: "Rp 300.000",
    available: true,
  },
  {
    id: 11,
    name: "Avanza (AT/MT)",
    image: "/src/assets/cars/Avanza ATMT.png",
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 12,
    name: "Xenia (AT/MT)",
    image: "/src/assets/cars/Xenia ATMT.png",
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 13,
    name: "Mobilio (MT)",
    image: "/src/assets/cars/Mobilio MT.png",
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 14,
    name: "Mobilio (AT)",
    image: "/src/assets/cars/Mobilio AT.png",
    price24h: "Rp 400.000",
    available: true,
  },
  {
    id: 15,
    name: "Ertiga (AT/MT)",
    image: "/src/assets/cars/Ertiga ATMT.png",
    price24h: "Rp 450.000",
    available: true,
  },
  {
    id: 16,
    name: "New Xenia (AT/MT)",
    image: "/src/assets/cars/New Xenia ATMT.png",
    price24h: "Rp 450.000",
    available: true,
  },
  {
    id: 17,
    name: "New Rush (AT/MT)",
    image: "/src/assets/cars/New Rush ATMT.png",
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 18,
    name: "New Terios (AT/MT)",
    image: "/src/assets/cars/New Terios ATMT.png",
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 19,
    name: "New Avanza (AT/MT)",
    image: "/src/assets/cars/New Avanza ATMT.png",
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 20,
    name: "Xpander (AT/MT)",
    image: "/src/assets/cars/Xpander ATMT.png",
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 21,
    name: "Sienta (AT/MT)",
    image: "/src/assets/cars/Sienta ATMT.png",
    price24h: "Rp 500.000",
    available: true,
  },
  {
    id: 22,
    name: "New Livina (AT)",
    image: "/src/assets/cars/New Livina AT.png",
    price24h: "Rp 500.000",
    available: true,
  },

  // ======================
  //       PREMIUM CAR
  // ======================
  {
    id: 23,
    name: "HRV Old 2020 (AT)",
    image: "/src/assets/cars/HRV Old 2020 AT.png",
    price24h: "Rp 650.000",
    available: true,
  },
  {
    id: 24,
    name: "Innova Reborn (AT/MT)",
    image: "/src/assets/cars/Innova Reborn ATMT.png",
    price24h: "Rp 650.000",
    available: true,
  },
  {
    id: 25,
    name: "Innova Reborn FC (AT)",
    image: "/src/assets/cars/Innova Reborn FC AT.png",
    price24h: "Rp 750.000",
    available: true,
  },
  {
    id: 26,
    name: "New HRV Panoramic (AT)",
    image: "/src/assets/cars/New HRV Panoramic AT.png",
    price24h: "Rp 850.000",
    available: true,
  },
  {
    id: 27,
    name: "Innova Zenix (AT)",
    image: "/src/assets/cars/Innova Zenix AT.png",
    price24h: "Rp 1.000.000",
    available: true,
  },
  {
    id: 28,
    name: "Civic (AT/MT)",
    image: "/src/assets/cars/Civic ATMT.png",
    price24h: "Rp 1.250.000",
    available: true,
  },
  {
    id: 29,
    name: "Fortuner VRZ (AT)",
    image: "/src/assets/cars/Fortuner VRZ AT.png",
    price24h: "Rp 1.250.000",
    available: true,
  },
  {
    id: 30,
    name: "Pajero (AT)",
    image: "/src/assets/cars/Pajero AT.png",
    price24h: "Rp 1.350.000",
    available: true,
  },
  {
    id: 31,
    name: "Fortuner GR (AT)",
    image: "/src/assets/cars/Fortuner GR AT.png",
    price24h: "Rp 1.350.000",
    available: true,
  },
  {
    id: 32,
    name: "Hilux (AT/MT)",
    image: "/src/assets/cars/Hilux ATMT.png",
    price24h: "Rp 1.500.000",
    available: true,
  },
  {
    id: 33,
    name: "Camry (AT/MT)",
    image: "/src/assets/cars/Camry ATMT.png",
    price24h: "Rp 1.800.000",
    available: true,
  },
  {
    id: 34,
    name: "Alphard (AT)",
    image: "/src/assets/cars/Alphard AT.png",
    price24h: "Rp 3.500.000",
    available: true,
  },
];
