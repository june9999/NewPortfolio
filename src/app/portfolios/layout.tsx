import { Metadata } from "next";

export const metadata: Metadata = {
  title: `My Projects - Wenjun`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
