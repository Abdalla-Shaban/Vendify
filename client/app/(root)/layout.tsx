import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import UpButton from "@/components/UpButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative container">
      <UpButton />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
