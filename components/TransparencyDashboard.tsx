"use client";

import AnimatedSection from "./AnimatedSection";

export default function TransparencyDashboard() {
  return (
    <AnimatedSection>
      <section className="py-16 px-6 max-w-6xl mx-auto">

        <h2 className="text-2xl font-semibold">
          Indicadores de impacto
        </h2>

        {/* GRID KPI */}
        <div className="mt-8 grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-3xl font-bold text-green-600">+500</h3>
            <p className="text-gray-600 mt-2">Personas beneficiadas</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-3xl font-bold text-blue-600">15</h3>
            <p className="text-gray-600 mt-2">Programas activos</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-3xl font-bold text-yellow-500">+40</h3>
            <p className="text-gray-600 mt-2">Talleres realizados</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-3xl font-bold text-purple-600">5 años</h3>
            <p className="text-gray-600 mt-2">Trayectoria</p>
          </div>

        </div>

      </section>
    </AnimatedSection>
  );
}