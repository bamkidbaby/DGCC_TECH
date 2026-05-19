import { useEffect } from "react";
import type { ReactNode } from "react";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import CorporateNavbar from "../components/CorporateNavbar";
import CorporateFooter from "../components/CorporateFooter";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function MainLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <CorporateNavbar />
      <main className="min-h-screen bg-white">{children}</main>
      <CorporateFooter />
      <ScrollToTopButton />
    </>
  );
}
