import { useEffect } from "react";

export const StructuredData = () => {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://diraprajatrans.com/#organization",
      name: "Dirapraja Trans",
      alternateName: "Dirapraja Trans Rental Mobil",
      description:
        "Rental mobil terpercaya di Bandung dan Sumedang dengan layanan tour travel, sewa mobil harian, dan paket wisata. Armada lengkap dengan driver profesional.",
      url: "https://diraprajatrans.com",
      telephone: "+62-812-3456-7890",
      email: "info@diraprajatrans.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Raya Utama No. 123",
        addressLocality: "Bandung",
        addressRegion: "Jawa Barat",
        postalCode: "40111",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-6.914744",
        longitude: "107.609810",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Bandung",
        },
        {
          "@type": "City",
          name: "Sumedang",
        },
        {
          "@type": "State",
          name: "Jawa Barat",
        },
      ],
      priceRange: "Rp 300.000 - Rp 3.500.000",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      image: [
        "https://diraprajatrans.com/logo.png",
        "https://diraprajatrans.com/hero.jpg",
      ],
      logo: "https://diraprajatrans.com/logo.png",
      sameAs: [
        "https://www.facebook.com/diraprajatrans",
        "https://www.instagram.com/diraprajatrans",
        "https://www.tiktok.com/@diraprajatrans",
      ],
    };

    // Car Rental Service Schema
    const carRentalSchema = {
      "@context": "https://schema.org",
      "@type": "AutoRental",
      name: "Dirapraja Trans - Rental Mobil Bandung Sumedang",
      provider: {
        "@type": "Organization",
        name: "Dirapraja Trans",
        url: "https://diraprajatrans.com",
      },
      areaServed: {
        "@type": "State",
        name: "Jawa Barat",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "IDR",
        lowPrice: "300000",
        highPrice: "3500000",
        offerCount: "34",
      },
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Rental Mobil dan Tour Travel",
      provider: {
        "@type": "Organization",
        name: "Dirapraja Trans",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Bandung",
        },
        {
          "@type": "City",
          name: "Sumedang",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Rental Mobil",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tour Travel Bandung Sumedang",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rental Mobil dengan Driver",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Paket Wisata KKN",
            },
          },
        ],
      },
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://diraprajatrans.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Armada",
          item: "https://diraprajatrans.com#armada",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Layanan",
          item: "https://diraprajatrans.com#layanan",
        },
      ],
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Dirapraja Trans",
      url: "https://diraprajatrans.com",
      logo: "https://diraprajatrans.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-812-3456-7890",
        contactType: "Customer Service",
        areaServed: "ID",
        availableLanguage: ["Indonesian"],
      },
      sameAs: [
        "https://www.facebook.com/diraprajatrans",
        "https://www.instagram.com/diraprajatrans",
      ],
    };

    // Combine all schemas
    const allSchemas = [
      localBusinessSchema,
      carRentalSchema,
      serviceSchema,
      breadcrumbSchema,
      organizationSchema,
    ];

    // Insert or update script tag
    let script = document.querySelector(
      'script[type="application/ld+json"]'
    ) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(allSchemas);
  }, []);

  return null;
};
