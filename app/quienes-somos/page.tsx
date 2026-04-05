import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function QuienesSomos() {
  return (
    <main className="bg-white text-slate-900 pt-24">

      {/* HERO */}
      <section className="text-center px-6 max-w-4xl mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Quiénes somos
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Somos un espacio comunitario dedicado al aprendizaje, la cultura y el desarrollo social,
          enfocado en fortalecer nuestra identidad y generar oportunidades para todas y todos.
        </p>
      </section>

      {/* HISTORIA */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/story1.jpg"
              alt="Historia"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Nuestra historia</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              El Centro Comunitario Tlamachteloyan nace con el propósito de crear un espacio
              donde la educación, la cultura y la identidad se fortalezcan dentro de la comunidad.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A través del trabajo colectivo, hemos impulsado talleres, actividades culturales
              y espacios de aprendizaje que permiten a niñas, niños y jóvenes desarrollar
              habilidades y preservar sus raíces.
            </p>
          </div>

        </section>
      </AnimatedSection>

      {/* MISIÓN Y VISIÓN */}
      <AnimatedSection>
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Misión</h3>
              <p className="mt-4 text-gray-600">
                Brindar acceso a educación, cultura y desarrollo comunitario mediante programas
                inclusivos que fortalezcan la identidad y mejoren la calidad de vida.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Visión</h3>
              <p className="mt-4 text-gray-600">
                Ser un referente comunitario en educación intercultural y desarrollo social,
                impulsando una sociedad más justa, participativa y con identidad.
              </p>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* VALORES */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Nuestros valores</h2>

          <div className="grid md:grid-cols-4 gap-8 mt-12">

            <div>
              <h4 className="font-semibold">Identidad</h4>
              <p className="text-gray-600 mt-2">Preservamos nuestras raíces culturales.</p>
            </div>

            <div>
              <h4 className="font-semibold">Educación</h4>
              <p className="text-gray-600 mt-2">Promovemos el aprendizaje continuo.</p>
            </div>

            <div>
              <h4 className="font-semibold">Comunidad</h4>
              <p className="text-gray-600 mt-2">Trabajamos de manera colectiva.</p>
            </div>

            <div>
              <h4 className="font-semibold">Inclusión</h4>
              <p className="text-gray-600 mt-2">Espacios para todas y todos.</p>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* EQUIPO */}
      <AnimatedSection>
        <section className="bg-gray-50 py-20 px-6">
          <h2 className="text-3xl text-center font-semibold">
            Nuestro equipo
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200"></div>
              <h4 className="mt-4 font-semibold">Director General</h4>
              <p className="text-gray-500 text-sm">Nombre</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200"></div>
              <h4 className="mt-4 font-semibold">Coordinador</h4>
              <p className="text-gray-500 text-sm">Nombre</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200"></div>
              <h4 className="mt-4 font-semibold">Voluntariado</h4>
              <p className="text-gray-500 text-sm">Equipo</p>
            </div>

          </div>
        </section>
      </AnimatedSection>

    </main>
  );
}