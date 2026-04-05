"use client";

import { useState } from "react";

export default function FloatingSocialMenu() {
  const [open, setOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/527771234567?text=Hola, quiero información sobre el Centro Comunitario Tlamachteloyan";

  const facebookUrl = "https://facebook.com/tuPagina";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* BOTONES DESPLEGABLES */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* FACEBOOK */}
        <a
          href={facebookUrl}
          target="_blank"
          className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="22" height="22">
            <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H7.9v-2.9h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8h2.7l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
          </svg>
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="22" height="22">
            <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.4 2 7.7L.4 31.6l8.3-2.1c2.2 1.2 4.8 1.9 7.3 1.9 8.5 0 15.4-6.9 15.4-15.4C31.4 7.3 24.5.4 16 .4zm0 28.3c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-4.9 1.2 1.3-4.8-.3-.5c-1.2-2-1.8-4.3-1.8-6.7 0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7-5.7 12.8-12.8 12.8zm6.9-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.2.8.9.3 1.8.3 2.5.2.8-.1 2.3-.9 2.7-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
          </svg>
        </a>
      </div>

      {/* BOTÓN PRINCIPAL */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}