"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contacto() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">

        <Image
          src="/hero2.png"
          alt="Contacto"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contáctanos
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Estamos aquí para escucharte y colaborar contigo.
          </p>
        </div>
      </section>

      {/* INFO + FORMULARIO */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* INFO */}
          <div>
            <h2 className="text-3xl font-semibold">
              Información de contacto
            </h2>

            <div className="mt-6 space-y-4 text-gray-600">

              <p>📍 Xoxocotla, Morelos</p>
              <p>📞 734 279 0702</p>
              <p>📧 tlamachteloyancecodi@gmail.com</p>

            </div>

            <div className="mt-8 text-gray-600">
              <p>
                Si deseas colaborar, donar o participar en nuestras actividades,
                no dudes en comunicarte con nosotros.
              </p>
            </div>
          </div>

          {/* FORMULARIO */}
          <form className="bg-white p-8 rounded-2xl shadow space-y-6">

            <input
              type="text"
              placeholder="Nombre"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Escribe tu mensaje..."
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Enviar mensaje
            </button>

          </form>

        </section>
      </AnimatedSection>

      {/* MAPA */}
      <AnimatedSection>
        <section className="pb-20 px-6 max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6">
            Ubicación
          </h2>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow">

            <iframe
              src="https://www.google.com/maps?q=Xoxocotla,Morelos&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>

          </div>

        </section>
      </AnimatedSection>

    </main>
  );
}