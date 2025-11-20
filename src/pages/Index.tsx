import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Shield, Clock, Users, Mail, Phone, MapPin, CheckCircle, XCircle } from "lucide-react";
import { cars } from "@/data/cars";
import { services } from "@/data/services";
import heroImage from "@/assets/hero-car.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carMpv from "@/assets/car-mpv.jpg";
import logoPlaceholder from "@/assets/logo-placeholder.png";
import iconPlaceholder from "@/assets/icon-placeholder.png";
import serviceTour from "@/assets/service-tour.jpg";
import serviceRentcar from "@/assets/service-rentcar.jpg";
import serviceKkn from "@/assets/service-kkn.jpg";
const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={iconPlaceholder} alt="Dirapraja Trans Icon" className="h-10 w-10 object-contain" />
            <img alt="Dirapraja Trans Logo" src="/lovable-uploads/2f2c01d2-030f-4d9c-86cf-cc0713d6eb10.png" className="h-8 w-16 object-contain" />
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("beranda")} className="text-foreground hover:text-accent transition-colors">
              Beranda
            </button>
            <button onClick={() => scrollToSection("tentang")} className="text-foreground hover:text-accent transition-colors">
              Tentang Kami
            </button>
            <button onClick={() => scrollToSection("layanan")} className="text-foreground hover:text-accent transition-colors">
              Layanan
            </button>
            <button onClick={() => scrollToSection("armada")} className="text-foreground hover:text-accent transition-colors">
              Armada
            </button>
            <button onClick={() => scrollToSection("keunggulan")} className="text-foreground hover:text-accent transition-colors">
              Keunggulan
            </button>
            <button onClick={() => scrollToSection("kontak")} className="text-foreground hover:text-accent transition-colors">
              Kontak
            </button>
          </div>
          <Button onClick={() => scrollToSection("kontak")} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Hubungi Kami
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <img src={logoPlaceholder} alt="Dirapraja Trans Logo" className="h-20 md:h-32 mx-auto mb-6 object-contain" />
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Solusi Transportasi Terpercaya untuk Perjalanan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection("armada")} className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              Lihat Armada
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("kontak")} className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-background/20 text-lg px-8">
              Reservasi Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">Tentang Dirapraja Trans</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Dirapraja Trans adalah perusahaan rental mobil terpercaya yang telah melayani ribuan pelanggan dengan 
              komitmen memberikan layanan transportasi berkualitas tinggi. Kami menyediakan berbagai jenis kendaraan 
              untuk memenuhi kebutuhan perjalanan bisnis maupun liburan Anda.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dengan armada yang terawat dan driver profesional, kami memastikan setiap perjalanan Anda aman, 
              nyaman, dan tepat waktu.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">Layanan Kami</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai layanan transportasi untuk memenuhi kebutuhan perjalanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map(service => {
            const serviceImages: {
              [key: number]: string;
            } = {
              1: serviceTour,
              2: serviceRentcar,
              3: serviceKkn
            };
            return <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in flex flex-col">
                  <div className="aspect-square overflow-hidden">
                    <img src={serviceImages[service.id]} alt={`${service.name} - Layanan transportasi terpercaya`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-auto" onClick={() => scrollToSection("kontak")}>
                      Hubungi Kami
                    </Button>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="armada" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">Armada Kami</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilihan kendaraan berkualitas untuk berbagai kebutuhan perjalanan Anda
            </p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 px-4">
                {cars.map(car => <Card key={car.id} className="flex-shrink-0 w-[320px] overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
                    <div className="aspect-square overflow-hidden relative">
                      <img src={car.image} alt={`${car.name} - Rental mobil terpercaya`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-4 right-4">
                        {car.available ? <Badge className="bg-green-500 hover:bg-green-600 text-white">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Tersedia
                          </Badge> : <Badge variant="destructive">
                            <XCircle className="w-3 h-3 mr-1" />
                            Tidak Tersedia
                          </Badge>}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{car.name}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Rental 24 Jam</p>
                          <p className="text-2xl font-bold text-accent">{car.price24h}</p>
                        </div>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={!car.available} onClick={() => scrollToSection("kontak")}>
                        {car.available ? "Reservasi Sekarang" : "Tidak Tersedia"}
                      </Button>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="keunggulan" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">Mengapa Memilih Kami?</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 animate-fade-in-up">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Armada Terawat</h3>
              <p className="text-muted-foreground">
                Semua kendaraan dalam kondisi prima dan dirawat secara berkala
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in-up">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Aman & Terpercaya</h3>
              <p className="text-muted-foreground">
                Dilengkapi asuransi dan driver berpengalaman untuk keamanan Anda
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in-up">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Layanan 24/7</h3>
              <p className="text-muted-foreground">
                Siap melayani kebutuhan transportasi Anda kapan saja
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in-up">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Driver Profesional</h3>
              <p className="text-muted-foreground">
                Tim driver terlatih dengan pengetahuan rute yang sangat baik
              </p>
            </div>
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
              Siap melayani kebutuhan transportasi Anda. Hubungi kami untuk informasi lebih lanjut atau reservasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telepon</h3>
              <p className="text-primary-foreground/90">+62 812-3456-7890</p>
              <p className="text-primary-foreground/90">+62 821-9876-5432</p>
            </div>

            <div className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-primary-foreground/90">info@diraprajatrans.com</p>
              <p className="text-primary-foreground/90">rental@diraprajatrans.com</p>
            </div>

            <div className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Alamat</h3>
              <p className="text-primary-foreground/90">Jl. Raya Utama No. 123</p>
              <p className="text-primary-foreground/90">Jakarta Selatan, Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-primary-foreground py-8 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Dirapraja Trans</h3>
          <p className="text-primary-foreground/80 mb-4">Solusi Transportasi Terpercaya</p>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Dirapraja Trans. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;