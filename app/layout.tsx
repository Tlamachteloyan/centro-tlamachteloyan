import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import FacebookButton from "@/components/FacebookButton";

export const metadata = {
  title: "Centro Comunitario Tlamachteloyan",
  description: "Educación, cultura y desarrollo comunitario en Xoxocotla, Morelos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENIDO */}
        {children}

        {/* BOTONES FLOTANTES 🔥 */}
        <WhatsAppButton />
        <FacebookButton />

      </body>
    </html>
  );
}