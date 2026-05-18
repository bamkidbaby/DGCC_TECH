import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-[88px]">{children}</main>

      <Footer />
    </>
  );
}
