import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEO = ({
  title = "Dirapraja Trans - Rental Mobil Bandung Sumedang | Tour Travel Terpercaya",
  description = "Rental mobil Bandung Sumedang terpercaya dengan harga terjangkau. Tersedia berbagai jenis mobil untuk kebutuhan perjalanan bisnis, liburan, tour travel, dan paket KKN. Layanan 24/7 dengan driver profesional.",
  keywords = "rental mobil bandung, rental mobil sumedang, sewa mobil bandung, sewa mobil sumedang, tour travel bandung, rental mobil murah, sewa mobil harian, rental mobil dengan driver, sewa mobil keluarga, paket tour bandung, paket kkn sumedang, rental avanza bandung, rental innova sumedang, dirapraja trans",
  ogImage = "https://diraprajatrans.com/og-image.jpg",
  canonicalUrl = "https://diraprajatrans.com",
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: "Dirapraja Trans" },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },

      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:site_name", content: "Dirapraja Trans" },
      { property: "og:locale", content: "id_ID" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: canonicalUrl },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },

      // Additional
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#004080" },
      { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },

      // Local Business SEO
      { name: "geo.region", content: "ID-JB" },
      { name: "geo.placename", content: "Bandung, Sumedang" },
      { name: "geo.position", content: "-6.914744;107.609810" },
      { name: "ICBM", content: "-6.914744, 107.609810" },
    ];

    metaTags.forEach(({ name, property, content, httpEquiv }) => {
      let meta = document.querySelector(
        name
          ? `meta[name="${name}"]`
          : property
          ? `meta[property="${property}"]`
          : `meta[http-equiv="${httpEquiv}"]`
      ) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (name) meta.setAttribute("name", name);
        if (property) meta.setAttribute("property", property);
        if (httpEquiv) meta.setAttribute("http-equiv", httpEquiv);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    });

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Alternate for language
    let alternate = document.querySelector(
      'link[rel="alternate"][hreflang="id"]'
    ) as HTMLLinkElement;
    if (!alternate) {
      alternate = document.createElement("link");
      alternate.rel = "alternate";
      alternate.hreflang = "id";
      document.head.appendChild(alternate);
    }
    alternate.href = canonicalUrl;
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};
