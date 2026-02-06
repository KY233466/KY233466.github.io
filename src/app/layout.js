import Script from "next/script";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import ClientProviders from "./providers";

export const metadata = {
  title: "Katie Yang – Portfolio",
  description:
    "Portfolio of Katie Yang featuring software, product, and design projects.",
  metadataBase: new URL("https://ky233466.github.io"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo192.png",
  },
  openGraph: {
    title: "Katie Yang – Portfolio",
    description:
      "Software, product, and design work by Katie Yang with case studies and project details.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katie Yang – Portfolio",
    description:
      "Software, product, and design work by Katie Yang with case studies and project details.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BP3EBZ4HHL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-BP3EBZ4HHL');`}
        </Script>
      </head>
      <body>
        <ClientProviders>
          <Navbar />
          <main className="page-shell">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
