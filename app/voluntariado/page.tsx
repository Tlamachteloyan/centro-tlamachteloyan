"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function Voluntariado() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">

        <Image
          src="/hero2.png"
          alt="Voluntariado"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Sé parte del cambio
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Tu tiempo y talento pueden transformar vidas en nuestra comunidad.
          </p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold">
            ¿Por qué ser voluntario?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Impacto real</h3>
              <p className="text-gray-600 mt-3">
                Contribuye directamente al desarrollo de la comunidad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Aprendizaje</h3>
              <p className="text-gray-600 mt-3">
                Desarrolla habilidades personales y profesionales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="font-semibold text-lg">Comunidad</h3>
              <p className="text-gray-600 mt-3">
                Forma parte de una red comprometida con el cambio social.
              </p>
            </div>

          </div>

        </section>
      </AnimatedSection>

      {/* TIPOS DE VOLUNTARIADO */}
      <AnimatedSection>
        <section className="bg-gray-50 py-20 px-6">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-semibold text-center">
              Áreas de voluntariado
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold">Educación</h3>
                <p className="text-gray-600 mt-2">
                  Apoyo en talleres y formación educativa.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold">Cultura</h3>
                <p className="text-gray-600 mt-2">
                  Promoción de tradiciones y lengua.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold">Tecnología</h3>
                <p className="text-gray-600 mt-2">
                  Apoyo en la ciberescuela y herramientas digitales.
                </p>
              </div>

            </div>

          </div>

        </section>
      </AnimatedSection>

      {/* FORMULARIO */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-3xl mx-auto">

          <h2 className="text-3xl font-semibold text-center">
            Únete como voluntario
          </h2>

          <form className="mt-10 space-y-6">

            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border p-3 rounded-lg"
            />

            <select className="w-full border p-3 rounded-lg">
              <option>Área de interés</option>
              <option>Educación</option>
              <option>Cultura</option>
              <option>Tecnología</option>
            </select>

            <textarea
              placeholder="¿Por qué quieres ser voluntario?"
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Enviar solicitud
            </button>

          </form>

        </section>
      </AnimatedSection>

    </main>
  );
}