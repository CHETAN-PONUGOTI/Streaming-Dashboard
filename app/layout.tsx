import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Streaming Dashboard",
  description: "Mini Netflix clone using Next.js 14 + OMDb API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
