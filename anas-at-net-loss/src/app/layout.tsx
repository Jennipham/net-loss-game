import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import ScrollToTop from "@/components/Utility/ScrollToTop/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}