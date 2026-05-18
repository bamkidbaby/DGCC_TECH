import type { ReactNode } from "react";
import CorporateNavbar from "../components/CorporateNavbar";
import CorporateFooter from "../components/CorporateFooter";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CorporateNavbar />
      <main className="min-h-screen bg-white">{children}</main>
      <CorporateFooter />
      <ScrollToTopButton />
    </>
  );
}
