import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Centro Comunitario Tlamachteloyan",
  description: "Organización comunitaria en Xoxocotla, Morelos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header className="bg-white shadow-md">
          <header className="bg-white shadow-md border-b">
             <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
                 <Link href="/" className="font-bold text-green-900 text-lg">
                     Tlamachteloyan
                 </Link>
                <div className="flex gap-6 text-sm text-gray-700 font-medium">
                  <Link href="/quienes-somos" className="hover:text-green-800">Quiénes Somos</Link>
                  <Link href="/programas" className="hover:text-green-800">Programas</Link>
                  <Link href="/transparencia" className="hover:text-green-800">Transparencia</Link>
                  <Link href="/voluntariado" className="hover:text-green-800">Voluntariado</Link>
                  <Link href="/donaciones" className="hover:text-green-800">Donaciones</Link>
                  <Link href="/contacto" className="hover:text-green-800">Contacto</Link>
               </div>
             </nav>
</header>

        </header>

        {children}

        <footer className="bg-green-900 text-white text-center p-6 mt-10">
          <p>© 2026 Centro Comunitario Tlamachteloyan A.C.</p>
          <p>Xoxocotla, Morelos</p>
        </footer>
      </body>
    </html>
  );
}
