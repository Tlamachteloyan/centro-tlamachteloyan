export default function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold max-w-3xl">
          Transformando comunidades a través de la educación
        </h1>
        <p className="mt-4 text-gray-500">
          Centro Comunitario Tlamachteloyan
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full">
            Participar
          </button>
          <button className="bg-gray-200 px-6 py-3 rounded-full">
            Donar
          </button>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="flex justify-around py-20 text-center">
        <div>
          <h2 className="text-3xl font-bold">+500</h2>
          <p>Personas beneficiadas</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">20</h2>
          <p>Talleres</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">5</h2>
          <p>Comunidades</p>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="text-center py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold">Nuestra misión</h2>
        <p className="mt-4 text-gray-600">
          Impulsamos el desarrollo comunitario mediante educación, tecnología y cultura indígena.
        </p>
      </section>

      {/* PROGRAMAS */}
      <section className="bg-gray-50 py-24 px-6">
        <h2 className="text-3xl text-center mb-12 font-semibold">Programas</h2>

        <div className="flex gap-8 justify-center flex-wrap">
          <div className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition">
            <h3 className="font-bold">Lengua Náhuatl</h3>
            <p className="text-gray-500 mt-2">Rescate cultural</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition">
            <h3 className="font-bold">Ciberescuela</h3>
            <p className="text-gray-500 mt-2">Educación digital</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition">
            <h3 className="font-bold">Talleres culturales</h3>
            <p className="text-gray-500 mt-2">Arte y comunidad</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24">
        <h2 className="text-3xl font-semibold">
          Construyamos el futuro juntos
        </h2>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full">
          Donar ahora
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white text-center py-10">
        <p>Centro Comunitario Tlamachteloyan</p>
        <p className="text-sm mt-2">contacto@tlamachteloyan.org</p>
      </footer>

    </main>
  );
}