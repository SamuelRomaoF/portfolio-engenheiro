import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-roboto",
});

export const metadata = {
  title: 'Rekai Engenharia - Arquitetura e Engenharia Especializada',
  description: 'Soluções completas de arquitetura e engenharia para seu projeto',
  metadataBase: new URL('https://rekaengenharia.com.br'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/icone-rekai.png" />
      </head>
      <body
        className={`${roboto.variable} font-roboto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
