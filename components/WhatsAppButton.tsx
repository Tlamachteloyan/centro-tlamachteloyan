"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const phone = "527342790702"; // Reemplaza con tu número de teléfono en formato internacional (sin signos ni espacios)
  const message =
    "Hola, quiero información sobre el Centro Comunitario Tlamachteloyan";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);

      // ocultar después de 4 segundos
      setTimeout(() => setShowTooltip(false), 4000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* TOOLTIP */}
      <span
        className={`absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-lg shadow whitespace-nowrap transition-all duration-300 ${
          showTooltip
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        } group-hover:opacity-100`}
      >
        ¿Necesitas ayuda?
      </span>

      {/* BOTÓN */}
      <a
        href={url}
        target="_blank"
        className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
      >
        {/* ICONO WHATSAPP */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          width="28"
          height="28"
        >
          <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.4 2 7.7L.4 31.6l8.3-2.1c2.2 1.2 4.8 1.9 7.3 1.9 8.5 0 15.4-6.9 15.4-15.4C31.4 7.3 24.5.4 16 .4zm0 28.3c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-4.9 1.2 1.3-4.8-.3-.5c-1.2-2-1.8-4.3-1.8-6.7 0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7-5.7 12.8-12.8 12.8zm6.9-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.2.8.9.3 1.8.3 2.5.2.8-.1 2.3-.9 2.7-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </a>

    </div>
  );
}