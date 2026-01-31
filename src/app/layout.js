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
