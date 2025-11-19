export interface Car {
  id: number;
  name: string;
  image: string;
  price24h: string;
  available: boolean;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Avanza",
    image: "/src/assets/car-mpv.jpg",
    price24h: "Rp 350.000",
    available: true,
  },
  {
    id: 2,
    name: "Honda CR-V",
    image: "/src/assets/car-suv.jpg",
    price24h: "Rp 550.000",
    available: true,
  },
  {
    id: 3,
    name: "Toyota Camry",
    image: "/src/assets/car-sedan.jpg",
    price24h: "Rp 650.000",
    available: false,
  },
  {
    id: 4,
    name: "Mitsubishi Xpander",
    image: "/src/assets/car-mpv.jpg",
    price24h: "Rp 400.000",
    available: true,
  },
  {
    id: 5,
    name: "Toyota Fortuner",
    image: "/src/assets/car-suv.jpg",
    price24h: "Rp 750.000",
    available: true,
  },
  {
    id: 6,
    name: "Honda Accord",
    image: "/src/assets/car-sedan.jpg",
    price24h: "Rp 700.000",
    available: true,
  },
  {
    id: 7,
    name: "Toyota Innova",
    image: "/src/assets/car-mpv.jpg",
    price24h: "Rp 450.000",
    available: false,
  },
  {
    id: 8,
    name: "Mazda CX-5",
    image: "/src/assets/car-suv.jpg",
    price24h: "Rp 600.000",
    available: true,
  },
  {
    id: 9,
    name: "Mercedes-Benz E-Class",
    image: "/src/assets/car-sedan.jpg",
    price24h: "Rp 1.200.000",
    available: true,
  },
  {
    id: 10,
    name: "Toyota Alphard",
    image: "/src/assets/car-mpv.jpg",
    price24h: "Rp 1.500.000",
    available: false,
  },
];
