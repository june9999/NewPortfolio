import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/shared/Header";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monserrat",
});
// provided by next-js
/* <meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" /> */
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Portfolio - Wenjun",
  description:
    "I am Wenjun, a junior software developer. Here, you’ll find the culmination of my passion for technology.",
  creator: "Wenjun Xue",
  openGraph: {
    title: "Portfolio - Wenjun",
    locale: "en_US",
    siteName: "Portfolio - Wenjun",
    // url: pathname,
    type: "website",
    description:
      "I am Wenjun, a junior software developer. Here, you’ll find the culmination of my passion for technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.className} min-h-screen flex flex-col w-full cover  `}
      >
        <UserProvider>
          <Header />
          <main className={`grow flex p-[2rem] md:p-[5rem]`}>{children}</main>
        </UserProvider>
        <Analytics />
      </body>
    </html>
  );
}
