import AnimatedSection from "@/components/AnimatedSection";

export default function Transparencia() {
  return (
    <main className="bg-white text-slate-900 pt-24">

      {/* HEADER */}
      <section className="text-center px-6 max-w-4xl mx-auto py-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Transparencia
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Nuestro compromiso es actuar con honestidad, claridad y responsabilidad
          en el uso de los recursos.
        </p>
      </section>

      {/* INFORMACIÓN */}
      <AnimatedSection>
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Información legal</h2>

          <div className="mt-6 space-y-3 text-gray-600">
            <p><strong>Nombre:</strong> Centro Comunitario Tlamachteloyan A.C.</p>
            <p><strong>Ubicación:</strong> Xoxocotla, Morelos</p>
            <p><strong>Objeto:</strong> Educación y desarrollo comunitario</p>
          </div>
        </section>
      </AnimatedSection>

      {/* USO DE RECURSOS */}
      <AnimatedSection>
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold">Uso de recursos</h2>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow">
                Educación
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                Infraestructura
              </div>
              <div className="bg-white p-6 rounded-xl shadow">
                Cultura
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

    </main>
  );
}
