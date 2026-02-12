"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function DonacionesPage() {
  const [amount, setAmount] = useState(100);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const success = searchParams.get("success");
  const cancel = searchParams.get("cancel");

  const handleDonate = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Error iniciando pago");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión");
    }

    setLoading(false);
  };

  return (
    <main className="max-w-3xl mx-auto p-10 bg-white rounded-xl shadow-sm mt-10">
      <h1 className="text-3xl font-bold mb-6 text-green-900">
        Donaciones
      </h1>

      {success && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
          Gracias por tu donación. Tu apoyo fortalece nuestra comunidad.
        </div>
      )}

      {cancel && (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">
          El pago fue cancelado.
        </div>
      )}

      <p className="mb-6 text-gray-600">
        Tu aportación fortalece nuestros programas educativos y culturales.
      </p>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-3 rounded-lg mb-4 w-full"
      />

      <button
        onClick={handleDonate}
        disabled={loading}
        className="bg-green-900 text-white p-3 rounded-lg font-semibold w-full"
      >
        {loading ? "Procesando..." : "Donar con tarjeta"}
      </button>
    </main>
  );
}
