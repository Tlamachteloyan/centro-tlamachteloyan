"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const programas = [
  {
    title: "Educación comunitaria",
    description: "Talleres educativos para niñas, niños y jóvenes.",
    image: "/programa1.jpg",
  },
  {
    title: "Lengua Náhuatl",
    description: "Preservación y enseñanza de nuestra lengua originaria.",
    image: "/programa2.jpg",
  },
  {
    title: "Ciberescuela",
    description: "Acceso a tecnología e internet para la comunidad.",
    image: "/programa3.jpg",
  },
];

export default function Programas() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">

        <Image
          src="/hero2.png"
          alt="Programas"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Nuestros Programas
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Iniciativas que transforman vidas en nuestra comunidad.
          </p>
        </div>
      </section>

      {/* PROGRAMAS */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center">
            Áreas de trabajo
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {programas.map((programa, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={programa.image}
                    alt={programa.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg">
                    {programa.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {programa.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </section>
      </AnimatedSection>

      {/* IMPACTO */}
      <AnimatedSection>
        <section className="bg-gray-50 py-20 px-6">

          <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-3xl font-semibold">
              Impacto de nuestros programas
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">

              <div>
                <h3 className="text-4xl font-bold text-green-600">+500</h3>
                <p className="text-gray-600 mt-2">Beneficiarios</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-600">+40</h3>
                <p className="text-gray-600 mt-2">Talleres</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-500">+5</h3>
                <p className="text-gray-600 mt-2">Años de trabajo</p>
              </div>

            </div>

          </div>

        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20 px-6 text-center">

          <h2 className="text-3xl font-semibold">
            Súmate a nuestros programas
          </h2>

          <p className="text-gray-600 mt-4">
            Puedes participar como voluntario, beneficiario o aliado.
          </p>

          <a
            href="/contacto"
            className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Contáctanos
          </a>

        </section>
      </AnimatedSection>

    </main>
  );
}