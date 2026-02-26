import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const GA_MEASUREMENT_ID ="G-F1D82KF4XD";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"],});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"],});

export const metadata: Metadata = { title: "InfoBeatLive Agency",
  description: `We build high-performance websites and solutions for professionals, and local business that turn 
  clicks into confirmed bookings. No fluff. Just growth.`,};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
       <head>

        <Script strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/>

        <Script id="google-analytics" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} 
            window.gtag = gtag; gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname, });`,}}
        />

       <Script async
         src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2297424135683590"
         crossOrigin="anonymous" strategy="afterInteractive"/>

       </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
