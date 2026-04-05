import AnimatedSection from "@/components/AnimatedSection";
import ImpactChart from "@/components/ImpactChart";
import DocumentsSection from "@/components/DocumentsSection";
import TransparencyDashboard from "@/components/TransparencyDashboard";
import PieChartSection from "@/components/PieChartSection";
import LineChartSection from "@/components/LineChartSection";

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
          en el uso de los recursos y en cada una de nuestras actividades.
        </p>
      </section>

      {/* DASHBOARD KPI */}
      <TransparencyDashboard />

      {/* INFORMACIÓN LEGAL */}
      <AnimatedSection>
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Información legal</h2>

          <div className="mt-6 space-y-3 text-gray-600">
            <p><strong>Nombre:</strong> Centro Comunitario Tlamachteloyan A.C.</p>
            <p><strong>Tipo:</strong> Asociación Civil</p>
            <p><strong>Ubicación:</strong> Xoxocotla, Morelos</p>
            <p><strong>Objeto social:</strong> Desarrollo comunitario, educación y cultura</p>
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
                <h3 className="font-semibold">Educación</h3>
                <p className="text-gray-600 mt-2">
                  Programas educativos, talleres y capacitación comunitaria.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">Infraestructura</h3>
                <p className="text-gray-600 mt-2">
                  Equipamiento, mantenimiento y mejora de espacios.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">Cultura</h3>
                <p className="text-gray-600 mt-2">
                  Actividades culturales y preservación de tradiciones.
                </p>
              </div>

            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* GRÁFICA DE BARRAS */}
      <AnimatedSection>
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">
            Distribución de recursos
          </h2>

          <p className="mt-4 text-gray-600">
            Representación aproximada del uso de los recursos en nuestros programas.
          </p>

          <div className="mt-8">
            <ImpactChart />
          </div>
        </section>
      </AnimatedSection>

      {/* NUEVAS GRÁFICAS 🔥 */}
      <AnimatedSection>
        <section className="py-16 px-6 max-w-6xl mx-auto">

          <h2 className="text-2xl font-semibold">
            Análisis de impacto
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8">

            <PieChartSection />
            <LineChartSection />

          </div>

        </section>
      </AnimatedSection>

      {/* DOCUMENTOS PDF */}
      <DocumentsSection />

      {/* COMPROMISO */}
      <AnimatedSection>
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold">Nuestro compromiso</h2>

            <ul className="mt-6 text-gray-600 list-disc pl-6 space-y-2">
              <li>Uso transparente de los recursos</li>
              <li>Informes periódicos de actividades</li>
              <li>Seguimiento del impacto comunitario</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

    </main>
  );
}