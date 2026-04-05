"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function StorySection() {
  return (
    <>
      {/* PRIMER BLOQUE */}
      <AnimatedSection>
        <section className="py-24 px-6 max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGEN */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/story1.jpg"
                alt="Comunidad aprendiendo"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXTO */}
            <div>
              <h2 className="text-3xl font-bold">
                Una comunidad que aprende, crece y preserva su identidad
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                En el Centro Comunitario Tlamachteloyan trabajamos todos los días para 
                brindar oportunidades educativas a niñas, niños y jóvenes, fortaleciendo 
                al mismo tiempo nuestras raíces culturales.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Desde talleres de lengua Náhuatl hasta acceso a tecnología en nuestra 
                ciberescuela, buscamos cerrar brechas y construir un futuro digno para 
                nuestra comunidad.
              </p>

            </div>
          </div>

        </section>
      </AnimatedSection>

      {/* SEGUNDO BLOQUE */}
      <AnimatedSection delay={0.2}>
        <section className="py-24 px-6 bg-gray-50">

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* TEXTO */}
            <div>
              <h2 className="text-3xl font-bold">
                Tu apoyo transforma vidas
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Cada donación permite ampliar nuestros programas, mejorar nuestras instalaciones 
                y llegar a más personas que necesitan acceso a educación y cultura.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Con tu ayuda, seguimos construyendo un espacio donde la comunidad se fortalece, 
                aprende y preserva su identidad.
              </p>

            </div>

            {/* IMAGEN */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/story2.jpg"
                alt="Impacto comunitario"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </section>
      </AnimatedSection>
    </>
  );
}