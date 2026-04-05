"use client";

import AnimatedSection from "./AnimatedSection";

const documents = [
  {
    name: "Informe anual 2025",
    description: "Resumen de actividades y resultados del año",
    file: "/informe-2025.pdf",
  },
  {
    name: "Reporte de actividades",
    description: "Detalle de talleres, eventos y programas",
    file: "/reporte-actividades.pdf",
  },
  {
    name: "Informe de transparencia",
    description: "Uso de recursos y rendición de cuentas",
    file: "/transparencia.pdf",
  },
];

export default function DocumentsSection() {
  return (
    <AnimatedSection>
      <section className="py-16 px-6 max-w-6xl mx-auto">

        <h2 className="text-2xl font-semibold">
          Documentos y reportes
        </h2>

        <p className="mt-4 text-gray-600">
          Consulta y descarga nuestros documentos oficiales.
        </p>

        {/* GRID */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition group"
            >
              
              {/* ICONO */}
              <div className="text-4xl mb-4">📄</div>

              {/* TITULO */}
              <h3 className="font-semibold text-lg">
                {doc.name}
              </h3>

              {/* DESCRIPCIÓN */}
              <p className="text-gray-600 text-sm mt-2">
                {doc.description}
              </p>

              {/* BOTÓN */}
              <a
                href={doc.file}
                target="_blank"
                className="mt-6 inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition"
              >
                Ver documento
              </a>

            </div>
          ))}

        </div>

      </section>
    </AnimatedSection>
  );
}