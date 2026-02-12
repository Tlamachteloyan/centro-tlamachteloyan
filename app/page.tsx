import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">

      <section className="relative h-screen flex items-center justify-center text-white text-center">

        {/* Imagen de fondo */}
        <Image
          src="/images/hero.jpeg"
          alt="Centro Comunitario Tlamachteloyan"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-6">
            Centro Comunitario Tlamachteloyan
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Aprender, preservar y transformar desde la comunidad.
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/programas" className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold">
              Conoce nuestros programas
            </Link>
            <Link href="/donaciones" className="bg-amber-600 px-6 py-3 rounded-lg font-semibold">
              Dona ahora
            </Link>
          </div>
        </div>

      </section>

      {/* IMPACTO */}
      <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center px-6">
    
          <div>
              <h2 className="text-4xl font-bold text-green-900">+500</h2>
              <p className="mt-2 text-gray-600">Personas beneficiadas</p>
          </div>

          <div>
              <h2 className="text-4xl font-bold text-green-900">15</h2>
              <p className="mt-2 text-gray-600">Programas comunitarios</p>
          </div>

          <div>
              <h2 className="text-4xl font-bold text-green-900">5</h2>
              <p className="mt-2 text-gray-600">Años de trabajo social</p>
          </div>

          </div>
      </section>

        {/* PROGRAMAS DESTACADOS */}
      <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
    
              <h2 className="text-3xl font-bold text-center mb-12 text-green-900">
                Nuestros Programas
              </h2>

          <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Educación Comunitaria</h3>
              <p className="text-gray-600">
                  Talleres formativos, apoyo escolar e impulso a la educación intercultural.
              </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Cultura e Identidad</h3>
              <p className="text-gray-600">
                Preservación de tradiciones, lengua y expresiones culturales.
              </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Desarrollo Social</h3>
              <p className="text-gray-600">
                Proyectos comunitarios que fortalecen el tejido social y la participación.
              </p>
          </div>

          </div>

          </div>
      </section>



    </main>
  );
}
