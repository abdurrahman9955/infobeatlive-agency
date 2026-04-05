import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Analytics from "../components/Analytics";
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

        <Script
         id="retell-widget"
         src="https://dashboard.retellai.com/retell-widget.js"
         strategy="afterInteractive"
        type="module"
        {...{
         "data-public-key": "public_key_537c25f81d4e7374a56bd",
         "data-agent-id": "agent_aea705e2f5921b95cd3677309b",
         "data-title": "Chat with David",
         "data-logo-url":"/chat-logo.png",
         "data-color": "#0A84DA",
         "data-bot-name": "David",
         "data-popup-message": "Hi 👋 Need help?",
         "data-show-ai-popup": "true",
         "data-show-ai-popup-time": "5",
         "data-auto-open":"true", }}/>
      
         {/* <Script
           id="retell-widget"
           src="https://dashboard.retellai.com/retell-widget.js"
           type="module"
           data-public-key="YOUR_RETELL_PUBLIC_KEY"
           data-agent-id="YOUR_CHAT_AGENT_ID"
           data-agent-version="YOUR_AGENT_VERSION"
           data-title="YOUR_CUSTOM_TITLE"
           data-logo-url="YOUR_LOGO_URL"
           data-color="YOUR_CUSTOM_COLOR"
           data-bot-name="YOUR_BOT_NAME"
           data-popup-message="YOUR_POPUP_MESSAGE"
           data-show-ai-popup="true"
           data-show-ai-popup-time="5"
           data-auto-open="false"
           data-dynamic='{"key": "value"}'
           data-recaptcha-key="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
           ></Script> */}

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
        <Analytics />
        {children}

      </body>
    </html>
  );
}
