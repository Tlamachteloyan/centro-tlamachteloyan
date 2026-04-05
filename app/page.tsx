"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";

export default function Home() {

  // PARALLAX
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-slate-900">

      {/* HERO PARALLAX */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

        {/* IMAGEN */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${offsetY * 0.3}px)`
          }}
        >
          <Image
            src="/hero2.png"
            alt="Comunidad"
            fill
            className="object-cover scale-110"
            priority
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Centro Comunitario
            <br />
            <span className="text-green-400">Tlamachteloyan</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Aprender, preservar y transformar desde la comunidad.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/programas"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Ver programas
            </Link>

            <Link
              href="/donaciones"
              className="bg-green-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Donar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* STORYTELLING */}
      <StorySection />

      {/* GALERÍA */}
      <GallerySection />

      {/* IMPACTO */}
      <AnimatedSection>
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10">

            <div>
              <h2 className="text-4xl font-bold text-green-600">
                +<Counter value={500} />
              </h2>
              <p className="mt-2 text-gray-600">Personas beneficiadas</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-600">
                <Counter value={15} />
              </h2>
              <p className="mt-2 text-gray-600">Programas comunitarios</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-600">
                <Counter value={5} />
              </h2>
              <p className="mt-2 text-gray-600">Años de trabajo social</p>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* PROGRAMAS */}
      <AnimatedSection delay={0.2}>
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl text-center font-semibold">
            Nuestros Programas
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Educación Comunitaria</h3>
              <p className="mt-3 text-gray-600">
                Talleres formativos, apoyo escolar e impulso a la educación intercultural.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Cultura e Identidad</h3>
              <p className="mt-3 text-gray-600">
                Preservación de tradiciones, lengua y expresiones culturales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Desarrollo Social</h3>
              <p className="mt-3 text-gray-600">
                Proyectos comunitarios que fortalecen el tejido social.
              </p>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* TESTIMONIOS */}
      <AnimatedSection delay={0.3}>
        <section className="bg-gray-50 py-24 px-6">
          <h2 className="text-3xl text-center font-semibold">
            Voces de la comunidad
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-600 italic">
                "Gracias al centro comunitario, mis hijos ahora tienen acceso a educación y tecnología."
              </p>
              <h4 className="mt-4 font-semibold">María López</h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-600 italic">
                "Aprender Náhuatl aquí me hizo sentir orgulloso de mi cultura."
              </p>
              <h4 className="mt-4 font-semibold">José Hernández</h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-600 italic">
                "Este espacio cambió mi vida y me dio nuevas oportunidades."
              </p>
              <h4 className="mt-4 font-semibold">Ana Martínez</h4>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.4}>
        <section className="text-center py-24 bg-slate-900 text-white">
          <h2 className="text-3xl font-semibold">
            Construyamos el futuro juntos
          </h2>

          <p className="mt-4 text-gray-300">
            Tu apoyo hace posible este proyecto
          </p>

          <Link
            href="/donaciones"
            className="mt-6 inline-block bg-green-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Donar ahora
          </Link>
        </section>
      </AnimatedSection>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10">
        <p>© 2026 Centro Comunitario Tlamachteloyan A.C.</p>
        <p className="text-sm mt-2">Xoxocotla, Morelos</p>
      </footer>

    </main>
  );
}