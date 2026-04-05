"use client";

import { useEffect, useState } from "react";

export default function FacebookButton() {
  const url = "https://www.facebook.com/profile.php?id=61582237643054"; // ← cambia tu link

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);

      setTimeout(() => setShowTooltip(false), 4000);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-24 z-50 group">

      {/* TOOLTIP */}
      <span
        className={`absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-lg shadow whitespace-nowrap transition-all duration-300 ${
          showTooltip
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        } group-hover:opacity-100`}
      >
        Síguenos en Facebook
      </span>

      {/* BOTÓN */}
      <a
        href={url}
        target="_blank"
        className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
      >
        {/* ICONO FACEBOOK */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="24"
          height="24"
        >
          <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7H7.9v-2.9h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.8h2.7l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
        </svg>
      </a>

    </div>
  );
}