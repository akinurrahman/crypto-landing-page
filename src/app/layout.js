import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Crypgo - Trade Crypto Securely",
  description:
    "Crypgo is a secure and user-friendly crypto exchange platform designed for seamless trading.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.className}  antialiased`}>{children}</body>
    </html>
  );
}
