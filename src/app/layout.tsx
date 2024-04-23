"use client";

import { Header, Sidebar } from "@/components/index";
import { GeistSans } from "geist/font/sans";
import "../styles/globals.scss";

// export const metadata: Metadata = {
//   title: "42companion",
//   description: "Your friendly companion for 42 students",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <main>
          <Sidebar />
          <Header />
          <div className="content">{children}</div>
        </main>
      </body>
    </html>
  );
}
