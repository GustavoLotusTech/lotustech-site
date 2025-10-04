import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata para SEO e redes sociais
export const metadata: Metadata = {
  metadataBase: new URL("https://www.lotustecnologia.com.br"),
  title: "LotusTech - Desenvolvimento de Software Sob Medida",
  description:
    "Criamos softwares sob medida, aplicativos mobile e integrações para empresas. Transforme ideias em soluções digitais inovadoras com a LotusTech.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "LotusTech - Desenvolvimento de Software Sob Medida",
    description:
      "Soluções digitais inovadoras em desenvolvimento de software, aplicativos mobile e integrações.",
    url: "https://www.lotustecnologia.com.br",
    siteName: "LotusTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LotusTech Soluções Digitais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LotusTech - Desenvolvimento de Software Sob Medida",
    description:
      "Soluções digitais inovadoras em desenvolvimento de software, aplicativos mobile e integrações.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.lotustecnologia.com.br",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* ✅ Melhor indexação e responsividade */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BF55XTH7JN"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BF55XTH7JN');
          `}
        </Script>
      </body>
    </html>
  );
}
