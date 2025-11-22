import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Shield,
  Clock,
  Users,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  Award,
  MapPinCheck,
  FileText,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cars } from "@/data/cars";
import { services } from "@/data/services";
import heroImage from "@/assets/hero-background.png";
import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carMpv from "@/assets/car-mpv.jpg";
import logoPlaceholder from "@/assets/logo-placeholder.png";
import iconPlaceholder from "@/assets/icon-placeholder.png";
import serviceTour from "@/assets/service-tour.png";
import serviceRentcar from "@/assets/service-rentcar.png";
import serviceKkn from "@/assets/service-kkn.png";
import heroCars from "@/assets/hero-cars.png";

const Index = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const whyChooseUs = [
    {
      id: 1,
      title: "Armada Terlengkap dan Terawat",
      description:
        "Kami memiliki 18 unit aktif yang terdiri dari City Car, Family Car dan Premium Car. dan semuanya dirawat secara berkala dengan selalu memperhatikan kondisi unit untuk menjamin keamanan dan kenyamanan Anda di setiap perjalanan.",
      icon: Car,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Layanan Fleksibel",
      description:
        "Kami menawarkan pilihan paket sewa harian, mingguan, dan bulanan dengan opsi layanan lepas kunci atau dengan sopir profesional sehingga Anda bebas menyesuaikan dengan kebutuhan perjalanan pribadi maupun bisnis Anda.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      title: "Lokasi Strategis",
      description:
        "Berdomisili pusat di Tanjungsari, Sumedang, kami memiliki posisi ideal yang dekat dengan kawasan kampus Jatinangor dan akses langsung ke Tol Cisumdawu sehingga memungkinkan kami memberikan layanan antar-jemput yang cepat dan efisien ke Jatinangor, Sumedang, Bandung, hingga Jakarta.",
      icon: MapPinCheck,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      title: "Proses Reservasi Mudah dan Cepat",
      description:
        "Pelanggan dapat melakukan reservasi dan mendapatkan informasi lengkap dengan cepat melalui platform digital kami, seperti Instagram (@diraprajatrans), tiktok (@dirapraja.trans), facebook (Dirapraja Trans) dan website resmi (diraprajatrans.com) tanpa proses yang rumit.",
      icon: FileText,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 5,
      title: "Mitra Perjalanan Terpercaya",
      description:
        "Kami telah berpengalaman melayani perjalanan wisata ke berbagai daerah seperti Banten, Bandung, dan Jawa Tengah, serta melayani kebutuhan transportasi bagi instansi pemerintah dan perusahaan besar, membuktikan keandalan operasional kami.",
      icon: Award,
      color: "from-red-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="h-16 px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              alt="Dirapraja Trans Icon"
              src="/lovable-uploads/5d11893b-9669-4d66-b0c5-966f04a6830f.png"
              className="h-12 w-12 object-contain"
            />
            <img
              alt="Dirapraja Trans Logo"
              src="/lovable-uploads/d905fd36-b154-4730-ab07-c997ccabe553.png"
              className="h-8 object-contain"
            />
          </div>
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("beranda")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("layanan")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("armada")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Armada
            </button>
            <button
              onClick={() => scrollToSection("keunggulan")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Keunggulan
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Kontak
            </button>
          </div>
          <Button
            onClick={() => scrollToSection("kontak")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Hubungi Kami
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="beranda"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/95 to-primary/70"
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="mb-8 flex items-center gap-4">
                <img
                  alt="Dirapraja Trans Logo"
                  className="h-16 md:h-24 object-contain flex-shrink-0"
                  src="/lovable-uploads/5d11893b-9669-4d66-b0c5-966f04a6830f.png"
                />

                <img
                  alt="Dirapraja Trans Text Logo"
                  className="h-12 md:h-16 object-contain"
                  src="/lovable-uploads/d905fd36-b154-4730-ab07-c997ccabe553.png"
                />
              </div>

              <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 leading-relaxed">
                Solusi Transportasi Terpercaya untuk Perjalanan Anda
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("armada")}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-6 py-3 rounded-lg"
                >
                  Lihat Armada
                </Button>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("kontak")}
                  className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-2 border-primary-foreground/50 text-base px-6 py-3 rounded-lg"
                >
                  Reservasi Sekarang
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="animate-fade-in-right hidden lg:flex justify-end items-center">
              <img
                alt="Dirapraja Trans Fleet"
                className="h-96 object-contain drop-shadow-2xl"
                src={heroCars}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Tentang Dirapraja Trans
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dirapraja Trans berdiri sejak tahun 2023 dan telah bertransformasi
              menjadi penyedia jasa Rental Mobil, Tour, dan Travel terkemuka di
              wilayah Sumedang, Jatinangor, dan Bandung. Didirikan dengan nama
              awal Roda Rakyat, perusahaan melakukan rebranding pada tahun 2024
              untuk memperkuat citra profesional dan memperluas jangkauan pasar.
              Nama "Dirapraja" sendiri memiliki makna pemimpin rakyat atau
              pelayan bangsa, yang mencerminkan komitmen kami terhadap
              nilai-nilai Kepemimpinan, Loyalitas, dan Integritas dalam setiap
              pelayanan. Berlokasi strategis di Tanjungsari, Sumedang, kami
              berada dekat dengan kawasan pendidikan besar (UNPAD, ITB, IPDN)
              dan memiliki akses langsung ke Tol Cisumdawu, menjadikan kami
              pilihan utama untuk mobilitas mahasiswa, akademisi, dan wisatawan.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Layanan Kami
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai layanan transportasi untuk memenuhi kebutuhan perjalanan
              Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const serviceImages: {
                [key: number]: string;
              } = {
                1: serviceTour,
                2: serviceRentcar,
                3: serviceKkn,
              };
              return (
                <Card
                  key={service.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in flex flex-col"
                >
                  <div className="overflow-hidden">
                    <img
                      src={serviceImages[service.id]}
                      alt={`${service.name} - Layanan transportasi terpercaya`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {service.description}
                    </p>
                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-auto"
                      onClick={() => scrollToSection("kontak")}
                    >
                      Hubungi Kami
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="armada" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Armada Kami
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilihan kendaraan berkualitas untuk berbagai kebutuhan perjalanan
              Anda
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {cars.map((car) => (
                  <Card
                    key={car.id}
                    className="flex-shrink-0 w-[320px] overflow-hidden hover:shadow-2xl transition-all animate-scale-in bg-background/20 backdrop-blur-xl border-border/30 relative hover:z-10"
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/10 backdrop-blur-sm" />
                      <img
                        src={car.image}
                        alt={`${car.name} - Rental mobil terpercaya`}
                        className="relative z-10 w-full h-full object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl hover:z-20"
                      />
                      <div className="absolute top-4 right-4">
                        {car.available ? (
                          <Badge className="bg-green-500 hover:bg-green-600 text-white">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Tersedia
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <XCircle className="w-3 h-3 mr-1" />
                            Tidak Tersedia
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {car.name}
                      </h3>
                      <div className="mb-4">
                        <p className="text-2xl font-bold text-accent">
                          {car.price24h}/day
                        </p>
                      </div>
                      <Button
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        disabled={!car.available}
                        onClick={() => scrollToSection("kontak")}
                      >
                        {car.available
                          ? "Reservasi Sekarang"
                          : "Tidak Tersedia"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-background shadow-lg"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border hover:bg-background shadow-lg"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="keunggulan"
        className="py-20 bg-gradient-to-b from-background to-muted/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mengapa Memilih Kami?
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Komitmen kami adalah memberikan layanan terbaik dengan standar
              kualitas internasional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-8xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-xl">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Icon Container */}
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-4 leading-snug min-h-[56px] flex items-center">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                        {item.description}
                      </p>

                      {/* Bottom accent line */}
                      <div
                        className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${item.color}`}
                      ></div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Siap melayani kebutuhan transportasi Anda. Hubungi kami untuk
              informasi lebih lanjut atau reservasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
            <div className="flex flex-col p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm text-center min-h-[180px]">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Telepon</h3>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="text-primary-foreground/90">+62 895-2687-1117</p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm text-center min-h-[180px]">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="text-primary-foreground/90">
                  diraprajatrans.archive@gmail.com
                </p>
              </div>
            </div>

            <div className="flex flex-col p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm text-center min-h-[180px]">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Alamat</h3>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="text-primary-foreground/90">
                  Jl Lebakmaja Kaler, Dusun Babakan Asrama. Desa Jatisari,
                  Kecamatan Tanjungsari
                </p>
                <p className="text-primary-foreground/90">
                  (Belakang polsek tanjungsari)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-primary-foreground py-8 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Dirapraja Trans</h3>
          <p className="text-primary-foreground/80 mb-4">
            Solusi Transportasi Terpercaya
          </p>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Dirapraja Trans. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
