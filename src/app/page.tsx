"use client";

import { Header, Sidebar } from "@/components/index";
import { MainContent } from "@/sections/index";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <main>
      <Sidebar />
      {pathname !== "/login" ? <Header /> : null}
      <MainContent />
    </main>
  );
}
