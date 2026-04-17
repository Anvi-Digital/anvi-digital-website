import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navbar />
      <main id="main-content">{children}</main>
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
