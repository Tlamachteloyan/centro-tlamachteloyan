"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Voluntariado() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "voluntarios"), {
        ...form,
        fecha: new Date(),
      });

      setSuccess(true);
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className="max-w-3xl mx-auto p-10 bg-white rounded-xl shadow-sm mt-10">
      <h1 className="text-3xl font-bold mb-6 text-green-900">
        Registro de Voluntariado
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="nombre"
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={handleChange}
          required
          className="border p-3 rounded-lg"
        />

        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-3 rounded-lg"
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
          className="border p-3 rounded-lg"
        />

        <textarea
          name="mensaje"
          placeholder="¿Por qué quieres ser voluntario?"
          value={form.mensaje}
          onChange={handleChange}
          required
          className="border p-3 rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-900 text-white p-3 rounded-lg font-semibold"
        >
          {loading ? "Enviando..." : "Enviar solicitud"}
        </button>

        {success && (
          <p className="text-green-700 font-medium">
            ¡Solicitud enviada correctamente!
          </p>
        )}
      </form>
    </main>
  );
}
